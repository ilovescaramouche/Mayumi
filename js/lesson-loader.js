const quarter1 = {
  lesson1: `
    <h2>1st Quarter – Lesson 1 (Introduction to CSS)</h2>
    <p>CSS stands for Cascading Style Sheets. It describes how HTML elements are displayed on screen, paper, or in other media. CSS saves a lot of work because it can control the layout of multiple web pages all at once.</p>
    <h3>Why use CSS?</h3>
    <ul>
      <li>Defines styles for web pages including design, layout, and variations for different devices.</li>
      <li>Provides consistency across web pages.</li>
      <li>Saves time: one CSS file can control multiple pages.</li>
      <li>Improves accessibility and responsiveness.</li>
      <li>Enhances design with layout, colors, and animations.</li>
    </ul>
    <h3>Layers of a Webpage</h3>
    <ul>
      <li><b>Content Layer</b> – HTML defines text, images, and media.</li>
      <li><b>Presentation Layer</b> – CSS defines how people see the page.</li>
      <li><b>Behavior Layer</b> – JavaScript adds interactivity.</li>
    </ul>
  `,
  lesson2: `
    <h2>1st Quarter – Lesson 2 (Hyperlinks)</h2>
    <p>Hyperlinks are reference links that allow navigation to another page of the same document or to another document. They are enclosed between <code>&lt;a&gt;</code> tags with an <code>href</code> attribute specifying the target URL.</p>
    <h3>Types of Hyperlinks</h3>
    <ul>
      <li><b>Absolute URL</b> – links to a page on a different web server.</li>
      <li><b>Relative URL</b> – links to a page on the same server.</li>
      <li><b>Named Anchor</b> – links to a different location on the same page.</li>
    </ul>
    <h3>Target Attribute Values</h3>
    <ul>
      <li><code>_blank</code> – opens in a new window.</li>
      <li><code>_self</code> – opens in the same frame.</li>
      <li><code>_parent</code> – opens in the parent frameset.</li>
      <li><code>_top</code> – opens in the full body of the window.</li>
    </ul>
  `,
  lesson3: `
    <h2>1st Quarter – Lesson 3 (HTML Links and Forms)</h2>
    <p>HTML links use the anchor tag <code>&lt;a&gt;</code> to connect pages or resources. Links can be text, images, or other elements. Forms allow gathering feedback and input from users.</p>
    <h3>Form Elements</h3>
    <ul>
      <li>Textboxes</li>
      <li>Password boxes</li>
      <li>Radio buttons</li>
      <li>Check boxes</li>
      <li>Dropdown menus</li>
      <li>Text areas</li>
      <li>Submit and Reset buttons</li>
    </ul>
    <p>Forms use the <code>&lt;form&gt;</code> tag with attributes like <code>action</code> (where data is sent) and <code>method</code> (GET or POST).</p>
  `,
  lesson4: `
    <h2>1st Quarter – Lesson 4 (Input Types and Forms)</h2>
    <p>HTML5 introduced new input types that enhance forms and validation. The <code>&lt;input&gt;</code> tag is used to declare an input control.</p>
    <h3>Examples of Input Types</h3>
    <ul>
      <li><b>color</b> – selects a color.</li>
      <li><b>date</b> – defines a date control.</li>
      <li><b>email</b> – defines a field for an email address.</li>
      <li><b>month</b> – defines a month and year control.</li>
      <li><b>number</b> – numeric field with min/max.</li>
      <li><b>range</b> – slider for approximate values.</li>
      <li><b>search</b> – search field.</li>
      <li><b>time</b> – time selector.</li>
      <li><b>url</b> – URL input field.</li>
      <li><b>tel</b> – telephone number field.</li>
    </ul>
  `,
  lesson5: `
    <h2>1st Quarter – Lesson 5 (Input Element Attributes)</h2>
    <p>The <code>&lt;input&gt;</code> element can be customized with attributes to control its behavior.</p>
    <h3>Common Attributes</h3>
    <ul>
      <li><b>name</b> – assigns a name to the input field.</li>
      <li><b>type</b> – specifies the type (text, password, checkbox, radio, submit, reset).</li>
      <li><b>size</b> – sets the size of the input field.</li>
      <li><b>value</b> – sets the initial value or button label.</li>
      <li><b>checked</b> – sets default selection for radio/checkbox.</li>
    </ul>
    <h3>Other Input Types</h3>
    <ul>
      <li>file</li>
      <li>image</li>
      <li>hidden</li>
      <li>button</li>
    </ul>
  `,
  lesson6: `
    <h2>1st Quarter – Lesson 6 (Radio Buttons, Checkboxes, Dropdowns)</h2>
    <p>Forms can include different input controls for user choices.</p>
    <h3>Radio Buttons</h3>
    <p>Allow only one selection in a group. Example: <code>&lt;input type="radio" name="gender"&gt;</code>.</p>
    <h3>Checkboxes</h3>
    <p>Allow multiple selections. Example: <code>&lt;input type="checkbox" name="hobby"&gt;</code>.</p>
    <h3>Dropdown Menus</h3>
    <p>Created with <code>&lt;select&gt;&lt;option&gt;</code>. Attributes include <b>name</b>, <b>size</b>, and <b>selected</b> for default choice.</p>
  `,
  lesson7: `
    <h2>1st Quarter – Lesson 7 (Forms: Submit, Reset, File Upload)</h2>
    <p>Forms often include buttons and file inputs.</p>
    <h3>Submit Button</h3>
    <p>Sends form data to the server. Example: <code>&lt;input type="submit" value="Submit"&gt;</code>.</p>
    <h3>Reset Button</h3>
    <p>Clears all form inputs. Example: <code>&lt;input type="reset" value="Reset"&gt;</code>.</p>
    <h3>File Upload</h3>
    <p>Allows users to upload files. Example: <code>&lt;input type="file" name="image" accept="image/*"&gt;</code>.</p>
    <h3>Other Attributes</h3>
    <ul>
      <li><b>accept</b> – specifies file types.</li>
      <li><b>multiple</b> – allows multiple file uploads.</li>
    </ul>
  `
};

