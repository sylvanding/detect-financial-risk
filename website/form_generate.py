# -*- coding: utf-8 -*-
def generate():

    # Begin: Data Input Items

    left_col = {
        'items': ['销售毛利率(%)',  # x11
                  '销售净利率(%)',  # x12
                  '净资产收益率(%)',  # x13
                  '总资产报酬率(%)',  # x14
                  '投入资本回报率(%)',  # x15
                  '流动比率',  # x21
                  '速动比率',  # x22
                  '股东权益比率',  # x23
                  '已获利息倍数'],  # x24
        'tips': ['(主营业务收入-主营业务成本)/主营业务收入',  # x11
                 '净利润/销售收入',  # x12
                 '净利润/净资产',  # x13
                 '(利润总额+利息支出)/平均总资产',  # x14
                 '息前税后经营利润/(有息负债+净资产-超额现金-非经营性资产)',  # x15
                 '流动资产/流动负债',  # x21
                 '速动资产/流动负债',  # x22
                 '股东权益/资产总额',  # x23
                 '息税前利润/利息费用'],  # x24
        'id': ['form_x11',  # x11
               'form_x12',  # x12
               'form_x13',  # x13
               'form_x14',  # x14
               'form_x15',  # x15
               'form_x21',  # x21
               'form_x22',  # x22
               'form_x23',  # x23
               'form_x24']  # x24
    }

    right_col = {
        'items': ['资产负债率',  # x25
                  '应收账款周转率',  # x31
                  '总资产周转率',  # x32
                  '总资产增长率(%)',  # x41
                  '净资产增长率(%)',  # x42
                  '税后利润增长率(%)',  # x43
                  '营业收入增长率(%)',  # x44
                  '营业利润增长率(%)',  # x45
                  '管理费用率(%)'],  # x51
        'tips': ['负债合计/资产合计',  # x25
                 '赊销净额/应收账款平均余额',  # x31
                 '营业收入/平均资产总额',  # x32
                 '(资产总计本期期末值-资产总计本期期初值)/净资产总计本期期初值',  # x41
                 '(本期净资产总额-上期净资产总额)/上期净资产总额',  # x42
                 '(本期税后利润-基期税后利润)/基期税后利润',  # x43
                 '(营业收入本年本期金额-营业收入上年同期金额)/营业收入上年同期金额',  # x44
                 '(营业利润本年本期金额-营业利润上年同期金额)/营业利润上年同期金额',  # x45
                 '管理费/销售收入'],  # x51
        'id': ['form_x25',  # x25
               'form_x31',  # x31
               'form_x32',  # x32
               'form_x41',  # x41
               'form_x42',  # x42
               'form_x43',  # x43
               'form_x44',  # x44
               'form_x45',  # x45
               'form_x51']  # x51
    }
    # End: Data Input Items

    # Begin: Data Select Items
    select = (('form_x52', '总经理学历',
               (('form_x52_2', '硕士及以上'),
                ('form_x52_1', '本科学历'),
                ('form_x52_0', '其他'))),  # x52
              ('form_x53', '公司所在省份',
               (('form_x53_2', '直辖市'),
                ('form_x53_1', '省会'),
                ('form_x53_0', '其他'))),  # x53
              ('form_x54', '公司所在地的国内生产总值情况',
               (('form_x54_1', '生产总值排名前十以内'),
                ('form_x54_0', '生产总值排名前十以外'))))  # x54
    # End: Data Select Items

    return left_col, right_col, select
