<template>
    <section id="inputs" class="padded-content">
        <div class="row">
            <div class="portion whole">
                <div class="border-thick margin-bottom-tiny"></div>
                <h2 class="text-hue margin-bottom-fixed">Inputs</h2>
            </div>
        </div>
    
        <div class="row">
            <div class="portion whole">
                <div class="ff-card padding-all-small shape-rounded bg-white shadow-hard">
                    <h6 class="margin-bottom-tiny"><strong>A sample form</strong></h6>
    
                    <form class="ff-form">
                        <div class="ff-form-inline-group retain-layouts">
                            <div class="ff-form-unit">
                                <input class="ff-input" id="first-name" />
                                <label>First name</label>
                            </div>
    
                            <div class="ff-form-unit">
                                <input class="ff-input" id="last-name" />
                                <label>Last name</label>
                            </div>
                        </div>
    
                        <div class="ff-form-unit">
                            <input class="ff-input with-icon-left with-icon-right validate-this" type="email" id="email"
                                placeholder="Email" pattern="^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$"
                                required />
                            <label>Email<span>Format : john@example.com</span></label>
                            <span class="icon-left">
                                <svg viewBox="0 0 24 24">
                                    <path d="M12,12.5L2,9.3V7.1C2,6.5,2.5,6,3.1,6h17.8C21.5,6,22,6.5,22,7.1v2.2L12,12.5z" />
                                    <path d="M12,13.6l10-3.3v6.6c0,0.6-0.5,1.1-1.1,1.1H3.1C2.5,18,2,17.5,2,16.9v-6.6L12,13.6z" />
                                </svg>
                            </span>
    
                            <span class="icon-right">
                                <svg viewBox="0 0 24 24">
                                    <polygon points="8,16 20,4 22,6 8,20 2,14 4,12 " />
                                </svg>
                            </span>
                        </div>
    
                        <div class="ff-form-inline-group">
                            <div class="ff-form-unit">
                                <input id="password-one" class="ff-input validate-this" type="password" placeholder=" "
                                    pattern="^.{8,}$" required />
                                <label>Password<span>Min. 8 characters</span></label>
                            </div>
    
                            <div class="ff-form-unit">
                                <input id="password-two" class="ff-input" type="password" placeholder=" " pattern="^.{8,}$"
                                    required />
                                <label>Confirm password<span>Must match</span></label>
                            </div>
                        </div>
    
    
                        <div class="ff-form-inline-group retain-layouts">
                            <div class="ff-form-unit">
                                <input class="ff-input" id="address-flat" placeholder="Building / Apt no." />
                                <label>Address</label>
                            </div>
    
                            <div class="ff-form-unit">
                                <input class="ff-input with-icon-left" id="address-street" placeholder="Street" />
                                <span class="icon-left">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M12,12.5L2,9.3V7.1C2,6.5,2.5,6,3.1,6h17.8C21.5,6,22,6.5,22,7.1v2.2L12,12.5z" />
                                        <path d="M12,13.6l10-3.3v6.6c0,0.6-0.5,1.1-1.1,1.1H3.1C2.5,18,2,17.5,2,16.9v-6.6L12,13.6z" />
                                    </svg>
                                </span>
                            </div>
    
                            <div class="ff-form-unit">
                                <input class="ff-input" id="address-city" placeholder="City" />
                            </div>
                        </div>
    
    
    
                        <div class="ff-form-unit-group">
                            <div class="ff-select unit-prefix">
                                <select title="example-select">
                                    <option value="1">Passport</option>
                                    <option value="2">License</option>
                                    <option value="3">State ID</option>
                                </select>
                            </div>

                            <input id="id-proof" class="ff-input" placeholder="ID number" required />

                            <button class="unit-suffix ff-button shape-rounded bg-white text-hue border-hue">Verify</button>

                            <label>ID proof<span>Must be currently valid</span></label>
                        </div>
    
    
    
                        <div class="ff-form-unit">
                            <textarea class="ff-input" rows="8" placeholder="Tell us about yourself"></textarea>
                            <label>Bio</label>
                        </div>
    
                        <div class="ff-form-unit">
                            <input id="file" class="ff-input" type="file" placeholder=" " />
                            <label>Attach document<span>Max file-size is 2mb</span></label>
                        </div>
    
                        <div class="ff-form-inline-group">
                            <label class="ff-form-question">I like</label>
    
                            <div class="ff-form-answers">
                                <div class="ff-radio">
                                    <input type="radio" id="toggle-1" name="radioset-1" />
                                    <label for="toggle-1">cats</label>
                                </div>
    
                                <div class="ff-radio">
                                    <input type="radio" id="toggle-2" name="radioset-1" />
                                    <label for="toggle-2">dogs</label>
                                </div>
    
                                <div class="ff-radio">
                                    <input type="radio" id="toggle-3" name="radioset-1" />
                                    <label for="toggle-3">horses</label>
                                </div>
    
                                <div class="ff-radio">
                                    <input type="radio" id="toggle-4" name="radioset-1" />
                                    <label for="toggle-4">snakes</label>
                                </div>
    
                                <div class="ff-radio">
                                    <input type="radio" id="toggle-5" name="radioset-1" />
                                    <label for="toggle-5">giraffes</label>
                                </div>
    
                                <div class="ff-radio">
                                    <input type="radio" id="toggle-6" name="radioset-1" />
                                    <label for="toggle-6">snakes</label>
                                </div>
    
                                <div class="ff-radio">
                                    <input type="radio" id="toggle-7" name="radioset-1" disabled />
                                    <label for="toggle-7">t-rexes</label>
                                </div>
    
                                <div class="ff-radio">
                                    <input type="radio" id="toggle-8" name="radioset-1" disabled checked />
                                    <label for="toggle-8">reptiles</label>
                                </div>
                            </div>
                        </div>
    
                        <div class="ff-form-inline-group">
                            <label class="ff-form-question">I prefer</label>
    
                            <div class="ff-form-answers">
                                <div class="ff-checkbox">
                                    <input type="checkbox" id="checkbox-1" />
                                    <label for="checkbox-1">books</label>
                                </div>
    
                                <div class="ff-checkbox">
                                    <input type="checkbox" id="checkbox-2" />
                                    <label for="checkbox-2">movies</label>
                                </div>
    
                                <div class="ff-checkbox">
                                    <input type="checkbox" id="checkbox-3" />
                                    <label for="checkbox-3">comics</label>
                                </div>
    
                                <div class="ff-checkbox">
                                    <input type="checkbox" id="checkbox-4" disabled />
                                    <label for="checkbox-4">plays</label>
                                </div>
    
                                <div class="ff-checkbox">
                                    <input type="checkbox" id="checkbox-6" disabled checked />
                                    <label for="checkbox-6">stand-up</label>
                                </div>
                            </div>
                        </div>
    
                        <div class="ff-form-inline-group">
                            <label class="ff-form-question">I prefer</label>
    
                            <div class="ff-form-answers">
                                <div class="ff-select">
                                    <select title="example-select" required>
                                        <option value="0" selected>Select one...</option>
                                        <option value="1">Asia</option>
                                        <option value="3">Australia</option>
                                        <option value="2">Europe</option>
                                        <option value="4">North America</option>
                                        <option value="5">South America</option>
                                    </select>
                                </div>
                            </div>
                        </div>
    
                        <div class="ff-form-inline-group vertically-center-items push-to-ends">
                            <div>
                                <button class="ff-button shape-rounded bg-hue text-white text-bold shadow-hard margin-right-tiny"
                                    type="submit">SUBMIT</button>
    
                                <div class="ff-checkbox">
                                    <input type="checkbox" id="remember-toggle" />
                                    <label for="remember-toggle">Keep me logged in</label>
                                </div>
                            </div>
    
                            <button class="ff-button size-small button-plain text-grey-50 no-shadow" type="reset">Clear
                                form</button>
                        </div>
                    </form>
                </div>
            </div>
    
            <div class="portion whole">
                <pre class="language-markup"><code>
        &lt;div class="ff-card padding-all-small shape-rounded bg-white shadow-hard">
            &lt;h6 class="margin-bottom-tiny">&lt;strong>A sample form&lt;/strong>&lt;/h6>
        
            &lt;form class="ff-form border-accents">
                &lt;div class="ff-form-inline-group retain-layouts">
                    &lt;div class="ff-form-unit">
                        &lt;input class="ff-input" id="first-name" placeholder=" " />
                        &lt;label>First name&lt;/label>
                    &lt;/div>
        
                    &lt;div class="ff-form-unit">
                        &lt;input class="ff-input" id="last-name" />
                        &lt;label>Last name&lt;/label>
                    &lt;/div>
                &lt;/div>
        
                &lt;div class="ff-form-unit">
                    &lt;input class="ff-input with-icon-left with-icon-right validate-this" type="email" id="email" placeholder="Email"
                        pattern="^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$" required />
                    &lt;label>Email&lt;span>Format : john@example.com&lt;/span>&lt;/label>
                    &lt;span class="icon-left">
                        &lt;svg viewBox="0 0 24 24">
                            &lt;path d="M12,12.5L2,9.3V7.1C2,6.5,2.5,6,3.1,6h17.8C21.5,6,22,6.5,22,7.1v2.2L12,12.5z" />
                            &lt;path d="M12,13.6l10-3.3v6.6c0,0.6-0.5,1.1-1.1,1.1H3.1C2.5,18,2,17.5,2,16.9v-6.6L12,13.6z" />
                        &lt;/svg>
                    &lt;/span>
        
                    &lt;span class="icon-right">
                        &lt;svg viewBox="0 0 24 24">
                            &lt;polygon points="8,16 20,4 22,6 8,20 2,14 4,12 " />
                        &lt;/svg>
                    &lt;/span>
                &lt;/div>
        
                &lt;div class="ff-form-inline-group">
                    &lt;div class="ff-form-unit">
                        &lt;input id="password-one" class="ff-input validate-this" type="password" placeholder=" " pattern="^.{8,}$"
                            required />
                        &lt;label>Password&lt;span>Min. 8 characters&lt;/span>&lt;/label>
                    &lt;/div>
        
                    &lt;div class="ff-form-unit">
                        &lt;input id="password-two" class="ff-input" type="password" placeholder=" " pattern="^.{8,}$" required />
                        &lt;label>Confirm password&lt;span>Must match&lt;/span>&lt;/label>
                    &lt;/div>
                &lt;/div>
        
        
                &lt;div class="ff-form-inline-group retain-layouts">
                    &lt;div class="ff-form-unit">
                        &lt;input class="ff-input" id="address-flat" placeholder="Building / Apt no." />
                        &lt;label>Address&lt;/label>
                    &lt;/div>
        
                    &lt;div class="ff-form-unit">
                        &lt;input class="ff-input with-icon-left" id="address-street" placeholder="Street" />
                        &lt;span class="icon-left">
                            &lt;svg viewBox="0 0 24 24">
                                &lt;path d="M12,12.5L2,9.3V7.1C2,6.5,2.5,6,3.1,6h17.8C21.5,6,22,6.5,22,7.1v2.2L12,12.5z" />
                                &lt;path d="M12,13.6l10-3.3v6.6c0,0.6-0.5,1.1-1.1,1.1H3.1C2.5,18,2,17.5,2,16.9v-6.6L12,13.6z" />
                            &lt;/svg>
                        &lt;/span>
                    &lt;/div>
        
                    &lt;div class="ff-form-unit">
                        &lt;input class="ff-input" id="address-city" placeholder="City" />
                    &lt;/div>
                &lt;/div>
        
        
        
                &lt;div class="ff-form-unit-group">
                    &lt;div class="ff-select unit-prefix">
                        &lt;select title="example-select">
                            &lt;option value="1">Passport&lt;/option>
                            &lt;option value="2">License&lt;/option>
                            &lt;option value="3">State ID&lt;/option>
                        &lt;/select>
                    &lt;/div>
        
                    &lt;input id="id-proof" class="ff-input" placeholder="ID number" required />
        
                    &lt;button class="unit-suffix ff-button shape-rounded bg-white text-hue border-hue">Verify&lt;/button>
        
                    &lt;label>ID proof&lt;span>Must be currently valid&lt;/span>&lt;/label>
                &lt;/div>
        
        
        
                &lt;div class="ff-form-unit">
                    &lt;textarea class="ff-input" rows="8" placeholder="Tell us about yourself">&lt;/textarea>
                    &lt;label>Bio&lt;/label>
                &lt;/div>
        
                &lt;div class="ff-form-unit">
                    &lt;input id="file" class="ff-input" type="file" placeholder=" " />
                    &lt;label>Attach document&lt;span>Max file-size is 2mb&lt;/span>&lt;/label>
                &lt;/div>
    
                &lt;div class="ff-form-inline-group">
                    &lt;label class="ff-form-question">I like&lt;/label>
    
                    &lt;div class="ff-form-answers">
                        &lt;div class="ff-radio">
                            &lt;input type="radio" id="toggle-1" name="radioset-1" />
                            &lt;label for="toggle-1">cats&lt;/label>
                        &lt;/div>
    
                        &lt;div class="ff-radio">
                            &lt;input type="radio" id="toggle-2" name="radioset-1" />
                            &lt;label for="toggle-2">dogs&lt;/label>
                        &lt;/div>
        
                        &lt;div class="ff-radio">
                            &lt;input type="radio" id="toggle-3" name="radioset-1" />
                            &lt;label for="toggle-3">horses&lt;/label>
                        &lt;/div>
        
                        &lt;div class="ff-radio">
                            &lt;input type="radio" id="toggle-4" name="radioset-1" />
                            &lt;label for="toggle-4">snakes&lt;/label>
                        &lt;/div>
        
                        &lt;div class="ff-radio">
                            &lt;input type="radio" id="toggle-5" name="radioset-1" />
                            &lt;label for="toggle-5">giraffes&lt;/label>
                        &lt;/div>
        
                        &lt;div class="ff-radio">
                            &lt;input type="radio" id="toggle-6" name="radioset-1" />
                            &lt;label for="toggle-6">snakes&lt;/label>
                        &lt;/div>
        
                        &lt;div class="ff-radio">
                            &lt;input type="radio" id="toggle-7" name="radioset-1" disabled />
                            &lt;label for="toggle-7">t-rexes&lt;/label>
                        &lt;/div>
        
                        &lt;div class="ff-radio">
                            &lt;input type="radio" id="toggle-8" name="radioset-1" disabled checked />
                            &lt;label for="toggle-8">reptiles&lt;/label>
                        &lt;/div>
                    &lt;/div>
                &lt;/div>
        
                &lt;div class="ff-form-inline-group">
                    &lt;label class="ff-form-question">I prefer&lt;/label>
        
                    &lt;div class="ff-form-answers">
                        &lt;div class="ff-checkbox">
                            &lt;input type="checkbox" id="checkbox-1" />
                            &lt;label for="checkbox-1">books&lt;/label>
                        &lt;/div>
        
                        &lt;div class="ff-checkbox">
                            &lt;input type="checkbox" id="checkbox-2" />
                            &lt;label for="checkbox-2">movies&lt;/label>
                        &lt;/div>
        
                        &lt;div class="ff-checkbox">
                            &lt;input type="checkbox" id="checkbox-3" />
                            &lt;label for="checkbox-3">comics&lt;/label>
                        &lt;/div>
        
                        &lt;div class="ff-checkbox">
                            &lt;input type="checkbox" id="checkbox-4" disabled />
                            &lt;label for="checkbox-4">plays&lt;/label>
                        &lt;/div>
        
                        &lt;div class="ff-checkbox">
                            &lt;input type="checkbox" id="checkbox-6" disabled checked />
                            &lt;label for="checkbox-6">stand-up&lt;/label>
                        &lt;/div>
                    &lt;/div>
                &lt;/div>
        
                &lt;div class="ff-form-inline-group">
                    &lt;label class="ff-form-question">I prefer&lt;/label>
        
                    &lt;div class="ff-form-answers">
                        &lt;div class="ff-select">
                            &lt;select title="example-select" required>
                                &lt;option value="0" selected>Select one...&lt;/option>
                                &lt;option value="1">Asia&lt;/option>
                                &lt;option value="3">Australia&lt;/option>
                                &lt;option value="2">Europe&lt;/option>
                                &lt;option value="4">North America&lt;/option>
                                &lt;option value="5">South America&lt;/option>
                            &lt;/select>
                        &lt;/div>
                    &lt;/div>
                &lt;/div>
        
                &lt;div class="ff-form-inline-group vertically-center-items push-to-ends">
                    &lt;div>
                        &lt;button class="ff-button shape-rounded bg-hue text-white text-bold shadow-hard margin-right-tiny" type="submit">SUBMIT&lt;/button>
        
                        &lt;div class="ff-checkbox">
                            &lt;input type="checkbox" id="remember-toggle" />
                            &lt;label for="remember-toggle">Keep me logged in&lt;/label>
                        &lt;/div>
                    &lt;/div>
        
                    &lt;button class="ff-button size-small button-plain text-grey-50 no-shadow" type="reset">Clear form&lt;/button>
                &lt;/div>
            &lt;/form>
        &lt;/div>
                        </code></pre>
            </div>
        </div>
    
    
    
        <!--  FORM SETUP  ///////////////////////////////////////////// -->
        <div id="form-setup" class="row">
            <div class="portion whole">
                <div class="border-thin margin-bottom-tiny"></div>
                <h4>Form setup</h4>
            </div>
        </div>
    
        <div class="row">
            <div class="portion whole">
                <p>The whole form is wrapped within a <code>.ff-form</code> class parent. The form is full-width, and will
                    take the entire width of its parent.</p>
    
                <p>There are two types of form element wrappers&mdash; <code>.ff-form-unit</code> and <code>.ff-form-inline-group</code>.
                    These wrappers ensure consistent spacing and margins.</p>
    
                <pre><code class="language-html">    &lt;div class="ff-form">
            &lt;div class="ff-form-unit">
            &lt;!--  Single form element  -->
            &lt;/div>
    
            &lt;div class="ff-form-inline-group">
            &lt;!-- Multiple inline elements -->
            &lt;/div>
        &lt;/form>
                        </code></pre>
            </div>
    
        </div>
    
    
    
    
        <!--  TEXT INPUT  ///////////////////////////////////////////// -->
        <div id="basic-input" class="row">
            <div class="portion whole">
                <div class="border-thin margin-bottom-tiny"></div>
                <h4>Text input</h4>
            </div>
        </div>
    
        <div id="input-structure" class="row">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <h6>Structure</h6>
            </div>
        </div>
    
        <div class="row">
            <div class="portion whole">
                <p>The input field has two main elements to it&mdash; the input box itself, and its label. Although in the
                    webpage the label appears above the input, in markup, we need to put it belore the input, so that we
                    can style its various states.</p>
            </div>
    
            <div class="portion whole no-padding-bottom">
                <div class="ff-form-unit no-margin-bottom">
                    <input id="email" class="ff-input" placeholder="Your work email" required />
                    <label>Email<span>Must be a valid email</span></label>
                </div>
            </div>
    
            <div class="portion whole">
                <pre class="margin-bottom-fixed"><code class="language-html">&lt;div class="ff-form-unit">
        &lt;input id="email" class="ff-input" placeholder="Your work email" />
        &lt;label>Email&lt;span>Must be a valid email&lt;/span>&lt;/label>
    &lt;/div></code></pre>
    
                <p>This is the basic text input. It has a label and an input box with a placeholder. As you can see, the
                    input box comes first, and then the label. Input has a class of <code>.ff-input</code> and a <code>placeholder</code>.</p>
    
                <p>Now, the label, also has a <code>span</code> inside it&mdash; this is displayed on input focus, as a
                    simple help text. The label also becomes bold on focus, aiding visibility in long forms. The input box
                    also gets a darker border on focus. These are all themeable, using variables.</p>
            </div>
        </div>
    
    
    
        <div id="input-icons" class="row">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Input icons</h6>
            </div>
        </div>
    
        <div class="row">
            <div class="portion whole">
                <p>You can add an icon inside the input field, on the left side. In this example, I’ve used an inline SVG,
                    so that that also becomes themeable.</p>
            </div>
    
            <div class="portion whole no-padding-bottom">
                <div class="ff-form-unit no-margin-bottom">
                    <input id="email" class="ff-input with-icon-left" type="email" placeholder="Your work email" />
                    <label>Email<span>Must be a valid email</span></label>
                    <span class="icon-left">
                        <svg viewBox="0 0 24 24">
                            <path d="M12,12.5L2,9.3V7.1C2,6.5,2.5,6,3.1,6h17.8C21.5,6,22,6.5,22,7.1v2.2L12,12.5z" />
                            <path d="M12,13.6l10-3.3v6.6c0,0.6-0.5,1.1-1.1,1.1H3.1C2.5,18,2,17.5,2,16.9v-6.6L12,13.6z" />
                        </svg>
                    </span>
                </div>
            </div>
    
            <div class="portion whole">
                <pre class="margin-bottom-fixed"><code class="language-html">&lt;div class="ff-form-unit">
        &lt;input id="email" class="ff-input with-icon-left" type="email" placeholder="Your work email" />
    
        &lt;label>Email&lt;span>Must be a valid email&lt;/span>&lt;/label>
    
        &lt;span class="icon-left">
            &lt;svg viewBox="0 0 24 24">
                &lt;path d="M12,12.5L2,9.3V7.1C2,6.5,2.5,6,3.1,6h17.8C21.5,6,22,6.5,22,7.1v2.2L12,12.5z" />
                &lt;path d="M12,13.6l10-3.3v6.6c0,0.6-0.5,1.1-1.1,1.1H3.1C2.5,18,2,17.5,2,16.9v-6.6L12,13.6z" />
            &lt;/svg>
        &lt;/span>
    &lt;/div></code></pre>
    
                <p>The markup is same as the previous example, except that the input now has an additional class of <code>.with-icon-left</code>,
                    and a <code>span.icon-left</code> is added below the input label.</p>
    
                <p>Inside that is an inline SVG, which allows us to theme the icon too. In fact, consider inline SVGs for
                    all your projects. They’re <a href="https://css-tricks.com/pretty-good-svg-icon-system/" target="_blank">awesome</a>.
                    All icons on this site are inline SVGs. Notice that the SVG code has no fill or stroke information. All
                    it needs is the <code>viewBox</code>, nothing else. You can control the colour and the states via
                    simple CSS, if the icons are all inline.</p>
            </div>
        </div>
    
    
        <div id="input-validity" class="row">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Input validity</h6>
            </div>
        </div>
    
        <div class="row">
            <div class="portion whole">
                <p>You can do validation for some fields such as email and passwords, with a simple regex. Read more about
                    it <a href="https://css-tricks.com/form-validation-part-1-constraint-validation-html/">here</a>. While
                    you should always do server-side validation, the <code>pattern</code> attribute allows for simple input
                    constraint.</p>
            </div>
    
            <div class="portion whole no-padding-bottom">
                <div class="ff-form-unit no-margin-bottom">
                    <input class="ff-input with-icon-left validate-this" type="email" id="email" placeholder="Your work email"
                        pattern="^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$" title="Please match the suggested format"
                        required />
                    <label>Email<span>Example : john@example.com</span></label>
                    <span class="icon-left">
                        <svg viewBox="0 0 24 24">
                            <path d="M12,12.5L2,9.3V7.1C2,6.5,2.5,6,3.1,6h17.8C21.5,6,22,6.5,22,7.1v2.2L12,12.5z" />
                            <path d="M12,13.6l10-3.3v6.6c0,0.6-0.5,1.1-1.1,1.1H3.1C2.5,18,2,17.5,2,16.9v-6.6L12,13.6z" />
                        </svg>
                    </span>
    
                    <span class="icon-right">
                        <svg viewBox="0 0 24 24">
                            <polygon points="8,16 20,4 22,6 8,20 2,14 4,12 " />
                        </svg>
                    </span>
                </div>
            </div>
    
            <div class="portion whole">
                <pre class="margin-bottom-fixed"><code class="language-html">&lt;div class="ff-form-unit">
        &lt;input id="email" class="ff-input with-icon-left with-icon-right" type="email" placeholder="Your work email" pattern="^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$" />
    
        &lt;label>Email&lt;span>Example : john@example.com&lt;/span>&lt;/label>
    
        &lt;span class="icon-left">
            &lt;svg viewBox="0 0 24 24">
                &lt;path d="M12,12.5L2,9.3V7.1C2,6.5,2.5,6,3.1,6h17.8C21.5,6,22,6.5,22,7.1v2.2L12,12.5z" />
                &lt;path d="M12,13.6l10-3.3v6.6c0,0.6-0.5,1.1-1.1,1.1H3.1C2.5,18,2,17.5,2,16.9v-6.6L12,13.6z" />
            &lt;/svg>
        &lt;/span>
    
        &lt;span class="icon-right">
            &lt;svg viewBox="0 0 24 24">
                &lt;polygon points="8,16 20,4 22,6 8,20 2,14 4,12 " />
            &lt;/svg>
        &lt;/span>
    &lt;/div></code></pre>
    
                <p>The input now has an another class called <code>.with-icon-right</code>, and there is another <code>span</code>
                    with class <code>.icon-right</code> at the end, with the SVG of a checkmark. Adding a <code>required</code>
                    attribute also adds a red bar to the left of the label.</p>
    
                <p>For validation, we have a regex added as an attribute&mdash; <code>pattern="^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$"</code>
                    for the input field, and this does a simple check if the provided email is of a specified format. Go
                    ahead, type in a valid email id (don’t autofill it), and see the icon change states, as does the <code>span</code>
                    inside the <code>label</code>.</p>
            </div>
        </div>
    
    
    
    
    
    
        <!--  CHECKBOX  /////////////////////////////////////////////// -->
        <div id="checkbox" class="row">
            <div class="portion whole">
                <div class="border-thin margin-bottom-tiny"></div>
                <h4>Checkbox</h4>
            </div>
        </div>
    
        <div class="row">
            <div class="portion whole no-padding-bottom">
                <div class="ff-checkbox">
                    <input type="checkbox" id="checkbox-a" />
                    <label for="checkbox-a">Checkbox label</label>
                </div>
            </div>
    
            <div class="portion whole">
                <pre class="margin-bottom-fixed"><code class="language-html">&lt;div class="ff-checkbox">
        &lt;input type="checkbox" id="checkbox-1" />
        &lt;label for="checkbox-1">Checkbox label&lt;/label>
    &lt;/div></code></pre>
    
                <p>The checkbox itself it pretty straight-forward, with an enclosing <code>.ff-checkbox</code> parent,
                    within which there is a native <code>checkbox</code> input with a <code>label</code>. The colour of the
                    ticked checkbox depends on the <code>$colorHue</code> variable.</p>
                <p>However, creating a checkbox group is slightly different&mdash;</p>
    
                <pre class="margin-top-fixed"><code class="language-html">&lt;div class="ff-form-inline-group">
        &lt;label class="ff-form-question">I like&lt;/label>
    
        &lt;div class="ff-form-answers">
            &lt;!--  All your checkboxes  -->
        &lt;/div>
    &lt;/div></code></pre>
            </div>
        </div>
    
    
    
    
        <!--  CHECKBOX  /////////////////////////////////////////////// -->
        <div id="toggle-switch" class="row">
            <div class="portion whole">
                <div class="border-thin margin-bottom-tiny"></div>
                <h4>Toggle switch</h4>
            </div>
        </div>
    
        <div class="row">
            <div class="portion whole no-padding-bottom">
                <div class="ff-switch">
                    <input type="checkbox" id="checkbox-b" />
                    <label for="checkbox-b">Switch label</label>
                </div>
            </div>
    
            <div class="portion whole">
                <pre class="margin-bottom-fixed"><code class="language-html">&lt;div class="ff-switch">
        &lt;input type="checkbox" id="toggle-a" />
        &lt;label for="toggle-a">Switch label&lt;/label>
    &lt;/div></code></pre>
    
                <p>The toggle switch is just a restyled checkbox, just made to look like a switch.</p>
            </div>
        </div>
    
    
    
    
        <!--  RADIO BUTTON  /////////////////////////////////////////// -->
        <div id="radio-button" class="row">
            <div class="portion whole">
                <div class="border-thin margin-bottom-tiny"></div>
                <h4>Radio button</h4>
            </div>
        </div>
    
        <div class="row">
            <div class="portion whole no-padding-bottom">
                <div class="ff-radio">
                    <input type="radio" id="toggle-a" name="radioset-a" />
                    <label for="toggle-a">Radio label</label>
                </div>
            </div>
    
            <div class="portion whole">
                <pre class="margin-bottom-fixed"><code class="language-html">&lt;div class="ff-radio">
        &lt;input type="radio" id="toggle-1" name="radioset-1" />
        &lt;label for="toggle-1">Radio label&lt;/label>
    &lt;/div></code></pre>
    
                <p>The radio button is pretty much the same structure as the checkbox, but with a <code>.ff-radio</code>
                    parent. The <code>input</code> inside has an extra <code>name</code> attribute that decides which group
                    it belongs to. Creating a radio button group is also the same as a checkbox group.</p>
    
                <pre class="margin-top-fixed"><code class="language-html">&lt;div class="ff-form-inline-group">
        &lt;label class="ff-form-question">I prefer&lt;/label>
    
        &lt;div class="ff-form-answers">
            &lt;!--  All your radio buttons  -->
        &lt;/div>
    &lt;/div></code></pre>
            </div>
        </div>
    
    
    
    
    
    
        <!--  SELECT DROPDOWN  /////////////////////////////////////////// -->
        <div id="select-dropdown" class="row">
            <div class="portion whole">
                <div class="border-thin margin-bottom-tiny"></div>
                <h4>Select dropdown</h4>
            </div>
        </div>
    
        <div class="row">
            <div class="portion whole no-padding-bottom">
                <div class="ff-select">
                    <select title="example-select" required>
                        <option value="0" selected>Select one...</option>
                        <option value="1">Asia</option>
                        <option value="3">Australia</option>
                        <option value="2">Europe</option>
                        <option value="4">North America</option>
                        <option value="5">South America</option>
                    </select>
                </div>
            </div>
    
            <div class="portion whole">
                <pre class="margin-bottom-fixed"><code class="language-html">&lt;div class="ff-select">
        &lt;select title="example-select" required>
            &lt;option value="0" selected>Select one...&lt;/option>
            &lt;option value="1">Asia&lt;/option>
            &lt;option value="3">Australia&lt;/option>
            &lt;option value="2">Europe&lt;/option>
            &lt;option value="4">North America&lt;/option>
            &lt;option value="5">South America&lt;/option>
        &lt;/select>
    &lt;/div></code></pre>
            </div>
        </div>
    
    
    
    
        <!--  BUTTONS  //////////////////////////////////////////////// -->
        <div id="buttons" class="row">
            <div class="portion whole">
                <div class="border-thin margin-bottom-tiny"></div>
                <h4>Buttons</h4>
            </div>
        </div>
    
        <div class="row">
            <div class="portion whole">
                <p>Buttons, like many other elements in FICTOAN, are modularly styled, so you can change the look and feel
                    by just adding classes. You need just the <code>.ff-button</code> class if you&rsquo;re styling a link
                    instead of a button. The link, however has some default styling of its own.</p>
            </div>
        </div>
    
    
        <div id="button-simple" class="row">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Simple button</h6>
            </div>
        </div>
    
        <div class="row">
            <div class="portion whole horizontal no-padding-bottom">
                <button>CLICK ME</button>
                <a class="ff-button">CLICK ME</a>
            </div>
    
            <div class="portion whole">
                <pre class="margin-bottom-fixed"><code class="language-html">&lt;button>CLICK ME&lt;/button>
    &lt;a class="ff-button">CLICK ME&lt;/a></code></pre>
            </div>
        </div>
    
    
        <div id="button-colour" class="row">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Colour</h6>
            </div>
        </div>
    
        <div class="row">
            <div class="portion whole horizontal no-padding-bottom">
                <button class="bg-yellow">CLICK ME</button>
                <button class="bg-blue text-white">CLICK ME</button>
                <button class="bg-green-30 text-green">CLICK ME</button>
            </div>
    
            <div class="portion whole">
                <pre class="margin-bottom-fixed"><code class="language-html">&lt;button class="bg-yellow">CLICK ME&lt;/button>
    &lt;button class="bg-blue text-white">CLICK ME&lt;/button>
    &lt;button class="bg-green-30 text-green">CLICK ME&lt;/button></code></pre>
            </div>
        </div>
    
    
    
        <div id="button-size" class="row">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Size</h6>
            </div>
        </div>
    
        <div class="row">
            <div class="portion whole horizontal no-padding-bottom">
                <button class="size-tiny bg-green-30 text-green">CLICK ME</button>
                <button class="size-small bg-green-30 text-green">CLICK ME</button>
                <button class="bg-green-30 text-green">CLICK ME</button>
                <button class="size-large bg-green-30 text-green">CLICK ME</button>
                <button class="size-huge bg-green-30 text-green">CLICK ME</button>
            </div>
    
            <div class="portion whole">
                <pre class="margin-bottom-fixed"><code class="language-html">&lt;button class="size-tiny bg-green-30 text-green">CLICK ME&lt;/button>
    &lt;button class="size-small bg-green-30 text-green">CLICK ME&lt;/button>
    &lt;button class="bg-green-30 text-green">CLICK ME&lt;/button>
    &lt;button class="size-large bg-green-30 text-green">CLICK ME&lt;/button>
    &lt;button class="size-huge bg-green-30 text-green">CLICK ME&lt;/button></code></pre>
            </div>
        </div>
    
    
    
        <div id="button-shape" class="row">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Shape</h6>
            </div>
        </div>
    
        <div class="row">
            <div class="portion whole horizontal no-padding-bottom">
                <button class="bg-green-30 text-green">CLICK ME</button>
                <button class="shape-rounded bg-green-30 text-green">CLICK ME</button>
                <button class="shape-curved bg-green-30 text-green">CLICK ME</button>
                <button class="shape-circular bg-green-30 text-green">CLICK ME</button>
            </div>
    
            <div class="portion whole">
                <pre class="margin-bottom-fixed"><code class="language-html">&lt;button class="bg-green-30 text-green">CLICK ME&lt;/button>
    &lt;button class="shape-rounded bg-green-30 text-green">CLICK ME&lt;/button>
    &lt;button class="shape-curved bg-green-30 text-green">CLICK ME&lt;/button>
    &lt;button class="shape-circular bg-green-30 text-green">CLICK ME&lt;/button></code></pre>
            </div>
        </div>
    
    
        <div id="button-shadow" class="row">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Shadow</h6>
            </div>
        </div>
    
        <div class="row">
            <div class="portion whole horizontal no-padding-bottom">
                <button class="bg-slate-10 text-slate shape-rounded">CLICK ME</button>
                <button class="shadow-mild bg-slate-10 text-slate shape-rounded">CLICK ME</button>
                <button class="shadow-hard bg-slate-10 text-slate shape-rounded">CLICK ME</button>
                <button class="shadow-soft bg-slate-10 text-slate shape-rounded">CLICK ME</button>
            </div>
    
            <div class="portion whole">
                <pre class="margin-bottom-fixed"><code class="language-html">&lt;button class="bg-slate-10 text-slate shape-rounded">CLICK ME&lt;/button>
    &lt;button class="shadow-mild bg-slate-10 text-slate shape-rounded">CLICK ME&lt;/button>
    &lt;button class="shadow-hard bg-slate-10 text-slate shape-rounded">CLICK ME&lt;/button>
    &lt;button class="shadow-soft bg-slate-10 text-slate shape-rounded">CLICK ME&lt;/button></code></pre>
            </div>
        </div>
    
    
        <div id="button-states" class="row">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>States</h6>
            </div>
        </div>
    
        <div class="row">
            <div class="portion whole horizontal no-padding-bottom">
                <p>You can disable buttons with the HTML <code>disabled</code> attribute, which makes it unclickable,
                    desaturates it and removes the shadows.</p>
            </div>
    
            <div class="portion whole horizontal no-padding-bottom">
                <button disabled class="shape-rounded bg-green-30 text-green">CAN’T CLICK ME, BRO</button>
            </div>
    
            <div class="portion whole">
                <pre class="margin-bottom-fixed"><code class="language-html">&lt;button disabled class="shape-rounded bg-green-30 text-green">CAN’T CLICK ME, BRO&lt;/button></code></pre>
            </div>
        </div>
    
    
        <div id="button-loader" class="row">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>With loader</h6>
            </div>
        </div>
    
        <div class="row">
            <div class="portion whole horizontal no-padding-bottom">
                <p>Adding a <code>.with-loader</code> class removes the text, and adds a spinner inside the button. You can
                    control the colour of the spinner with the <code>$spinnerBorder</code> variable.</p>
            </div>
    
            <div class="portion whole horizontal no-padding-bottom">
                <button class="ff-button shape-rounded bg-green text-white with-loader">CLICK ME</button>
            </div>
    
            <div class="portion whole">
                <pre class="margin-bottom-fixed"><code class="language-html">&lt;button class="ff-button with-loader shape-rounded bg-green text-white">CLICK ME&lt;/button></code></pre>
            </div>
        </div>
    
    
    
        <div id="button-delete" class="row">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>With delete</h6>
            </div>
        </div>
    
        <div class="row">
            <div class="portion whole horizontal no-padding-bottom">
                <p>Adding a <code>.with-delete</code> class removes the text, and adds a spinner inside the button. You can
                    control the colour of the spinner with the <code>$spinnerBorder</code> variable.</p>
            </div>
    
            <div class="portion whole horizontal no-padding-bottom">
                <button class="ff-button shape-rounded bg-green text-white with-delete">CLICK ME</button>
            </div>
    
            <div class="portion whole">
                <pre class="margin-bottom-fixed"><code class="language-html">&lt;button class="ff-button with-loader shape-rounded bg-green text-white">CLICK ME&lt;/button></code></pre>
            </div>
        </div>
    
    
    
    
    
    
    
    
    
        <!--  BUTTONS  //////////////////////////////////////////////// -->
        <div id="progress-bar" class="row">
            <div class="portion whole">
                <div class="border-thin margin-bottom-tiny"></div>
                <h4>Progress bar</h4>
            </div>
        </div>
    
        <div class="row">
            <div class="portion whole">
                <p>Progress bars use the HTML5 <code>progress</code> element, rather than a purely CSS styled div. You can
                    also
                    change the title of the progress bar in HTML, and the value to dynamically change by getting the <code>value</code>
                    attribute via JS.</p>
            </div>
    
            <div class="portion whole">
                <div class="ff-progress">
                    <p class="ff-progress-title">Download</p>
                    <p class="ff-progress-value">40%</p>
                    <progress class="ff-progress-bar" value="40" max="100"></progress>
                </div>
            </div>
    
            <div class="portion whole">
                <pre class="margin-bottom-fixed"><code class="language-html">&lt;div class="ff-progress">
        &lt;p class="ff-progress-title">Download&lt;/p>
        &lt;p class="ff-progress-value">40%&lt;/p>
        &lt;progress class="ff-progress-bar" value="40" max="100">&lt;/progress>
    &lt;/div></code></pre>
            </div>
        </div>
    
    
    
    </section>
</template>

<script>
    export default {
        name : 'inputs',

        components : {
        },

        mounted () {
            var block = document.getElementById('input')
            Prism.highlightElement(block);
        }
    }
</script>