# 样本预处理

> 针对所研究的具体问题，样本分布是非平衡的！

## Z-Score标准化

首先对样本数据采用**Z-Score标准化**，去除不同量纲对特征值的影响，将特征值聚集到0附近，提高模型的训练速度，避免梯度消失和梯度爆炸。Z-Score用公式表示为，

$$z = \frac{x-\mu}{\sigma} $$

其中，$x$ 为某一具体分数，$\mu$ 为平均数，$\sigma$ 为标准差。

## 分层随机抽样

采用**分层（Stratified）随机抽样**的方法，将训练集和测试集以7:3比例划分，确保划分前后样本种类的分布不变。

- 因样本有偏，故采用分层随机抽样，确保划分前后样本种类分布不变。对于处理有偏样本而言，可以使用欠采样（Undersampling）、过采样（Oversampling）、从少数类中合成新的少数类数据的生成合成数据法、添加额外特征以丰富数据提高分类精度、基于成本的分类法等等 [1]，从而使得数据尽可能达到平衡，或者至少是使期望预测的成本误差达到最小；
- 当然，为了体现模型的鲁棒性，应使用分层K折交叉验证法（K-Fold Cross Validation）对数据集进行抽样，通常，K=10。但本实验中，K折交叉验证的实际意义不大，又考虑到需要作模型训练损失图，故不适用该方法；
- 理论上来说，应当将样本分为训练集、验证集（Validation）和测试集，以消除模型调参过程中对测试集真实预测结果的影响，但因样本数较少，故不划分验证集；
- 在实际模型处理预测问题时，所用测试集数据在训练时未知，故应当将训练集和测试集分别标准化，即二者 $\mu$ 和 $\sigma$ 应取不同值。但在研究实证问题中，样本数目有限的情况下，将样本统一进行归一化后再划分对结果的影响不大，所以采用该种方法处理数据集。

> [1] https://towardsdatascience.com/handling-imbalanced-datasets-in-machine-learning-7a0e84220f28

## 独热编码

使用**独热编码（One-Hot Encoding）**对样本标签进行编码，使其符合BP神经网络输出层输出张量的维度*(n_classes,)*，达到模型学习的目的。

```python
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split

def to_one_hot(labels):
    """
    Encode labels with categorical encoding
    :param labels: labels encoded with label encoder
    :return: one-hot encoded results
    """
    results = np.zeros((len(labels), len(set(labels))))
    for i, label in enumerate(labels):
        results[i,label] = 1.0
    return results

def initDataset(X, y, test_size=0.3):
    """
    Normalize, split and encode dataset
    :param X: feature values, array-like of shape (n_samples, n_features)
    :param y: labels for each sample
    :param test_size: float from 0 to 1 (Default: 0.3)
    :return: tuple of (X_train, X_test, y_train, y_test, y_train_encoded, y_test_encoded)
    """
    # Normalize the dataset features by Z-Score
    X_scaled = StandardScaler().fit_transform(X)
    # Split the dataset with stratified method
    # Default train_size:test_size = 7:3
    X_train, X_test, y_train, y_test = train_test_split(X_scaled,
                                                        y,
                                                        test_size=test_size,
                                                        random_state=986,
                                                        shuffle=True,
                                                        stratify=y)
    # Encode y with categorical encoding
    y_train_encoded = to_one_hot(y_train)
    y_test_encoded = to_one_hot(y_test)
    return X_train, X_test, y_train, y_test, y_train_encoded, y_test_encoded
```