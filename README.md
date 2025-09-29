1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans :  getElementById returns a single element, the first and only element with that id.It's fastest, because IDs are unique and optimized internally.

       getElementByClassName returns a live HTMLCollections.It auto-updates if the DOM changes.Since it returns a collection, you usually loop or access by index.
      
       querySelector returns the first matching element of any CSS selector like (id, class, attribute, pseudo-class, etc.)
      
       querySelectorAll returns a static NodeList of any CSS selector like (id, class, attribute, pseudo-class, etc.).It does NOT auto-update if the DOM changes.Unlike HTMLCollection, NodeList supports (forEach).


3. How do you create and insert a new element into the DOM?

Ans: I can create and insert new elements in JavaScript using document.createElement together with one of the DOM insertion methods (append, appendChild, prepend, before, after, replaceWith, etc.)
     i. Create the element by using document.createElement() method.
        Example: const newP = document.createElement("p");
    ii. Set its content or attributes.
        Example: newP.innerText = "Hello, I am a new p!";
                 newP.classList.add("my-p");
                 newP.setAttribute("id", "uniqueP");
   iii. Insert it into the DOM by DOM insertion methods like (append, appendChild, prepend etc.)
        Example: document.body.appendChild(newP);


3. What is Event Bubbling and how does it work?

Ans: Event bubbling is the DOM process where an event starts from the target element (the one where event happened) and then propagates (bubbles up) through its parent elements like(btn ->div ->main ->body ->document) all the way up to the document (and even        window).It’s called "bubbling" because the event “bubbles up” the DOM tree.


4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is a DOM method where I'll attach a single event listener to a parent element, and that listener handles events for its child elements using event bubbling.Instead of adding a listener to every child, you let the event bubble up and check which          child triggered it.
     Its useful because its consuming less memory and faster execution,it works even if child elements are added later,maintain only one listener instead of many and fewer event listeners needed.


5. What is the difference between preventDefault() and stopPropagation() methods?
   
Ans: preventDefault() and stopPropagation() are two commonly used methods in JavaScript event handling, but they serve different purposes:
     preventDefault() prevents the  browser's default action for an event such as prevent a form from submitting, prevent a link from navigating.It does not stop the event from bubbling up or capturing; the event still propagates unless stopPropagation() is also called.

     stopPropagation() stops the event from bubbling (or capturing) through the DOM tree.It prevent a parent element's event listener from triggering when a child element is clicked.     
