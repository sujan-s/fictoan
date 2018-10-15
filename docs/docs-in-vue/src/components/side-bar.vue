<template>
    <div class="ff-sidebar-container" :class="{ collapsed : !showSideBar }">
        <a id="sidebar-logo" class="sidebar-toggle" @click="showSideBar = !showSideBar">
            <img id="logo-big" :src="require('@/assets/images/logo-fictoan.svg')">
            <img id="logo-small" :src="require('@/assets/images/logo-fictoan-small.svg')">
        </a>

        <div class="sidebar-links">
            <!--  INTRO  =============================  -->
            <router-link class="sidebar-link" data-scroll to="/">
                <span>
                    <svg viewBox="0 0 24 24">
                        <path d="M16.2,17H4c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h12.2c0.5,0,1,0.2,1.4,0.6l3.7,3.7c0.4,0.4,0.4,1,0,1.4l-3.7,3.7C17.2,16.8,16.7,17,16.2,17z" />
                    </svg>
                </span>
                <label><strong>Intro</strong></label>
            </router-link>

            <!--  GETTING STARTED  ===================  -->
            <details id="start">
                <summary>
                    <router-link class="sidebar-link" data-scroll to="/start">
                        <span>
                            <svg viewBox="0 0 24 24">
                                <path d="M20.6,2H5C3.9,2,3,2.9,3,4v8v9c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1v-9h15.6c0.9,0,1.3-1.1,0.7-1.7L18,7 l3.3-3.3C21.9,3.1,21.5,2,20.6,2z" />
                            </svg>
                        </span>
                        <label><strong>Getting started</strong></label>
                    </router-link>
                </summary>

                <router-link class="sidebar-link" data-scroll to="/start">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Basics</label>
                </router-link>

                <a class="sidebar-link" data-scroll href="/fictoan/start#using-fictoan">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Using FICTOAN</label>
                </a>

                <a class="sidebar-link" data-scroll href="/fictoan/start#variable-themes">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Variable themes</label>
                </a>

                <a class="sidebar-link" data-scroll href="/fictoan/start#class-names">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Nomenclature</label>
                </a>
            </details>

            <!--  LAYOUT  ============================  -->
            <details id="layout">
                <summary>
                    <router-link class="sidebar-link" data-scroll to="/layout">
                        <span>
                            <svg viewBox="0 0 24 24">
                                <path d="M13,15H3c-0.6,0-1-0.4-1-1v-3c0-0.6,0.4-1,1-1h10c0.6,0,1,0.4,1,1v3C14,14.6,13.6,15,13,15z" />
                                <path d="M21,15h-4c-0.6,0-1-0.4-1-1v-3c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v3C22,14.6,21.6,15,21,15z" />
                                <path d="M6,22H3c-0.6,0-1-0.4-1-1v-3c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v3C7,21.6,6.6,22,6,22z" />
                                <path d="M21,22H10c-0.6,0-1-0.4-1-1v-3c0-0.6,0.4-1,1-1h11c0.6,0,1,0.4,1,1v3C22,21.6,21.6,22,21,22z" />
                                <path d="M8,8H3C2.4,8,2,7.6,2,7V3c0-0.6,0.4-1,1-1h5c0.6,0,1,0.4,1,1v4C9,7.6,8.6,8,8,8z" />
                                <path d="M21,8h-9c-0.6,0-1-0.4-1-1V3c0-0.6,0.4-1,1-1h9c0.6,0,1,0.4,1,1v4C22,7.6,21.6,8,21,8z" />
                            </svg>
                        </span>
                        <label><strong>Layout</strong></label>
                    </router-link>
                </summary>

                <router-link class="sidebar-link" data-scroll to="/layout">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Grid setup</label>
                </router-link>

                <a class="sidebar-link" data-scroll href="/fictoan/layout#responsive-helpers">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Responsive helpers</label>
                </a>

                <a class="sidebar-link" data-scroll href="/fictoan/layout#gutter-sizing">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Gutter sizing</label>
                </a>

                <a class="sidebar-link" data-scroll href="/fictoan/layout#padded-content">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Padded content</label>
                </a>
            </details>

            <!--  TYPOGRAPHY  ========================  -->
            <details id="typography">
                <summary>
                    <router-link class="sidebar-link" data-scroll to="/typography">
                        <span>
                            <svg viewBox="0 0 24 24">
                                <path d="M10.8,19.6c-2,0-3.6-0.7-4.9-2.2C4.7,16,4,14.2,4,12s0.6-4,1.9-5.5c1.3-1.4,2.9-2.2,4.8-2.2 c1.9,0,3.4,0.7,4.4,2.1h0.2V4.7h3.3v11.1c0,0.4,0.2,0.6,0.7,0.6H20v2.8h-2.5c-0.6,0-1.1-0.2-1.5-0.5c-0.4-0.4-0.6-0.8-0.6-1.3h-0.2 C14.3,18.9,12.8,19.6,10.8,19.6z M11.4,16.5c1.2,0,2.2-0.4,2.9-1.3c0.7-0.8,1.1-1.9,1.1-3.2c0-1.4-0.4-2.5-1.2-3.3 c-0.8-0.8-1.7-1.2-2.9-1.2c-1.2,0-2.2,0.4-2.9,1.3C7.7,9.6,7.3,10.7,7.3,12c0,1.3,0.4,2.4,1.2,3.2C9.3,16.1,10.2,16.5,11.4,16.5z" />
                            </svg>
                        </span>
                        <label><strong>Typography</strong></label>
                    </router-link>
                </summary>

                <router-link class="sidebar-link" to="/typography">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Basics</label>
                </router-link>

                <a class="sidebar-link" data-scroll href="/fictoan/typography#type-scaling">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Type scaling</label>
                </a>

                <a class="sidebar-link" data-scroll href="/fictoan/typography#type-helpers">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Type helpers</label>
                </a>
            </details>

            <!--  COLOUR  ============================  -->
            <details id="colour">
                <summary>
                    <router-link class="sidebar-link" data-scroll to="/colour">
                        <span>
                            <svg viewBox="0 0 24 24">
                                <path d="M21.5,4H21V3c0-0.6-0.4-1-1-1H4C3.4,2,3,2.4,3,3v3c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V5h0.5C21.8,5,22,5.2,22,5.5v4c0,0.3-0.2,0.5-0.5,0.5h-9c-0.8,0-1.5,0.7-1.5,1.5V13c-0.6,0-1,0.4-1,1v7c0,0.6,0.4,1,1,1h1c0.6,0,1-0.4,1-1v-7c0-0.6-0.4-1-1-1v-1.5c0-0.3,0.2-0.5,0.5-0.5h9c0.8,0,1.5-0.7,1.5-1.5v-4C23,4.7,22.3,4,21.5,4z" />
                            </svg>
                        </span>
                        <label><strong>Colour</strong></label>
                    </router-link>
                </summary>

                <router-link class="sidebar-link" data-scroll to="/colour">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>FICTOAN Colours</label>
                </router-link>

                <a class="sidebar-link" data-scroll href="/fictoan/colour#colour-list">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Colour list</label>
                </a>
            </details>

            <!--  INPUTS  ============================  -->
            <details id="inputs">
                <summary>
                    <router-link class="sidebar-link" data-scroll to="/inputs">
                        <span>
                            <svg viewBox="0 0 24 24">
                                <path d="M17,2H3C2.4,2,2,2.4,2,3v18c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-5l-5,5l-3,0v-3l8-8V3C18,2.4,17.6,2,17,2z M12,15H5c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h9L12,15z M15,11H5c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h10c0.6,0,1,0.4,1,1 C16,10.6,15.6,11,15,11z M15,7H5C4.4,7,4,6.6,4,6c0-0.6,0.4-1, 1-1h10c0.6,0,1,0.4,1,1C16,6.6,15.6,7,15,7z" />
                                <polygon points="22,10.5 12.5,20 11,20 11,18.5 20.5,9 " />
                            </svg>
                        </span>
                        <label><strong>Input</strong></label>
                    </router-link>
                </summary>

                <router-link class="sidebar-link" data-scroll to="/inputs">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Input</label>
                </router-link>
        
                <details>
                    <summary>
                        <a class="sidebar-link" data-scroll href="/fictoan/inputs#basic-input">
                            <span>
                                <svg viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="4" />
                                </svg>
                            </span>
                            <label>Text input</label>
                        </a>
                    </summary>
        
                    <a class="sidebar-link" data-scroll href="/fictoan/inputs#input-structure">
                        <span>
                            <svg viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="2" />
                            </svg>
                        </span>
                        <label>Structure</label>
                    </a>
        
                    <a class="sidebar-link" data-scroll href="/fictoan/inputs#input-icons">
                        <span>
                            <svg viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="2" />
                            </svg>
                        </span>
                        <label>Input icon</label>
                    </a>
        
                    <a class="sidebar-link" data-scroll href="/fictoan/inputs#input-validity">
                        <span>
                            <svg viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="2" />
                            </svg>
                        </span>
                        <label>Validity</label>
                    </a>
                </details>
        
                <a class="sidebar-link" data-scroll href="/fictoan/inputs#checkbox">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Checkbox</label>
                </a>
        
                <a class="sidebar-link" data-scroll href="/fictoan/inputs#toggle-switch">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Toggle switch</label>
                </a>
        
                <a class="sidebar-link" data-scroll href="/fictoan/inputs#radio-button">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Radio button</label>
                </a>
        
                <a class="sidebar-link" data-scroll href="/fictoan/inputs#select-dropdown">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Select dropdown</label>
                </a>
        
        
                <details>
                    <summary>
                        <a class="sidebar-link" data-scroll href="/fictoan/inputs#buttons">
                            <span>
                                <svg viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="4" />
                                </svg>
                            </span>
                            <label>Buttons</label>
                        </a>
                    </summary>
        
                    <a class="sidebar-link" data-scroll href="/fictoan/inputs#button-simple">
                        <span>
                            <svg viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="2" />
                            </svg>
                        </span>
                        <label>Simple button</label>
                    </a>
        
                    <a class="sidebar-link" data-scroll href="/fictoan/inputs#button-colour">
                        <span>
                            <svg viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="2" />
                            </svg>
                        </span>
                        <label>Colours</label>
                    </a>
        
                    <a class="sidebar-link" data-scroll href="/fictoan/inputs#button-size">
                        <span>
                            <svg viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="2" />
                            </svg>
                        </span>
                        <label>Sizing</label>
                    </a>
        
                    <a class="sidebar-link" data-scroll href="/fictoan/inputs#button-shape">
                        <span>
                            <svg viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="2" />
                            </svg>
                        </span>
                        <label>Shape</label>
                    </a>
        
                    <a class="sidebar-link" data-scroll href="/fictoan/inputs#button-shadow">
                        <span>
                            <svg viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="2" />
                            </svg>
                        </span>
                        <label>Shadow</label>
                    </a>
        
                    <a class="sidebar-link" data-scroll href="/fictoan/inputs#button-loader">
                        <span>
                            <svg viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="2" />
                            </svg>
                        </span>
                        <label>With loader</label>
                    </a>
        
                    <a class="sidebar-link" data-scroll href="/fictoan/inputs#button-delete">
                        <span>
                            <svg viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="2" />
                            </svg>
                        </span>
                        <label>With delete</label>
                    </a>
                </details>
        
                <a class="sidebar-link" data-scroll href="/fictoan/inputs#progress-bar">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Progress bar</label>
                </a>
            </details>

            <!--  COMPONENTS  ========================  -->
            <details id="components">
                <summary>
                    <router-link class="sidebar-link" data-scroll to="/components">
                        <span>
                            <svg viewBox="0 0 24 24">
                                <path d="M21,16h-2v-1c0-0.6-0.4-1-1-1h-4c-0.6,0-1,0.4-1,1v1h-2v-1c0-0.6-0.4-1-1-1H6c-0.6,0-1,0.4-1,1v1H3c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1v-4C22,16.4,21.6,16,21,16z" />
                                <path d="M21,4h-2V3c0-0.6-0.4-1-1-1h-4c-0.6,0-1,0.4-1,1v1h-2V3c0-0.6-0.4-1-1-1H6C5.4,2,5,2.4,5,3v1H3C2.4,4,2,4.4,2,5v4c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1V5C22,4.4,21.6,4,21,4z" />
                            </svg>
                        </span>
                        <label><strong>Components</strong></label>
                    </router-link>
                </summary>

                <a class="sidebar-link" data-scroll href="/fictoan/components#card">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Card</label>
                </a>

                <a class="sidebar-link" data-scroll href="/fictoan/components#modal">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Modal</label>
                </a>

                <a class="sidebar-link" data-scroll href="/fictoan/components#tabs">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Tabs</label>
                </a>

                <a class="sidebar-link" data-scroll href="/fictoan/components#table">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Table</label>
                </a>

                <a class="sidebar-link" data-scroll href="/fictoan/components#sidebar">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>Sidebar</label>
                </a>

                <a class="sidebar-link" data-scroll href="#">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </span>
                    <label>MORE SOON!</label>
                </a>
            </details>
        </div>
    </div>
</template>


<script>
export default {
    name: "sideBar",

    data() {
        return {
        info: null,

        showSideBar: true
        };
    }
};
</script>