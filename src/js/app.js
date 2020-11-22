window.addEventListener('load', () => {
    const helloMori = 'hello Mori!';
//    const helloMori = 'Invisible Full-moon!';

    console.log(helloMori);

    const sHelloMori = document.querySelector('#hello');
    if(sHelloMori !== undefined && sHelloMori !== null) {
        sHelloMori.textContent = helloMori;
    }
});
