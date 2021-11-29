# 模型结构拓扑图

模型保存为HDF5，同时，将模型各层 $w$ 和 $b$ 参数输出为Excel。

HDF5格式文件可使用Lutz Roeder的NETRON进行模型可视化。

> NETRON 网页版：https://netron.app

<embed src="pics/pic3.svg" type="image/svg+xml" style="margin: 1rem;" />

```python
def saveModel(model):
    """
    Save model's weights and biases for each layer, and print its brief description
    :param model: Model in Keras
    :return: None
    """
    print(model.summary())
    with pd.ExcelWriter('ModelDescription.xlsx') as writer:
        attr = {'header': False, 'index': False}
        for layer in model.layers:
            layer_name = layer.name
            weight = layer.get_weights()[0]
            bias = layer.get_weights()[1]
            # Print
            print('w[%s]: ' % layer_name)
            print(weight)
            print('b[%s]: ' % layer_name)
            print(bias)
            # Save as Excel
            pd.DataFrame(weight).to_excel(writer, 'w_%s'%layer_name, **attr)
            pd.DataFrame(bias).to_excel(writer, 'b_%s'%layer_name, **attr)
    # Save model as HDF5
    model.save('model.h5')
```

