  /*  
         *  -- SLIDER CAROUSEL --
         *  Allows to slide through content with arrow buttons
         */

        // slider object
        let slider = {
            // options
            "min_width": 300,
            "number_of_display_element": 1,
            "current_slide": null,
            "next_slide": null,
            "previous_slide": null,
            "number_of_slides": null,
            "dom_elements": { // the classes used in the HTML markup
                "previous": ".slider__button-previous",
                "next": ".slider__button-next",
                "container": ".slider",
                "slides": ".slide",
            },

            // methods
            "initiate": ()=>{
                console.log("initiating the slider");
                slider.adjust_to_window_size();
                slider.setup_eventhandlers();
                for (let i = 0; i < slider.number_of_display_element; i++) {
                    slider.dom_elements.slides[i].classList.add("active");
                    
                }
            }, // initiate

            "adjust_to_window_size": ()=> {
                console.log("adjust_to_window_size");
                console.log("window width: "+window.innerWidth);
                
                // check if screen is big or small
                if((window.innerWidth/3)>=slider.min_width) {
                    // there is enought space for 3 slides
                    slider.number_of_display_element = 3;
                }
            }, // adjust_to_window_size

            "setup_eventhandlers": ()=>{
                console.log("setting up the event handlers");
                // get all elements from the DOM
                slider.dom_elements.previous = document.querySelector(slider.dom_elements.previous);
                slider.dom_elements.next = document.querySelector(slider.dom_elements.next);
                slider.dom_elements.container = document.querySelector(slider.dom_elements.container);
                slider.dom_elements.slides = document.querySelectorAll(slider.dom_elements.slides);
                slider.number_of_slides = slider.dom_elements.slides.length;

                // attach eventlistener for the buttons
                slider.dom_elements.previous.addEventListener("click", ()=>{
                    console.log("clicked on the previous button");
                    slider.goto_previous();
                });
                slider.dom_elements.next.addEventListener("click", ()=>{
                    console.log("clicked on the next button");
                    slider.goto_next();
                });
                document.addEventListener("keydown", (event)=> {
                    //console.log(event.key);
                    // // only check if the slider is visible in the view port
                    // // https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/

                    // // get the placement of the slider container
                    // let bounding = slider.dom_elements.container.getBoundingClientRect();
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
                            slider.goto_previous();
                            break;
                    
                        default:
                            break;
                    } */
                });                
            }, // setup_eventhandlers

            "goto_previous": ()=>{
                console.log("goto_previous");
                if(slider.current_slide === 0 || slider.current_slide === null) {
                    console.log("first slide, starting from behind");
                    slider.current_slide = slider.number_of_slides - 1;
                    console.log(slider.current_slide);
                    //console.log(slider);
                } else {
                    slider.current_slide--;
                    console.log(slider.current_slide);
                }

                // update the slider
                slider.update();
            }, // goto_previous

            

            "goto_next": ()=>{
                console.log("goto_next");
                if(slider.current_slide === slider.number_of_slides - 1) {
                    console.log("last slide, starting from beginning");
                    slider.current_slide = 0;
                    console.log(slider.current_slide);
                    //console.log(slider);
                } else {
                    slider.current_slide++;
                    console.log(slider.current_slide);
                }

                // update the slider
                slider.update();            }, // goto_next


            "update": ()=>{
                console.log("update slides");
                slider.reset_all_slides();

                // locate the slides to show, depending on the amount of slides to show
                for (let i = 0; i < slider.number_of_display_element; i++) {
                    // add active class to the correct number of slides
                    let slide = slider.current_slide+i;
                    if(slide >= slider.number_of_slides) {
                        slide = slider.current_slide-slider.number_of_slides+i;
                        console.log(slide);
                    }
                    console.log(slider.dom_elements.slides[slide]);
                    console.log(slide);
                    slider.dom_elements.slides[slide].classList.add("active");
                }
            }, // update



            // HELPER FUNCTIONS
            "reset_all_slides": ()=>{
                console.log("reset_all_slides");
                slider.dom_elements.slides.forEach(slide => {
                    slide.classList.remove("active");
                });
            }, // reset_all_slides

        };





        // initiate the slider
        slider.initiate();


        console.log(slider);