// Quarter 2 Lessons
const quarter2 = {
  lesson8: `
    <h2>2nd Quarter – Lesson 1 (CSS Basics)</h2>
    <p>CSS is the language we use to style a web page. It separates content from design, making websites easier to maintain and more attractive.</p>
    <h3>Structure of CSS</h3>
    <ul>
      <li><b>Selector</b> – the HTML element you want to style.</li>
      <li><b>Property</b> – the style attribute you want to modify.</li>
      <li><b>Value</b> – the setting applied to the property.</li>
      <li><b>Declaration</b> – a single instruction (property + value).</li>
      <li><b>Declaration Block</b> – one or more declarations inside braces.</li>
    </ul>
    <h3>Kinds of CSS</h3>
    <ul>
      <li><b>External</b> – stored in a .css file, linked with &lt;link&gt;.</li>
      <li><b>Embedded/Internal</b> – defined inside &lt;style&gt; in the HTML head.</li>
      <li><b>Inline</b> – defined directly in the element’s style attribute.</li>
    </ul>
  `,

  lesson9: `
    <h2>2nd Quarter – Lesson 2 (Style Sheets)</h2>
    <p>Style sheets are sets of instructions to a web browser on how to display elements on a page. They separate content (HTML) from appearance (CSS).</p>
    <h3>Parts of a CSS Rule</h3>
    <ul>
      <li><b>Selector</b> – identifies the HTML element.</li>
      <li><b>Property</b> – the style attribute to change.</li>
      <li><b>Value</b> – the setting applied to the property.</li>
    </ul>
    <h3>Three Kinds of CSS</h3>
    <ul>
      <li><b>External</b> – linked via &lt;link&gt; tag.</li>
      <li><b>Embedded/Internal</b> – defined inside &lt;style&gt; in the head.</li>
      <li><b>Inline</b> – defined directly in the element’s style attribute.</li>
    </ul>
  `,

  lesson10: `
    <h2>2nd Quarter – Lesson 3 (Inline, Internal, External CSS)</h2>
    <p>CSS can be applied in three ways: inline, internal, and external.</p>
    <h3>Inline Style Sheets</h3>
    <p>Defined directly in the element’s style attribute. Example: &lt;p style="color:red;"&gt;.</p>
    <h3>Internal/Embedded Style Sheets</h3>
    <p>Defined inside &lt;style&gt; in the head section. Applies to the whole document.</p>
    <h3>External Style Sheets</h3>
    <p>Stored in a separate .css file and linked with &lt;link&gt;. Allows consistent styling across multiple pages.</p>
    <h3>Display Property</h3>
    <ul>
      <li><b>block</b> – elements stack vertically.</li>
      <li><b>inline</b> – elements flow horizontally.</li>
      <li><b>none</b> – element is hidden.</li>
      <li><b>list-item</b> – displays as a list item.</li>
    </ul>
    <h3>Div and Span Tags</h3>
    <p>&lt;div&gt; – block-level container for grouping content.<br>&lt;span&gt; – inline container for styling parts of text.</p>
  `,

  lesson11: `
    <h2>2nd Quarter – Lesson 4 (CSS Rules and Classes)</h2>
    <p>A CSS rule has two parts: a selector and a declaration block. Classes are user-defined selectors applied to specific HTML elements.</p>
    <h3>Classes</h3>
    <ul>
      <li>Defined with a dot (.) followed by the class name.</li>
      <li>Reusable across multiple elements.</li>
      <li>Can be combined with element selectors (e.g., p.note).</li>
    </ul>
    <h3>Examples</h3>
    <ul>
      <li>.highlight { background-color: yellow; }</li>
      <li>p.note { color: blue; }</li>
    </ul>
  `,

  lesson12: `
    <h2>2nd Quarter – Lesson 5 (CSS Selectors)</h2>
    <p>Selectors are used to target HTML elements for styling. There are six main types:</p>
    <ul>
      <li><b>Element Selector</b> – targets all instances of a tag (e.g., p {}).</li>
      <li><b>ID Selector</b> – targets a unique element using #id.</li>
      <li><b>Class Selector</b> – targets elements with a specific class using .classname.</li>
      <li><b>Universal Selector</b> – targets all elements using *.</li>
      <li><b>Group Selector</b> – applies styles to multiple selectors separated by commas.</li>
      <li><b>Attribute Selector</b> – targets elements based on attributes (e.g., input[type="text"]).</li>
    </ul>
  `,

  lesson13: `
    <h2>2nd Quarter – Lesson 6 (CSS Dimensions and Pseudo-Classes)</h2>
    <p>CSS can control dimensions and visibility of elements, as well as link behaviors using pseudo-classes.</p>
    <h3>Dimension Properties</h3>
    <ul>
      <li><b>width</b> – sets element width.</li>
      <li><b>height</b> – sets element height.</li>
      <li><b>line-height</b> – sets line spacing.</li>
      <li><b>max-height</b>, <b>min-height</b>, <b>max-width</b>, <b>min-width</b> – set limits.</li>
      <li><b>visibility</b> – controls whether an element is visible, hidden, or collapsed.</li>
    </ul>
    <h3>Pseudo-Classes for Links</h3>
    <ul>
      <li>:link – unvisited links.</li>
      <li>:visited – visited links.</li>
      <li>:hover – when mouse hovers.</li>
      <li>:active – when clicked.</li>
      <li>:focus – when focused.</li>
    </ul>
    <p>The order of pseudo-classes is important: LVHA (Link, Visited, Hover, Active).</p>
  `
};

