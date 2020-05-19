  /*  
         *  -- SLIDER CAROUSEL --
         *  Allows to slide through content with arrow buttons
         */

        // slider object
        let slider_two = {
            // options
            "min_width": 300,
            "number_of_display_element": 1,
            "current_slide_two": null,
            "next_slide_two": null,
            "previous_slide_two": null,
            "number_of_slides_two": null,
            "dom_elements": { // the classes used in the HTML markup
                "previous": ".slider__button-previous_two",
                "next": ".slider__button-next_two",
                "container": ".slider_two",
                "slides": ".slide_two",
            },

            // methods
            "initiate": ()=>{
                console.log("initiating the slider_two");
                slider_two.adjust_to_window_size();
                slider_two.setup_eventhandlers();
                for (let i = 0; i < slider_two.number_of_display_element; i++) {
                    slider_two.dom_elements.slides[i].classList.add("active");
                    
                }
            }, // initiate

            "adjust_to_window_size": ()=> {
                console.log("adjust_to_window_size");
                console.log("window width: "+window.innerWidth);
                
                // check if screen is big or small
                if((window.innerWidth/3)>=slider_two.min_width) {
                    // there is enought space for 3 slides
                    slider_two.number_of_display_element = 3;
                }
            }, // adjust_to_window_size

            "setup_eventhandlers": ()=>{
                console.log("setting up the event handlers");
                // get all elements from the DOM
                slider_two.dom_elements.previous = document.querySelector(slider_two.dom_elements.previous);
                slider_two.dom_elements.next = document.querySelector(slider_two.dom_elements.next);
                slider_two.dom_elements.container = document.querySelector(slider_two.dom_elements.container);
                slider_two.dom_elements.slides = document.querySelectorAll(slider_two.dom_elements.slides);
                slider_two.number_of_slides_two = slider_two.dom_elements.slides.length;

                // attach eventlistener for the buttons
                slider_two.dom_elements.previous.addEventListener("click", ()=>{
                    console.log("clicked on the previous button");
                    slider_two.goto_previous();
                });
                slider_two.dom_elements.next.addEventListener("click", ()=>{
                    console.log("clicked on the next button");
                    slider_two.goto_next();
                });
                document.addEventListener("keydown", (event)=> {
                    //console.log(event.key);
                    // // only check if the slider_two is visible in the view port
                    // // https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/

                    // // get the placement of the slider_two container
                    // let bounding = slider_two.dom_elements.container.getBoundingClientRect();
                    // if (
                    //     bounding.top >= 0 &&
                    //     bounding.left >= 0 &&
                    //     bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
                    //     bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                    // ) {
                    //     console.log('In the viewport!');
                    // } else {
                    //     console.log('Not in the viewport... whomp whomp');
                    //     return;
                    // }

                    // 
/*                     switch (event.key) {
                        case "ArrowLeft":
                            console.log("pressed the left arrow key");
                            slider_two.goto_previous();
                            break;
                    
                        default:
                            break;
                    } */
                });                
            }, // setup_eventhandlers

            "goto_previous": ()=>{
                console.log("goto_previous");
                if(slider_two.current_slide_two === 0 || slider_two.current_slide_two === null) {
                    console.log("first slide, starting from behind");
                    slider_two.current_slide_two = slider_two.number_of_slides_two - 1;
                    console.log(slider_two.current_slide_two);
                    //console.log(slider_two);
                } else {
                    slider_two.current_slide_two--;
                    console.log(slider_two.current_slide_two);
                }

                // update the slider_two
                slider_two.update();
            }, // goto_previous

            

            "goto_next": ()=>{
                console.log("goto_next");
                if(slider_two.current_slide_two === slider_two.number_of_slides_two - 1) {
                    console.log("last slide, starting from beginning");
                    slider_two.current_slide_two = 0;
                    console.log(slider_two.current_slide_two);
                    //console.log(slider_two);
                } else {
                    slider_two.current_slide_two++;
                    console.log(slider_two.current_slide_two);
                }

                // update the slider_two
                slider_two.update();            }, // goto_next


            "update": ()=>{
                console.log("update slides");
                slider_two.reset_all_slides();

                // locate the slides to show, depending on the amount of slides to show
                for (let i = 0; i < slider_two.number_of_display_element; i++) {
                    // add active class to the correct number of slides
                    let slide = slider_two.current_slide_two+i;
                    if(slide >= slider_two.number_of_slides_two) {
                        slide = slider_two.current_slide_two-slider_two.number_of_slides_two+i;
                        console.log(slide);
                    }
                    console.log(slider_two.dom_elements.slides[slide]);
                    console.log(slide);
                    slider_two.dom_elements.slides[slide].classList.add("active");
                }
            }, // update



            // HELPER FUNCTIONS
            "reset_all_slides": ()=>{
                console.log("reset_all_slides");
                slider_two.dom_elements.slides.forEach(slide => {
                    slide.classList.remove("active");
                });
            }, // reset_all_slides

        };





        // initiate the slider_two
        slider_two.initiate();


        console.log(slider_two);
