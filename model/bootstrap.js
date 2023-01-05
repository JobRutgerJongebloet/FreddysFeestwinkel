export class Bootstrap {
    constructor() {
        // Create a new link element
        const link = document.createElement('link');

        // Set the href, rel, integrity, and crossOrigin attributes of the link element
        link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css';
        link.rel = 'stylesheet';
        link.integrity = 'sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD';
        link.crossOrigin = 'anonymous';

        // Append the link element to the head of the document
        document.head.appendChild(link);

        // Repeat the process for the first script element
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js';
        script.integrity = 'sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3';
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);

        // Repeat the process for the second script element
        script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js';
        script.integrity = 'sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD';
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
    }
}