// Quarter 3 Lessons
const quarter3 = {
  lesson14: `
    <h2>3rd Quarter – Lesson 1 (CSS Introduction)</h2>
    <p>CSS (Cascading Style Sheets) is used to style and design webpages. It separates content from presentation, making websites easier to maintain and more visually appealing.</p>
    <h3>Key Concepts</h3>
    <ul>
      <li>CSS rules consist of a selector and a declaration block.</li>
      <li>Selectors target HTML elements.</li>
      <li>Declarations contain properties and values.</li>
      <li>CSS can be applied inline, internally, or externally.</li>
    </ul>
  `,

  lesson15: `
    <h2>3rd Quarter – Lesson 2 (Colors and Fonts)</h2>
    <p>CSS provides properties to control colors, fonts, and text styling.</p>
    <h3>Color Properties</h3>
    <ul>
      <li><b>color</b> – sets text color.</li>
      <li><b>background-color</b> – sets background color.</li>
      <li>Colors can be defined by names, HEX codes, RGB, or HSL values.</li>
    </ul>
    <h3>Font Properties</h3>
    <ul>
      <li><b>font-family</b> – specifies typeface (e.g., Arial, Times New Roman).</li>
      <li><b>font-size</b> – sets text size.</li>
      <li><b>font-weight</b> – defines boldness.</li>
      <li><b>font-style</b> – normal, italic, or oblique.</li>
      <li><b>font-variant</b> – normal or small-caps.</li>
    </ul>
    <h3>Text Properties</h3>
    <ul>
      <li>line-height – vertical spacing between lines.</li>
      <li>letter-spacing – spacing between characters.</li>
      <li>text-align – left, right, center, justify.</li>
      <li>text-decoration – underline, overline, line-through.</li>
      <li>text-transform – capitalize, uppercase, lowercase.</li>
      <li>text-shadow – adds shadow to text.</li>
    </ul>
  `,

  lesson16: `
    <h2>3rd Quarter – Lesson 3 (Layouts)</h2>
    <p>CSS layouts define how elements are arranged on a webpage.</p>
    <h3>Box Model</h3>
    <ul>
      <li>Content – the actual text or image.</li>
      <li>Padding – space between content and border.</li>
      <li>Border – the edge around the element.</li>
      <li>Margin – space outside the border.</li>
    </ul>
    <h3>Positioning</h3>
    <ul>
      <li><b>static</b> – default positioning.</li>
      <li><b>relative</b> – positioned relative to normal flow.</li>
      <li><b>absolute</b> – positioned relative to nearest positioned ancestor.</li>
      <li><b>fixed</b> – positioned relative to viewport.</li>
      <li><b>sticky</b> – toggles between relative and fixed depending on scroll.</li>
    </ul>
    <h3>Display Property</h3>
    <ul>
      <li>block – elements stack vertically.</li>
      <li>inline – elements flow horizontally.</li>
      <li>flex – flexible box layout.</li>
      <li>grid – two-dimensional layout system.</li>
    </ul>
  `,

  lesson17: `
    <h2>3rd Quarter – Lesson 4 (Responsive Design)</h2>
    <p>Responsive design ensures webpages look good on all devices and screen sizes.</p>
    <h3>Key Techniques</h3>
    <ul>
      <li><b>Media Queries</b> – apply styles based on device width, height, or orientation.</li>
      <li><b>Flexible Layouts</b> – use relative units like percentages or ems instead of fixed pixels.</li>
      <li><b>Fluid Images</b> – images scale within their containers.</li>
      <li><b>Mobile-First Design</b> – design for small screens first, then enhance for larger screens.</li>
    </ul>
    <h3>Benefits</h3>
    <ul>
      <li>Improves user experience across devices.</li>
      <li>Ensures accessibility and readability.</li>
      <li>Reduces need for separate mobile sites.</li>
    </ul>
  `
};
// Quarter 4 Lessons
const quarter4 = {
  lesson18: `
    <h2>4th Quarter – Lesson 1 (JavaScript Basics)</h2>
    <p>JavaScript is a programming language used to add interactivity to web pages. It runs in the browser and allows dynamic content updates, user input handling, and more.</p>
    <h3>Key Concepts</h3>
    <ul>
      <li>Variables – store data values.</li>
      <li>Data Types – strings, numbers, booleans, arrays, objects.</li>
      <li>Operators – arithmetic, comparison, logical.</li>
      <li>Functions – reusable blocks of code.</li>
    </ul>
    <p>JavaScript is essential for modern web development, enabling interactive and responsive user experiences.</p>
  `,

  lesson19: `
    <h2>4th Quarter – Lesson 2 (Events)</h2>
    <p>Events are actions or occurrences that happen in the browser, such as clicks, key presses, or page loads. JavaScript can listen for these events and respond accordingly.</p>
    <h3>Common Events</h3>
    <ul>
      <li><b>onclick</b> – triggered when an element is clicked.</li>
      <li><b>onmouseover</b> – triggered when the mouse hovers over an element.</li>
      <li><b>onkeydown</b> – triggered when a key is pressed.</li>
      <li><b>onload</b> – triggered when the page finishes loading.</li>
    </ul>
    <p>Event listeners allow developers to attach functions to elements so that specific actions are performed when events occur.</p>
  `,

  lesson20: `
    <h2>4th Quarter – Lesson 3 (DOM Manipulation)</h2>
    <p>The Document Object Model (DOM) represents the structure of a webpage. JavaScript can manipulate the DOM to change content, styles, and structure dynamically.</p>
    <h3>Common Methods</h3>
    <ul>
      <li><b>getElementById()</b> – selects an element by its ID.</li>
      <li><b>querySelector()</b> – selects the first element that matches a CSS selector.</li>
      <li><b>createElement()</b> – creates a new HTML element.</li>
      <li><b>appendChild()</b> – adds a new child element.</li>
      <li><b>innerHTML</b> – changes the content of an element.</li>
    </ul>
    <p>DOM manipulation is the foundation of interactive web applications.</p>
  `,

  lesson21: `
    <h2>4th Quarter – Lesson 4 (Final Website Project)</h2>
    <p>The final project integrates HTML, CSS, and JavaScript to build a complete, functional website. Students apply all concepts learned throughout the year.</p>
    <h3>Project Components</h3>
    <ul>
      <li>HTML – structure and content.</li>
      <li>CSS – styling and layout.</li>
      <li>JavaScript – interactivity and dynamic behavior.</li>
    </ul>
    <p>This project demonstrates mastery of web development fundamentals and prepares students for more advanced topics.</p>
  `
};

// -------------------- END OF FILE --------------------

// Merge all quarters into one lessons object
const lessons = {
  ...quarter1,
  ...quarter2,
  ...quarter3,
  ...quarter4
};

// Attach click events to lesson cards
document.querySelectorAll('.lesson-card').forEach(card => {
  card.addEventListener('click', () => {
    const lessonKey = card.getAttribute('data-lesson');
    const contentBox = document.getElementById('lessonContent');
    if (lessons[lessonKey]) {
      contentBox.innerHTML = lessons[lessonKey];
    } else {
      contentBox.innerHTML = "<p>Lesson content not found.</p>";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("#apLessonsAccordion .accordion-button");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const targetSelector = this.getAttribute("data-bs-target");
      const target = document.querySelector(targetSelector);

      // Close all other open panels
      document.querySelectorAll("#apLessonsAccordion .accordion-collapse").forEach(collapse => {
        if (collapse !== target) {
          collapse.classList.remove("show");
        }
      });

      // Toggle the clicked panel
      target.classList.toggle("show");

      // Update button collapsed state
      buttons.forEach(btn => btn.classList.add("collapsed"));
      if (target.classList.contains("show")) {
        this.classList.remove("collapsed");
      }
    });
  });
});


