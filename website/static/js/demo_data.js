const demo_companies = [
    ["ST顺利",37.57,154.1,115.15,54.89,75.57,1.07,1.01,27.3,144.33,71.11,10.09,0.36,46.02,75.28,17.3,61.75,45.43,0.159157,2,1,0],
    ["*ST当代",34.31,10.29,16.33,5.46,4.41,0.89,0.42,9.21,1.17,104.51,0.66,0.14,1,10,104.03,57.94,59.5,0.263725,2,0,0],
    ["视觉中国",63.52,24.95,4.54,5.1,3.92,1.07,1.04,78.37,6.5,21.53,3.32,0.14,1.9,2.98,35.39,21,30.15,0.17408,2,0,0],
    ["ST北文",45.78,180.76,36.43,19.18,29.06,1.07,0.28,37.74,12.79,62.48,0.73,0.09,0.83,31.48,66.72,50.22,59.35,0.294571,2,2,1],
    ["*ST长动",92.51,3628.88,43.29,38,110.62,0.04,0.02,129.79,8.05,229.89,0.62,0.01,11.39,53.9,52.35,86.02,79.54,4.767281,1,1,1],
    ["中嘉博创",13.24,0.79,0.86,2.54,0.74,1.29,1.2,62.99,1.6,36.99,2.97,0.67,4.82,0.87,101.63,18.64,102.91,0.045412,2,0,0],
    ["紫光股份",19.85,5.43,6.54,6.28,5.28,1.51,1.05,50.56,15.64,41.9,6.81,1.05,7.55,5.54,2.78,10.36,5.17,0.01271,1,2,1],
    ["*ST天润",26.51,44.03,105.59,15.2,97.4,2.23,1.83,21.28,109.7,78.73,2.97,0.34,8.06,161.67,112.94,6.01,87.43,0.067802,2,0,0],
    ["北纬科技",46.74,7.94,1.39,1.03,1.39,8.17,7.99,90.19,7.76,8.66,6.56,0.13,0.6,1.4,154.79,6.22,156.68,0.166277,2,2,1],
    ["惠程科技",64.08,120.74,69.77,32.69,41.41,1.83,0.89,41.36,14.26,52.15,3.6,0.28,45.23,56.87,811.43,28.13,705.35,0.13372,1,0,1],
    ["游族网络",31.25,3.97,3.75,0.88,2.41,1.49,1.42,58.92,0.76,41.12,6.38,0.54,3.74,2.3,173.17,46.04,110.81,0.0955,2,0,0],
    ["奥飞娱乐",31.34,19,12.43,6.54,8.88,0.94,0.48,58.49,4.96,40.99,5.25,0.4,11.94,20.21,474.93,13.15,664.21,0.144664,2,0,0],
    ["中电兴发",39.22,10.7,6.77,5.17,5.39,1.41,1.16,60.05,10.75,37.29,2.01,0.38,4.8,2.56,5.25,0.39,0.17,0.061955,2,0,0],
    ["启明星辰",63.87,22.21,15.54,11.77,14.36,2.8,2.62,71.53,428.59,28.3,1.53,0.48,21.32,37.15,16.82,18.04,21.85,0.044328,2,2,1],
    ["*ST众应",75.61,119.95,229.62,2.66,29.2,0.15,0.15,26.05,0.17,126.05,2.41,0.15,19.39,420.31,76.4,42.56,76.51,0.235443,2,0,0],
    ["恺英网络",72.23,15.72,6.2,6.45,5.96,4.01,3.25,81.5,15.61,15.12,2.88,0.42,7.81,1.34,109.39,24.24,113.87,0.120332,2,0,0],
    ["三七互娱",87.79,21.08,42.26,31.15,36.98,1.29,1.05,57.15,140.23,42.59,11.74,1.39,4.13,14.11,30.56,8.86,21.85,0.025432,2,0,0],
    ["*ST艾格",62.59,687.29,45.36,43.6,45.03,38.44,38.17,95.08,52.52,3.34,0.41,0.06,37.48,36.74,51.18,67.15,58.39,0.304939,0,0,0],
    ["*ST索菱",15.68,127.13,1263.31,34.47,72.5,0.47,0.29,35.54,7.71,135.44,1.71,0.27,61.38,237.16,16868.85,9.26,5819.58,0.115148,2,0,1],
    ["京北方",27.95,12.04,22.98,19.8,22.55,6.41,6.34,84.83,198.12,15.17,4.66,1.54,134.68,181.13,58.03,35.9,55.68,0.038939,1,2,1],
    ["天地在线",7.43,3.21,14.24,10.12,14.24,2.59,1.46,63.43,27.51,36.57,43.17,2.68,102.5,136.59,5.94,36.66,8.31,0.008919,2,2,1],
    ["*ST数知",15.12,177.97,115.81,78.45,93.66,1.95,1.56,51.41,79.54,48.86,2.09,0.45,62.61,74.29,1486.34,21.28,1228,0.103744,0,2,1],
    ["*ST赛为",28.74,3.62,3.5,0.32,1.71,1.3,1.21,32.91,0.19,66.91,1.34,0.33,9.2,6.29,85.9,22.94,85.03,0.085162,2,0,1],
    ["ST三五",52.16,43.63,33.62,9.6,14.69,0.73,0.56,34.98,3.09,65.65,12.9,0.29,13.44,21.82,63.55,23.11,62.3,0.221958,2,0,0],
    ["*ST嘉信",30.06,59.75,299.26,29.9,97.94,0.49,0.49,41,3.78,140.28,1.32,0.63,34.82,539.57,5072.64,56.89,1215.66,0.177443,1,2,1],
    ["思创医惠",41.53,7.27,3.59,3.62,2.62,2.09,1.85,62.38,4.42,36.5,1.41,0.33,11.78,1.87,28.94,6.53,23.82,0.110552,1,1,1],
    ["迪威迅",21.21,46.34,25.11,12.16,18.08,1.74,1.38,52.09,6.79,40.4,0.87,0.27,24.13,22.5,767.69,52.01,442.46,0.284861,0,0,1],
    ["捷成股份",23.08,38.64,17.97,9.49,13.97,1.04,0.61,58.45,6.8,40.33,1.54,0.27,15.75,15.58,48.29,11.69,49.12,0.066631,2,2,1],
    ["ST联建",26.7,27.84,95.32,10.35,20.81,0.59,0.42,6.16,3.3,93.63,3.14,0.5,39.22,81.23,77.13,62.34,69.14,0.145082,1,0,1],
    ["华录百纳",32.15,40.38,3.36,3.11,3.36,12.93,9.41,93.45,7.79,6.38,0.6,0.08,17.46,17.09,1.31,53.57,4.65,0.278331,2,2,1],
    ["掌趣科技",72.13,17.46,5.72,6.18,5.72,4.55,4.33,88.93,17.23,11.07,10.36,0.29,3.89,0.3,12.83,10.65,6.81,0.064901,1,2,1],
    ["华虹计通",16.87,1.81,1.56,0.66,1.54,2.09,1.45,58.95,4.42,41.05,2.22,0.52,7.93,2.28,14.86,24.45,30.04,0.103042,2,2,1],
    ["中文在线",62.68,5.96,3.41,3.23,3.23,2.58,2.39,73.41,170.6,26.21,6.13,0.52,9.85,2.66,108.11,38.35,110.05,0.147131,2,2,1],
    ["运达科技",50.49,20.86,10.87,8.26,10.18,2.85,2.33,69.75,211.62,29.36,1.15,0.35,0.6,6.53,11.76,0.59,16.1,0.134653,2,1,1],
    ["创业慧康",55.42,20.59,9.88,8.46,9.32,2.92,2.52,78.86,142.08,20.43,1.9,0.37,46.23,59.85,5.82,10.34,5.85,0.106886,1,1,1],
    ["深信服",69.98,14.83,14.94,7.66,14.5,1.79,1.71,67.43,4.6,32.57,12.3,0.66,42.58,50.68,6.65,18.92,3.55,0.049799,2,0,1],
    ["盛讯达",65.03,81.83,18.61,13.68,15.48,1.65,1.61,64.24,111.12,34.15,3.37,0.15,0.72,20.38,165.42,5.55,148.89,0.144927,2,0,1],
    ["佳发教育",48.47,34.55,20.23,15.37,18.85,4.49,4.21,80.38,87.22,16.21,2.97,0.45,10.4,15.6,2.59,1.26,10.67,0.061375,2,1,1],
    ["平治信息",20.5,9.89,27.65,12.59,12.09,1.22,1.07,24.89,7.71,73.04,2.07,0.96,25.66,16.26,1.02,40.19,9.74,0.027139,2,1,1],
    ["中孚信息",66.08,24.35,22.89,18.69,22.89,4.65,4.3,79.76,43.4,20.24,3.03,0.74,158.58,167.28,93.54,64.68,85.63,0.111936,1,1,0],
    ["科锐国际",13.57,5.28,19.62,14.55,18.87,1.91,1.85,52.3,64.95,40.42,4.77,2.14,17.86,20.55,22.38,9.65,12.47,0.045648,2,2,1],
    ["宇信科技",35.15,15.19,21.72,12.33,15.8,1.89,1.34,57.35,33.7,41.96,3.73,0.74,1.98,25.88,65.18,12.44,66.46,0.084976,2,2,1],
    ["指南针",84.63,12.88,8.07,4.22,7.97,9.12,9.03,68.33,2.57,31.67,86.36,0.44,8.89,2.89,25.9,11.18,35.6,0.082056,2,2,1],
    ["锋尚文化",38.37,26.48,13.74,13.88,13.74,8.82,8.6,88.75,38,11.25,3.78,0.41,180.41,402.43,2.63,7.87,1.62,0.039491,0,2,1],
    ["盈建科",99.24,36.89,26.36,25,26.36,9.12,8.82,86.15,69.56,13.85,3.44,0.61,22.89,24.71,15.86,12.46,11.86,0.102926,2,2,1],
    ["ST瀚叶",14.79,169.69,30.5,25.14,28.36,2.53,1.94,86.28,23.49,13.83,2.69,0.15,26.66,25.78,43.67,31,45.79,0.169212,1,0,0],
    ["城市传媒",37.59,11.33,8.62,6.08,7.34,1.94,1.46,68.42,31.41,31.46,5.73,0.52,3.51,3.58,34.73,6.87,35.39,0.101022,1,0,0],
    ["ST中昌",11.75,0.95,1.82,4.71,0.78,1.2,1.06,35.4,1.23,64.6,2.56,0.64,10.78,1.11,100.6,56,100.89,0.027455,2,0,0],
    ["云赛智联",19.03,6.29,5.91,4.08,5.73,3.17,2.71,68.68,3.93,27.74,5.47,0.74,1.98,4.16,2.84,6.13,0.63,0.049053,1,2,1],
    ["东方明珠",34.21,15.56,5.52,4.22,5.37,3.08,2.59,67.12,17.78,20.77,5,0.23,2.45,1.31,19.75,18.86,21.76,0.097981,2,2,1],
    ["号百控股",8.58,0.33,0.23,1.39,0.22,2.43,2.32,68.14,1.14,24.54,4.61,0.66,3.05,0.72,92.74,6.48,106.61,0.069411,2,2,1],
    ["*ST游久",57.02,222.51,1.59,1.49,1.57,8.37,8.09,95.48,817.54,4.52,0.55,0.01,2.52,1.04,259.86,92.6,295.13,3.373969,1,2,1],
    ["ST中安",6.24,6.05,89.83,0.94,8.49,0.75,0.71,2,0.26,98,4.85,0.6,14.54,70.44,372.72,4.16,104.99,0.127686,1,2,1],
    ["宝信软件",29.13,14.29,18.13,11.68,17.5,1.67,1.04,51.76,23.57,46.61,5.17,0.78,37.04,3.08,47.91,38.96,47.57,0.021924,1,2,1],
    ["中南传媒",41.12,14.87,10.39,6.45,10.34,2.54,2.34,60.57,11.82,35.92,8.76,0.47,6.03,2.45,13.5,2.07,10.09,0.125669,1,1,0],
    ["吉视传媒",31.7,3.18,0.93,0.65,0.55,0.77,0.15,48.87,3.11,50.72,6.57,0.14,0.1,0.44,35.42,2.25,99.48,0.178882,1,1,0],
    ["思维列控",59.7,66.49,13.97,11.97,13.78,5.58,4.78,88.66,12.39,9.86,2.45,0.18,12.69,11.92,172.76,6.51,161.93,0.147754,2,1,0],
    ["ST龙韵",12.45,3.54,2.72,1.85,2.17,2.19,1.58,75,2.02,24.86,2.34,0.57,7.6,2.46,63.17,3.34,49.84,0.074598,2,2,1],
];

function initial_demo_select() {
    let dropdown_selection_demo_box = document.getElementById("dropdown_selection_demo");
    demo_companies.forEach(function (value, index, array) {
        let option = document.createElement("option");
        option.setAttribute("value", index+"");
        option.innerHTML = value[0];
        dropdown_selection_demo_box.append(option);
    })
}
initial_demo_select();

function demo_selected() {
    let dropdown_selection_demo_box = document.getElementById("dropdown_selection_demo");
    let index = dropdown_selection_demo_box.selectedIndex - 1;
    const input_boxes = document.getElementById("num_check").getElementsByTagName("input");
    for (let i=0; i<input_boxes.length; i++)
        input_boxes[i].value = demo_companies[index][i+1];
    const check_form = document.getElementById("check_form_box").children;
    for (let i=0; i<check_form.length; i++) {
        let dec_value = demo_companies[index][demo_companies[index].length-check_form.length+i];
        let check_boxes = check_form[i].getElementsByTagName("input");
        let j = check_boxes.length-1-dec_value;
        check_boxes[j].click();
    }
}