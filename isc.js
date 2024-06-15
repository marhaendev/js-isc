document.addEventListener("DOMContentLoaded", () => {
    const style = `
        .scroll-container {
            overflow: hidden;
            width: 100%;
            background-color: #fff;
        }
        .scroll-content {
            display: flex;
            width: 100%;
            animation: scroll-horizontal 20s linear infinite;
        }
        .scroll-item {
            height: 150px;
            color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5em;
            box-sizing: border-box;
        }
        @keyframes scroll-horizontal {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
        }
    `;

    const elementsWithDataIsc = document.querySelectorAll('[data-isc]');
    elementsWithDataIsc.forEach(element => {
        const dataIscValue = element.getAttribute('data-isc');
        
        // Parsing width, height, duration from data-isc
        const widthRegex = /width:(\d+(?:px|%)?)/;
        const widthMatch = dataIscValue.match(widthRegex);
        const width = widthMatch ? widthMatch[1] : '100%'; 

        const heightRegex = /height:(\d+)/;
        const heightMatch = dataIscValue.match(heightRegex);
        const height = heightMatch ? parseInt(heightMatch[1]) : 150; 
       
        const durationRegex = /duration:(\d+)/;
        const durationMatch = dataIscValue.match(durationRegex);
        const animationDuration = durationMatch ? parseInt(durationMatch[1]) : 20; 

        // Set up scroll-container
        element.classList.add('scroll-content');
        const scrollContainer = document.createElement('div');
        scrollContainer.classList.add('scroll-container');
        scrollContainer.style.width = width.endsWith('%') ? width : `${width}px`; 
        scrollContainer.style.height = `${height}px`; 
        scrollContainer.style.backgroundColor = 'transparent'; // default background color

        

        element.parentNode.insertBefore(scrollContainer, element);
        scrollContainer.appendChild(element);
        element.style.animationDuration = `${animationDuration}s`; 

        // Set up scroll-items
        const children = element.children;
        for (let i = 0; i < children.length; i++) {
            children[i].classList.add('scroll-item');
            children[i].style.height = `${height}px`; 


            // Handle color option from data-isc
        const colorRegex = /color:\s*(\w+)/;
        const colorMatch = dataIscValue.match(colorRegex);
        if (colorMatch) {
            const colorValue = colorMatch[1].toLowerCase();
            if (colorValue === 'random') {
                scrollContainer.style.backgroundColor = getRandomColor(); // random color
            } else {
                scrollContainer.style.backgroundColor = colorValue; // specified color
            }
        }
            children[i].style.backgroundColor = scrollContainer.style.backgroundColor;
        }
    });

    // Insert global styles
    const styleElement = document.createElement("style");
    styleElement.textContent = style;
    document.head.insertAdjacentElement("beforeend", styleElement);

    // Clone items and adjust flex properties
    elementsWithDataIsc.forEach(element => {
        const scrollItems = Array.from(element.querySelectorAll(".scroll-item"));
        const itemWidthPercentage = 100 / scrollItems.length;
        scrollItems.forEach(item => {
            item.style.flex = `0 0 ${itemWidthPercentage}%`;
            const clone = item.cloneNode(true);
            element.appendChild(clone);
        });
    });

    // Function to generate random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
