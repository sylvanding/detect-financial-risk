# -*- coding: utf-8 -*-
from flask import Flask, render_template, request, redirect, url_for
import form_generate
from res_info import *
from math import floor
import model_pred
import notification_generate as ngt

app = Flask(__name__)


@app.route('/')
def index_page():
    left_form, right_form, selection = form_generate.generate()
    if 'score' in request.args and is_number(request.args.get('score')):
        score = floor(float(request.args.get('score')))
        res_info = res_info_generate(score)
        if res_info:
            return render_template('index.html',
                                   left_form=left_form,
                                   right_form=right_form,
                                   selection=selection,
                                   record_value=request.args,
                                   score=score,
                                   res_info=res_info)
    return render_template('index.html',
                           left_form=left_form,
                           right_form=right_form,
                           selection=selection,
                           record_value=request.args,
                           notification=ngt.note_generate())


@app.route('/predict', methods=['GET', 'POST'])
def predict_pro():
    if request.method == 'GET':
        return redirect('/')
    for i in request.form.values():
        if not is_number(i):
            return redirect('/')
    try:
        form_data = dict(request.form)
        form_data = model_pred.order_param(form_data)
        if form_data is None:
            raise Exception('Data posted is illegal!')
        form_data['score'] = model_pred.predictFinRisk(list(form_data.values()))
        return redirect(url_for('index_page', **form_data) + '#result_mod')
    except Exception as e:
        return str(e)


@app.errorhandler(404)
def page_not_found(e):
    return redirect(url_for('index_page'))


if __name__ == '__main__':
    app.run()
