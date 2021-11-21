function number_check(input_box) {
    let wrong_class = ["num-check-wrong"];
    let wrong_class_text = ["num-check-wrong-text"];
    let right_class = ["num-check-right"];
    const label = input_box.previousElementSibling;
    if (input_box.value.match(/^(-?\d+)\.?(\d*)$/) == null) {
        right_class.forEach(function (value, index, array) {
            label.classList.remove(value);
        });
        wrong_class.forEach(function (value, index, array) {
            label.classList.add(value);
        });
        wrong_class_text.forEach(function (value, index, array) {
            input_box.classList.add(value);
        });
        return false;
    }
    else {
        wrong_class.forEach(function (value, index, array) {
            label.classList.remove(value);
        });
        wrong_class_text.forEach(function (value, index, array) {
            input_box.classList.remove(value);
        });
        right_class.forEach(function (value, index, array) {
            label.classList.add(value);
        });
        return true;
    }
}

function submit_check() {
    const input_boxes = document.getElementById("num_check").getElementsByTagName("input");
    let valid_num = true;
    let first_illegal_input = -1;
    for (let i=0; i<input_boxes.length; i++)
        if (!number_check(input_boxes[i])) {
            if (first_illegal_input < 0) {
                first_illegal_input = i;
                valid_num = false;
            }
        }
    if (!valid_num) {
        window.location.hash = "";
        window.location.hash = input_boxes[first_illegal_input].previousElementSibling.getAttribute("id");
    }
    return valid_num;
}