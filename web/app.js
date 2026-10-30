import init, { fib } from './pkg/wasm_fib.js';

async function runFibByRust() {
    await init(); // 初始化 WebAssembly
    const input = parseInt(document.getElementById('input').value, 10);

    const startTime = performance.now(); // 開始計時
    let result; 
    try{ result = fib(input);}
    catch(err){alert(err);}
    const endTime = performance.now(); // 結束計時

    document.getElementById('rust-result').textContent = result;
    document.getElementById('rust-runtime').textContent = (endTime - startTime).toFixed(0);
}



async function runFibByJs() {
    const input = parseInt(document.getElementById('input').value, 10);

    const startTime = performance.now(); // 開始計時
    let result;
    try{result = fibByJs(input);}
    catch(err){alert(err);}
    const endTime = performance.now(); // 結束計時

    document.getElementById('js-result').textContent = result;
    document.getElementById('js-runtime').textContent = (endTime - startTime).toFixed(0);
}


function fibByJs(n) {
    if (n < 0) {
        throw new Error("n must be a positive integer.");
    }
    if (n == 0) {
        return 0;
    }
    if (n == 1 || n == 2) {
        return 1;
    }
    return fibByJs(n - 1) + fibByJs(n - 2);
}

document.getElementById("calculate-by-rust").addEventListener("click", runFibByRust);
document.getElementById("calculate-by-js").addEventListener("click", runFibByJs);