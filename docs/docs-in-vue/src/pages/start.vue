<template>
    <section id="getting-started" class="padded-content">
        <div class="row">
            <div class="portion whole">
                <div class="border-thick margin-bottom-tiny"></div>
                <h2 class="text-hue margin-bottom-fixed"><strong>Getting started</strong></h2>
            </div>
        </div>
    
        <div class="row">
            <div class="portion half">
                <p>FICTOAN runs on SCSS, meaning it needs to be transpiled into CSS before it can be read by the browser.
                    Install it from <a href="http://sass-lang.com/install">here</a>.</p>
            </div>

            <div class="portion half">
                <p>Once installed, you’ll write SCSS, where you can use variables and mixins, greatly adding functionality
                    to plain ol’ CSS.</p>
            </div>
        </div>
    
        <!--  USING FICTOAN  ===============================  -->
        <div id="using-fictoan" class="row">
            <div class="portion whole">
                <div class="border-thin margin-bottom-tiny"></div>
                <h4>Using FICTOAN</h4>
            </div>
        </div>
    
        <div class="row">
            <div class="portion whole no-padding-bottom">
                <h5>Straight out of the box</h5>
            </div>
        </div>
    
        <div class="row">
            <div class="portion">
                <p>Just download <a href="https://raw.githubusercontent.com/sujan-s/fictoan/master/dist/fictoan.css">this</a>
                    file, and drop it into your project. Include the path in your HTML <code>head</code>, like shown below
                    and that’s it, you’re done. If you have a CSS class suggestion plugin in your IDE, it should start
                    auto-suggesting classes right away.</p>
                <pre class="margin-top-tiny"><code class="language-markup">&lt;link rel="stylesheet" href="path/to/main.css" type="text/css"></code></pre>
            </div>
        </div>
    
        <!--  CLASS NAMES  =================================  -->
        <div id="variable-themes" class="row">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-gray margin-bottom-tiny"></div>
                <h5>Themeing with just variables</h5>
            </div>
        </div>
    
        <div class="row">
            <div class="portion half">
                <pre><code class="language-scss">
        //  Global sizing values  ===================
        $measureFixed   : 8px;
        $measureDynamic : 2vmax;
    
        //  Colours  ================================
        $colorTint     : hsl(  42,  16%, 96%);
        $colorHue      : hsl(  42, 100%, 64%);
        $colorAnalogue : hsl(  32, 100%, 64%);
        $colorShade    : hsl(   0,   0%, 16%);
        $colorAccent   : hsl( 164,  72%, 36%);
    
    
        //  Body basics  ============================
        $bodyBgColor : $colorWhite;
    
        //  Fonts
        $fontSans  : "Work Sans", sans-serif;
        $fontSerif : "Crimson Text", serif;
        $fontMono  : "Space Mono", monospace;
    
        //  Paragraph-specific variables
        $baseFontSize : 1em;
        $scaleFactor  : 1.32;
    
        //  Variables for text
        $bodyFontSize  : 1em;
        $bodyFontColor : $colorShade;
    
        $bodyLineHeight    : 1.6;
        $headingLineHeight : 1.2;
        $headingFontWeight : 600;
    
        $paraSerifFontSize   : 1.1em;
        $paraSerifLineHeight : 1.4;
    
        $linkColor      : $colorHue;
        $linkHoverColor : rgba($colorHue, 0.64);
    
        //  Inline code
        $fontCode      : $fontMono;
        $inlineCodeBGColor   : $colorRed-10;
        $inlineCodeTextColor : $colorRed;
    
        //  Selection highlight
        $textHighlightBg    : $colorHue;
        $textHighlightColor : $colorWhite;
    
    
        //  Gradient button  ========================
        $buttonGradientStartColour : $colorHue;
        $buttonGradientEndColour   : $colorAnalogue;
    
    
        //  Progress bar  ===========================
        $progressBarBG   : $colorTint;
        $progressBarFill : $colorHue;
    
    
        //  Header  =================================
        $headerLinkBG : $colorGrey-10;
    
        $headerLinkColor      : $colorShade;
        $headerLinkHoverColor : $colorHue;
    
        $navItemBorderColor : 1px solid $colorGrey-20;
    
    
        //  Tabs  ===================================
        $activeTabLabelBG          : $colorWhite;
        $activeTabLabelTextColor   : $colorShade;
    
        $inactiveTabLabelBG        : $colorGrey-20;
        $inactiveTabLabelHoverBG   : $colorGrey-10;
        $inactiveTabLabelTextColor : $colorGrey-70;
    
        $tabsBorderColor           : $colorGrey-30;
    
    
        //  Sidebar  ================================
        $sideBarBG     : $colorSlate-10;
        $sideBarLogoBG : $colorSlate-10;
    
        //  Links
        $sideBarLinkBG        : $colorSlate-10;
        $sideBarLinkBGOnHover : $colorSlate-20;
    
        //  For line icons
        $sideBarLinkIconStrokeColor        : $colorShade;
        $sideBarLinkIconStrokeColorOnHover : $colorShade;
    
        //  For fill icons
        $sideBarLinkIconFillColor        : $colorShade;
        $sideBarLinkIconFillColorOnHover : $colorHue;
    
        //  Text styling
        $sidebarTextColor        : $colorShade;
        $sidebarSmallTextColor   : $colorSlate-60;
        $sidebarTextColorOnHover : $colorHue;
    
        //  The chevron
        $sideBarLinkChevronBG           : $colorSlate-20;
        $sideBarLinkChevronColor        : $colorSlate-40;
        $sideBarLinkChevronBGOnHover    : $colorHue;
        $sideBarLinkChevronColorOnHover : $colorWhite;
    
        // Floating lables when collapsed
        $sidebBarCollapsedLabelBG        : $colorHue;
        $sidebBarCollapsedLabelTextColor : $colorWhite;
    
    
        //  Table  ==================================
        $tableBG        : $colorWhite;
        $tableTextColor : $colorShade;
    
        $tableBorderColor : $colorGrey-40;
    
        $tableStripedHeaderBG : $colorHue;
        $tableStripedCellBG   : $colorSlate-20;
    
        $tableHoverableBG        : $colorAmber-20;
        $tableHoverableTextColor : $colorShade;
    
    
        //  Modal  ==================================
        $modalOverlayBG : rgba($colorHue, 0.64);
                        </code></pre>
            </div>
    
            <div class="portion half">
                <p>There’s a well laid out theme to set the look and feel of your web project. You can easily change the
                    look and feel completely just by changing a few values of variables, from the <code>theme/_ff-theme.scss</code>file.</p>
    
                <p>To over-ride these values, just copy the line you want to edit, and add it to your custom variables
                    file, and change the value to whatever you’d like. Easy peasy.</p>
    
                <p>Use a different file, so that it becomes easy to update FICTOAN later on.</p>
            </div>
        </div>
    
        <div class="border-thin margin-top-tiny margin-bottom-tiny"></div>
    
        <div class="row margin-bottom-fixed">
            <div class="portion whole no-padding-bottom">
                <h5>Or, getting your hands dirty</h5>
            </div>
        </div>
    
        <div class="row">
            <div class="portion half half-on-tab-ls half-on-tab-pt">
                <pre><code>    <span class="text-accent">css</span>
        |
        |—— <span class="text-slate-70">main.scss</span>
        |
        |—— <span class="text-indigo">vendor</span>
        |    |—— <span class="text-slate-70">_normalize.scss</span>
        |
        |
        |—— <span class="text-indigo">fictoan</span>
        |    |—— <span class="text-blue-80">base</span>
        |    |    |—— <span class="text-slate-70">_ff-reset.scss</span>
        |    |    |—— <span class="text-slate-70">_ff-layout.scss</span>
        |    |    |—— <span class="text-slate-70">_ff-responsive.scss</span>
        |    |    |—— <span class="text-slate-70">_ff-utilities.scss</span>
        |    |
        |    |—— <span class="text-blue-80">design</span>
        |    |    |—— <span class="text-slate-70">_ff-colours.scss</span>
        |    |    |—— <span class="text-slate-70">_ff-typography.scss</span>
        |    |    |—— <span class="text-slate-70">_ff-code-light.scss</span>
        |    |
        |    |—— <span class="text-blue-80">components</span>
        |    |    |—— <span class="text-slate-70">_ff-header.scss</span>
        |    |    |—— <span class="text-slate-70">_ff-card.scss</span>
        |    |    |—— <span class="text-slate-70">_ff-sidebar.scss</span>
        |    |    |—— <span class="text-slate-70">_ff-modal.scss</span>
        |    |    |—— <span class="text-slate-70">_ff-tabs.scss</span>
        |    |    |—— <span class="text-slate-70">_ff-table.scss</span>
        |    |
        |    |—— <span class="text-blue-80">elements</span>
        |    |    |—— <span class="text-slate-70">_ff-buttons.scss</span>
        |    |    |—— <span class="text-slate-70">_ff-inputs.scss</span>
        |    |
        |    |
        |    |—— <span class="text-blue-80">theme</span>
        |         |—— <span class="text-slate-70">_ff-theme.scss</span>
        |         |—— <span class="text-slate-70">_ff-variables.scss</span>
        |
        |
        |—— <span class="text-indigo">&lt;this-project></span>
                |—— <span class="text-slate-70">_variables-&lt;this-project>.scss</span>
                |—— <span class="text-slate-70">_styles-&lt;this-project>.scss</span>
                </code></pre>
            </div>
    
            <div class="portion half half-on-tab-ls half-on-tab-pt">
                <p>Want to build on top of FICTOAN? Then, open the <code>css</code> directory, and in it, you'll find three
                    more folders and the <code>main.scss</code> source file and the transpiled <code>main.css</code> output
                    file. The <code>fictoan.scss</code> imports all the other SCSS files in a particular order and
                    transpiles them into one single CSS file.</p>
    
                <h6 class="margin-bottom-fixed">Customised builds</h6>
                <p>You can comment out the files you don’t want&mdash; your project doesn&rsquo;t need a sidebar? Comment
                    it out. Or you need FICTOAN for just the layouts? Comment out all the folders but <code>base</code>.
                    This way you can reduce the outputted CSS file size and thus performance.</p>
    
                <p class="margin-bottom-fixed"><strong>/vendor</strong></p>
                <p>This folder contains all third-party plugins, right now it has only one file— <code>normalize.scss</code>.</p>
    
                <p class="margin-bottom-fixed"><strong>/fictoan</strong></p>
                <p>This is the meat of FICTOAN, and has all the layouts, grids, styling rules, elements and components all
                    neatly organised. They all have a <code>ff</code> prefix, so that you don’t confuse them with your our
                    files in your projects.</p>
    
                <p class="margin-bottom-fixed"><strong>&lt;/this project></strong></p>
                <p>Now, we come to the custom part. This folder has two files inside, one for defining variables, and
                    another for all your styling rules. Rename them to reflect the name of your current project, and edit
                    only these files. This way, it becomes easy to track changes, and updating FICTOAN is also a breeze. Be
                    sure to rename the filenames in <code>main.scss</code> too.</p>
    
                <p>If you add more SCSS files, make sure you list them in the <code>main.scss</code> file for import.</p>
            </div>
        </div>
    
    
    
        <!--  CLASS NAMES  =================================  -->
        <div id="class-names" class="row">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-gray margin-bottom-tiny"></div>
                <h5>Class names</h5>
            </div>
        </div>

        <div class="row">
            <div class="portion half">
                <p>Class names in FICTOAN are designed to be intuitively recalled, so that you don&rsquo;t have to remember complex nomenclature and contextual modifiers. All class names are in plain, conversational English, rather than devspeak.</p>
            </div>

            <div class="portion half">
                <p>For example, <code>.vertically-centre-this</code>, <code>.no-padding-left</code> and <code>.show-only-on-mobile</code>, to name a few. You&rsquo;ll see more of this in the individual sections.</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name : 'start',

        components : {
        }
    }
</script>