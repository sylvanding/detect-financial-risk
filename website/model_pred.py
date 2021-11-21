import numpy as np
from tensorflow.keras.models import load_model


def predictFinRisk(fin_ind):
    """
        Predict a company's financial risk according to its indexes.
        :param fin_ind: financial indexes
        :return: the probability to be at a great financial condition
        """
    # load model
    model_path = 'BPNNmodel.h5'
    model = load_model(model_path)
    # calculate factor scores
    component_path = 'ComponentScoreCoefficient.csv'
    coefficient = np.loadtxt(component_path, dtype=np.float, delimiter=',')
    factors = np.asarray(fin_ind) @ coefficient
    # Z-score the factors
    zscore_path = 'ZscoreMeanandStd.csv'
    zscore = np.loadtxt(zscore_path, dtype=np.float, delimiter=',')
    factors = (factors - zscore[0, :]) / zscore[1, :]
    # predict probability
    probability = model.predict([list(factors)])
    return probability[0][1]*100


def order_param(multiForm: dict):
    condition = (('x11', (-9999999, 999999999)),
                 ('x12', (-9999999, 999999999)),
                 ('x13', (-9999999, 999999999)),
                 ('x14', (-9999999, 999999999)),
                 ('x15', (-9999999, 999999999)),
                 ('x21', (-9999999, 999999999)),
                 ('x22', (-9999999, 999999999)),
                 ('x23', (-9999999, 999999999)),
                 ('x24', (-9999999, 999999999)),
                 ('x25', (-9999999, 999999999)),
                 ('x31', (-9999999, 999999999)),
                 ('x32', (-9999999, 999999999)),
                 ('x41', (-9999999, 999999999)),
                 ('x42', (-9999999, 999999999)),
                 ('x43', (-9999999, 999999999)),
                 ('x44', (-9999999, 999999999)),
                 ('x45', (-9999999, 999999999)),
                 ('x51', (-9999999, 999999999)),
                 ('x52', (0, 2)),
                 ('x53', (0, 2)),
                 ('x54', (0, 1)))
    ordered = {}
    for i in condition:
        try:
            d = float(multiForm['form_'+i[0]])
            if i[1][0] <= d <= i[1][1]:
                ordered[i[0]] = d
            else:
                raise Exception
        except:
            return None
    for i in range(1, 4):
        ordered[condition[-i][0]] = int(ordered[condition[-i][0]])
    return ordered
