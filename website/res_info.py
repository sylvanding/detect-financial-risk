def res_info_generate(score):

    # range('low', 'high')
    # circle('lineargradient1', 'lineargradient2', 'shadow')
    # text('h5', 'p') --> colors
    # content('h5', 'p')

    grade2 = {'range': (70, 100),
              'circle': ('#40916c', '#1b4332', '#74c69d'),
              'text': ('#2d6a4f', '#40916c'),
              'content': ('财务状况良好', '经系统检测，该公司财务状况良好的概率高达 ' + str(score) + '% ，未来一年的财务状况十分健康。建议企业继续保持当下发展战略，投资人可以进行投资！')}

    grade1 = {'range': (40, 69),
              'circle': ('#48bfe3', '#5390d9', '#64dfdf'),
              'text': ('#01497c', '#2c7da0'),
              'content': ('有潜在的财务风险', '经系统检测，该公司财务状况良好的概率是 ' + str(score) + '% ，虽然未来一年的财务状况较为健康，但仍存在财务危机发生的可能性。建议企业加强现金流和资产使用效率等方面的管理，投资人请保守投资！')}

    grade0 = {'range': (0, 39),
              'circle': ('#590d22', '#c9184a', '#ff8fa3'),
              'text': ('#a4133c', '#ff4d6d'),
              'content': ('财务危机发生的可能性较大', '经系统检测，该公司财务状况良好的概率是 ' + str(score) + '% ，该公司的财务状况较差，出现财务危机的可能性大。企业方需要进行整改，不建议投资方进行投资！')}

    for i in [grade0, grade1, grade2]:
        if i['range'][0] <= score <= i['range'][1]:
            return i

    return None


def is_number(s):
    try:
        float(s)
        return True
    except ValueError:
        pass

    try:
        import unicodedata
        unicodedata.numeric(s)
        return True
    except (TypeError, ValueError):
        pass

    return False
