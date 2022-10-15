const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart); // Fires as soon as the user starts dragging an item - This is where we can define the drag data
    // elem.addEventListener("drag", drag); // Fires when a dragged item (element or text selection) is dragged
    // elem.addEventListener("dragend", dragEnd); // Fires when a drag operation ends (such as releasing a mouse button or hitting the Esc key) - After the dragend event, the drag and drop operation is complete
});

droppableElements.forEach(elem => {
    elem.addEventListener("dragenter", dragEnter); // Fires when a dragged item enters a valid drop target
    elem.addEventListener("dragover", dragOver); // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
    elem.addEventListener("dragleave", dragLeave); // Fires when a dragged item leaves a valid drop target
    elem.addEventListener("drop", drop); // Fires when an item is dropped on a valid drop target
});

// Drag and Drop Functions

//Events fired on the drag target

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id); // or "text/plain" but just "text" would also be fine since we are not setting any other type/format for data value
}

//Events fired on the drop target

function dragEnter(event) {
    if (!event.target.classList.contains("dropped")) {
        event.target.classList.add("droppable-hover");
    }
}

function dragOver(event) {
    if (!event.target.classList.contains("dropped")) {
        event.preventDefault(); // Prevent default to allow drop
    }
}

function dragLeave(event) {
    if (!event.target.classList.contains("dropped", "true")) {
        event.target.classList.remove("droppable-hover");
    }
}

function drop(event) {
    event.preventDefault(); // This is in order to prevent the browser default handling of the data
    event.target.classList.remove("droppable-hover");
    const draggableElementData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method
    const droppableElementData = event.target.getAttribute("Ewaste-draggable-id",);
    const GlassData = event.target.getAttribute("Glass-draggable-id",);
    const MetalData = event.target.getAttribute("Metal-draggable-id",);
    const OrganicData = event.target.getAttribute("Organic-draggable-id")
    const PaperData = event.target.getAttribute("Paper-draggable-id")
    const PlasticData = event.target.getAttribute("Plastic-draggable-id")

    if (droppableElementData) {

        event.target.classList.remove("droppable-hover");
        const draggableElementData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method
        const droppableElementData = event.target.getAttribute("Ewaste-draggable-id",);
        const dog = document.getElementById("dog");
        const isCorrectMatching = draggableElementData === "Ewaste-1" || draggableElementData === "Ewaste-2" || draggableElementData === "Ewaste-3" || draggableElementData === "Ewaste-4" || draggableElementData === "Ewaste-5";
        if (isCorrectMatching) {

            const draggableElement = document.getElementById(draggableElementData);
            // event.target.classList.add("dropped", "true");
            // event.target.style.backgroundColor = draggableElement.style.color; // This approach works only for inline styles. A more general approach would be the following: 
            // event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;
            event.target.classList.remove("droppable-hover");
            // draggableElement.classList.add("dragged" );
            draggableElement.remove("text", "true");
            // draggableElement.classList.add("dragged");


           

        }

    }



    if (GlassData) {

        event.target.classList.remove("droppable-hover");
        const draggableElementData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method
        const droppableElementData = event.target.getAttribute("Glass-draggable-id",);
        const dog = document.getElementById("dog");
        const isCorrectMatching = draggableElementData === "Glass-1" || draggableElementData === "Glass-2" || draggableElementData === "Glass-3" || draggableElementData === "Glass-4" || draggableElementData === "Glass-5";
        if (isCorrectMatching) {

            const draggableElement = document.getElementById(draggableElementData);

            draggableElement.classList.add("dragged");
            draggableElement.remove("text", "true");
            draggableElement.classList.add("dragged");


            setTimeout(function () {
                location.reload()
            }, 500000000)

        }

    }

    if (MetalData) {

        event.target.classList.remove("droppable-hover");
        const draggableElementData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method
        const droppableElementData = event.target.getAttribute("Metal-draggable-id",);
        const dog = document.getElementById("dog");
        const isCorrectMatching = draggableElementData === "Metal-1" || draggableElementData === "Metal-2" || draggableElementData === "Metal-3" || draggableElementData === "Metal-4" || draggableElementData === "Metal-5";
        if (isCorrectMatching) {

            const draggableElement = document.getElementById(draggableElementData);

            draggableElement.classList.add("dragged");
            draggableElement.remove("text", "true");
            draggableElement.classList.add("dragged");


            setTimeout(function () {
                location.reload()
            }, 500000000)

        }

    }
    if (OrganicData) {

        event.target.classList.remove("droppable-hover");
        const draggableElementData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method
        const droppableElementData = event.target.getAttribute("Organic-draggable-id",);
        const dog = document.getElementById("dog");
        const isCorrectMatching = draggableElementData === "Organic-1" || draggableElementData === "Organic-2" || draggableElementData === "Organic-3" || draggableElementData === "Organic-4" || draggableElementData === "Organic-5";
        if (isCorrectMatching) {

            const draggableElement = document.getElementById(draggableElementData);

            draggableElement.classList.add("dragged");
            draggableElement.remove("text", "true");
            draggableElement.classList.add("dragged");


            setTimeout(function () {
                location.reload()
            }, 500000000)

        }

    }

    if (PaperData) {

        event.target.classList.remove("droppable-hover");
        const draggableElementData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method
        const droppableElementData = event.target.getAttribute("Paper-draggable-id",);
        const dog = document.getElementById("dog");
        const isCorrectMatching = draggableElementData === "Paper-1" || draggableElementData === "Paper-2" || draggableElementData === "Paper-3" || draggableElementData === "Paper-4" || draggableElementData === "Paper-5";
        if (isCorrectMatching) {

            const draggableElement = document.getElementById(draggableElementData);

            draggableElement.classList.add("dragged");
            draggableElement.remove("text", "true");
            draggableElement.classList.add("dragged");


            setTimeout(function () {
                location.reload()
            }, 500000000)

        }

    }


    if (PlasticData) {

        event.target.classList.remove("droppable-hover");
        const draggableElementData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method
        const droppableElementData = event.target.getAttribute("PlasticData-draggable-id",);
        const dog = document.getElementById("dog");
        const isCorrectMatching = draggableElementData === "Plastic-1" || draggableElementData === "Plastic-2" || draggableElementData === "Plastic-3" || draggableElementData === "Plastic-4" || draggableElementData === "Plastic-5";
        if (isCorrectMatching) {

            const draggableElement = document.getElementById(draggableElementData);

            // draggableElement.classList.add("dragged");
            draggableElement.remove("text", "true");
            // draggableElement.classList.add("dragged");



        }

    }


}


setTimeout(function () {
    location.reload()
}, 30600)