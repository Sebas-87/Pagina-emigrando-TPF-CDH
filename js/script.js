document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los elementos con la clase "accordion-title"
    const accordionTitles = document.querySelectorAll(".accordion-title");
  
    // Iterar sobre cada elemento y agregar un evento de clic
    accordionTitles.forEach(function(title) {
      title.addEventListener("click", function() {
        // Obtener el elemento padre del título
        const accordionItem = this.parentNode;
        
        // Obtener el elemento "accordion-content" correspondiente
        const accordionContent = accordionItem.querySelector(".accordion-content");
        
        // Obtener el elemento "sub-accordion-content" correspondiente
        const subAccordionContent = accordionItem.querySelector(".sub-accordion-content");
        
        // Alternar la clase "active" en el elemento padre
        accordionItem.classList.toggle("active");
        
        // Alternar la visualización del contenido del acordeón
        if (accordionContent.style.display === "block") {
          accordionContent.style.display = "none";
        } else {
          accordionContent.style.display = "block";
        }
        
        // Cerrar todos los acordeones excepto el actual
        closeOtherAccordions(accordionItem);
        
        // Cerrar los sub-acordeones dentro del acordeón actual
        const subAccordions = accordionItem.querySelectorAll(".sub-accordion-item");
        subAccordions.forEach(function(subAccordion) {
          // Remover la clase "active" y ocultar el contenido
          subAccordion.classList.remove("active");
          const subContent = subAccordion.querySelector(".sub-accordion-content");
          subContent.style.display = "none";
        });
      });
    });
  
    // Obtener todos los elementos con la clase "sub-accordion-title"
    const subAccordionTitles = document.querySelectorAll(".sub-accordion-title");
  
    // Iterar sobre cada elemento y agregar un evento de clic
    subAccordionTitles.forEach(function(title) {
      title.addEventListener("click", function() {
        // Obtener el elemento padre del título
        const subAccordionItem = this.parentNode;
        
        // Obtener el elemento "sub-accordion-content" correspondiente
        const subAccordionContent = subAccordionItem.querySelector(".sub-accordion-content");
        
        // Alternar la clase "active" en el elemento padre
        subAccordionItem.classList.toggle("active");
        
        // Alternar la visualización del contenido del sub-acordeón
        if (subAccordionContent.style.display === "block") {
          subAccordionContent.style.display = "none";
        } else {
          subAccordionContent.style.display = "block";
        }
      });
    });
  
    // Función para cerrar los acordeones excepto el actual
    function closeOtherAccordions(currentAccordion) {
      const accordions = document.querySelectorAll(".accordion-item");
      
      accordions.forEach(function(accordion) {
        if (accordion !== currentAccordion) {
          // Remover la clase "active" y ocultar el contenido
          accordion.classList.remove("active");
          const content = accordion.querySelector(".accordion-content");
          content.style.display = "none";
        }
      });
    }
  });
  
  