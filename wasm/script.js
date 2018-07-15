let square;

function loadWasm(filename) {
    return fetch(filename)
        .then(response => response.arrayBuffer())
        .then(buffer => WebAssembly.compile(buffer))
        .then(module => { return new WebAssembly.Instance(module) });
}

loadWasm('square.wasm') // http://mbebenita.github.io/WasmExplorer/
    .then(instance => {
        square = instance.exports._Z6squarei;
        console.log(`square(5) = ${square(5)}`)
    });

