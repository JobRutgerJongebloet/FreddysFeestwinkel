export class JQuery {
  constructor() {
    // Create the script element
    const script = document.createElement('script');
    // Set the script attributes
    script.src = 'https://code.jquery.com/jquery-3.6.3.js';
    script.integrity = 'sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=';
    script.crossOrigin = 'anonymous';
    // Append the script to the header
    const header = document.querySelector('head');
    header.appendChild(script);

    JQuery.addTilt(header);
  }

  static addTilt(header) {
    const script = document.createElement('script');
    // Set the script attributes
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.0.3/tilt.jquery.min.js';
    script.integrity = 'sha512-14AZ/DxUrlF26z6v7egDkpJHKyJRn/7ue2BgpWZ/fmqrqVzf4PrQnToy99sHmKwzKev/VZ1tjPxusuTV/n8CcQ==';
    script.crossOrigin = 'anonymous';
    script.referrerPolicy = 'no-referrer';
    // Append the script to the header

    header.appendChild(script);
  }
}