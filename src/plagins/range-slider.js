const priceRangeSlider = document.querySelector('.js-price-slider');

if (priceRangeSlider) {
    noUiSlider.create(priceRangeSlider, {
        start: [500, 999999],
        connect: true,
        step: 1,
        range: {
            'min': [500],
            'max': [999999]
        }
    });
}

const input0 = document.getElementById('price-input-0');
const input1 = document.getElementById('price-input-1');
const inputs = [input0, input1];

priceRangeSlider.noUiSlider.on('update', function(values, handle) {
    inputs[handle].value = Math.round(values[handle]);
});

const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    priceRangeSlider.noUiSlider.set(arr)
};

inputs.forEach((el, index) => {
    el.addEventListener('change', e => {
    setRangeSlider(index, e.currentTarget.value)
    });
});


const sizeRangeSlider = document.querySelector('.js-size-slider');

if (sizeRangeSlider) {
    noUiSlider.create(sizeRangeSlider, {
        start: [50, 1000],
        connect: true,
        step: 25,
        range: {
            'min': [50],
            'max': [1000]
        }
    });
}

const sizeInput0 = document.getElementById('size-input-0');
const sizeInput1 = document.getElementById('size-input-1');
const sizeInputs = [sizeInput0, sizeInput1];

sizeRangeSlider.noUiSlider.on('update', function(values, handle) {
    sizeInputs[handle].value = Math.round(values[handle]);
});

const setSizeRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    sizeRangeSlider.noUiSlider.set(arr)
};

sizeInputs.forEach((el, index) => {
    el.addEventListener('change', e => {
    setSizeRangeSlider(index, e.currentTarget.value)
    });
});