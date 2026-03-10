
// ==================== ICT LESSONS ====================

const quarter1 = {
  lesson1: `
    <h2>1st Quarter – Lesson 1 (Introduction to CSS)</h2>
    <p>CSS stands for Cascading Style Sheets. It describes how HTML elements are displayed on screen, paper, or in other media.</p>
    <h3>Why use CSS?</h3>
    <ul>
      <li>Defines styles for web pages including design, layout, and variations for different devices.</li>
      <li>Provides consistency across web pages.</li>
      <li>Saves time: one CSS file can control multiple pages.</li>
    </ul>
    <h3>Layers of a Webpage</h3>
    <ul>
      <li><b>Content Layer</b> – HTML defines text, images, and media.</li>
      <li><b>Presentation Layer</b> – CSS defines how people see the page.</li>
      <li><b>Behavior Layer</b> – JavaScript adds interactivity.</li>
    </ul>
    <div class="sample-code-box">
      <h4>Sample Code</h4>
      <pre><code><span class="tag"><!DOCTYPE html></span>
<span class="tag"><html></span>
<span class="tag"><head></span>
  <span class="tag"><style></span>
    <span class="selector">h1</span> { <span class="property">color</span>: <span class="value">blue</span>; }
  <span class="tag"></style></span>
<span class="tag"></head></span>
<span class="tag"><body></span>
  <span class="tag"><h1></span>Hello!<span class="tag"></h1></span>
<span class="tag"></body></span>
<span class="tag"></html></span></code></pre>
    </div>
    <div class="sample-output-box">
      <h4>Sample Output</h4>
      <div class="output-content" style="color: blue;">
        <h1 style="color: blue; margin: 0;">Hello!</h1>
      </div>
    </div>
  `,
  lesson2: `
    <h2>1st Quarter – Lesson 2 (Hyperlinks)</h2>
    <p>Hyperlinks are reference links that allow navigation to another page.</p>
    <h3>Types of Hyperlinks</h3>
    <ul>
      <li><b>Absolute URL</b> – links to a page on a different web server.</li>
      <li><b>Relative URL</b> – links to a page on the same server.</li>
    </ul>
    <h3>Target Attribute</h3>
    <ul>
      <li><code>_blank</code> – opens in a new window.</li>
      <li><code>_self</code> – opens in the same frame.</li>
    </ul>
    <div class="sample-code-box">
      <h4>Sample Code</h4>
      <pre><code><span class="tag"><a</span> <span class="attr">href</span>=<span class="value">"https://google.com"</span><span class="tag">></span>Google<span class="tag"></a></span></code></pre>
    </div>
    <div class="sample-output-box">
      <h4>Sample Output</h4>
      <div class="output-content">
        <a href="#" style="color: blue;">Google</a>
      </div>
    </div>
  `,
  lesson3: `
    <h2>1st Quarter – Lesson 3 (HTML Links and Forms)</h2>
    <p>HTML forms allow gathering feedback and input from users.</p>
    <h3>Form Elements</h3>
    <ul>
      <li>Textboxes</li>
      <li>Password boxes</li>
      <li>Radio buttons</li>
      <li>Submit and Reset buttons</li>
    </ul>
    <div class="sample-code-box">
      <h4>Sample Code</h4>
      <pre><code><span class="tag"><form></span>
  <span class="tag"><input</span> <span class="attr">type</span>=<span class="value">"text"</span> <span class="attr">placeholder</span>=<span class="value">"Name"</span><span class="tag">></span>
  <span class="tag"><input</span> <span class="attr">type</span>=<span class="value">"submit"</span><span class="tag">></span>
<span class="tag"></form></span></code></pre>
    </div>
    <div class="sample-output-box">
      <h4>Sample Output</h4>
      <div class="output-content">
        <form onsubmit="return false;">
          <input type="text" placeholder="Name" style="padding:5px; margin:5px;">
          <input type="submit" value="Submit" style="padding:5px 10px; cursor:pointer;">
        </form>
      </div>
    </div>
  `,
  lesson4: `
    <h2>1st Quarter – Lesson 4 (Input Types and Forms)</h2>
    <p>HTML5 introduced new input types that enhance forms and validation.</p>
    <h3>Examples of Input Types</h3>
    <ul>
      <li><b>color</b> – selects a color.</li>
      <li><b>date</b> – defines a date control.</li>
      <li><b>email</b> – defines a field for an email address.</li>
      <li><b>number</b> – numeric field with min/max.</li>
    </ul>
    <div class="sample-code-box">
      <h4>Sample Code</h4>
      <pre><code><span class="tag"><input</span> <span class="attr">type</span>=<span class="value">"color"</span><span class="tag">></span>
<span class="tag"><input</span> <span class="attr">type</span>=<span class="value">"date"</span><span class="tag">></span>
<span class="tag"><input</span> <span class="attr">type</span>=<span class="value">"email"</span><span class="tag">></span></code></pre>
    </div>
    <div class="sample-output-box">
      <h4>Sample Output</h4>
      <div class="output-content" style="display:flex; flex-direction:column; gap:10px;">
        <div><label>Color: </label><input type="color" value="#ff0000"></div>
        <div><label>Date: </label><input type="date"></div>
        <div><label>Email: </label><input type="email" placeholder="email@example.com"></div>
      </div>
    </div>
  `,
  lesson5: `
    <h2>1st Quarter – Lesson 5 (Input Element Attributes)</h2>
    <p>The input element can be customized with attributes.</p>
    <h3>Common Attributes</h3>
    <ul>
      <li><b>name</b> – assigns a name to the input field.</li>
      <li><b>type</b> – specifies the type.</li>
      <li><b>value</b> – sets the initial value.</li>
      <li><b>checked</b> – sets default selection.</li>
    </ul>
    <div class="sample-code-box">
      <h4>Sample Code</h4>
      <pre><code><span class="tag"><input</span> <span class="attr">type</span>=<span class="value">"text"</span> <span class="attr">value</span>=<span class="value">"John"</span><span class="tag">></span>
<span class="tag"><input</span> <span class="attr">type</span>=<span class="value">"checkbox"</span> <span class="attr">checked</span><span class="tag">></span> Agree</code></pre>
    </div>
    <div class="sample-output-box">
      <h4>Sample Output</h4>
      <div class="output-content" style="display:flex; flex-direction:column; gap:10px;">
        <div><input type="text" value="John"></div>
        <div><input type="checkbox" checked> Agree</div>
      </div>
    </div>
  `,
  lesson6: `
    <h2>1st Quarter – Lesson 6 (Radio Buttons, Checkboxes, Dropdowns)</h2>
    <p>Forms can include different input controls for user choices.</p>
    <h3>Radio Buttons</h3>
    <p>Allow only one selection in a group.</p>
    <h3>Checkboxes</h3>
    <p>Allow multiple selections.</p>
    <h3>Dropdown</h3>
    <p>Created with select and option.</p>
    <div class="sample-code-box">
      <h4>Sample Code</h4>
      <pre><code><span class="tag"><input</span> <span class="attr">type</span>=<span class="value">"radio"</span> <span class="attr">name</span>=<span class="value">"gender"</span><span class="tag">></span> Male
<span class="tag"><select></span>
  <span class="tag"><option></span>Philippines<span class="tag"></option></span>
  <span class="tag"><option></span>USA<span class="tag"></option></span>
<span class="tag"></select></span></code></pre>
    </div>
    <div class="sample-output-box">
      <h4>Sample Output</h4>
      <div class="output-content" style="display:flex; flex-direction:column; gap:10px;">
        <div><input type="radio" name="gender"> Male <input type="radio" name="gender"> Female</div>
        <div><select><option>Philippines</option><option>USA</option></select></div>
      </div>
    </div>
  `,
  lesson7: `
    <h2>1st Quarter – Lesson 7 (Forms: Submit, Reset, File Upload)</h2>
    <p>Forms include buttons and file inputs.</p>
    <h3>Submit Button</h3>
    <p>Sends form data to the server.</p>
    <h3>Reset Button</h3>
    <p>Clears all form inputs.</p>
    <h3>File Upload</h3>
    <p>Allows users to upload files.</p>
    <div class="sample-code-box">
      <h4>Sample Code</h4>
      <pre><code><span class="tag"><form></span>
  <span class="tag"><input</span> <span class="attr">type</span>=<span class="value">"text"</span><span class="tag">></span>
  <span class="tag"><input</span> <span class="attr">type</span>=<span class="value">"file"</span><span class="tag">></span>
  <span class="tag"><input</span> <span class="attr">type</span>=<span class="value">"submit"</span> <span class="attr">value</span>=<span class="value">"Send"</span><span class="tag">></span>
<span class="tag"></form></span></code></pre>
    </div>
    <div class="sample-output-box">
      <h4>Sample Output</h4>
      <div class="output-content">
        <form onsubmit="return false;" style="display:flex; flex-direction:column; gap:10px; max-width:250px;">
          <input type="text" placeholder="Enter name">
          <input type="file">
          <input type="submit" value="Send" style="padding:8px; cursor:pointer;">
        </form>
      </div>
    </div>
  `
};

const quarter2 = {
  lesson8: `
    <h2>2nd Quarter – Lesson 1 (CSS Basics)</h2>
    <p>CSS is the language we use to style a web page.</p>
    <h3>Structure of CSS</h3>
    <ul>
      <li><b>Selector</b> – the HTML element you want to style.</li>
      <li><b>Property</b> – the style attribute you want to modify.</li>
      <li><b>Value</b> – the setting applied to the property.</li>
    </ul>
    <h3>Kinds of CSS</h3>
    <ul>
      <li><b>External</b> – stored in a .css file.</li>
      <li><b>Internal</b> – defined inside <style> in the head.</li>
      <li><b>Inline</b> – defined directly in the element's style attribute.</li>
    </ul>
    <div class="sample-code-box">
      <h4>Sample Code</h4>
      <pre><code><span class="selector">h1</span> {
  <span class="property">color</span>: <span class="value">navy</span>;
  <span class="property">font-size</span>: <span class="value">24px</span>;
}</code></pre>
    </div>
    <div class="sample-output-box">
      <h4>Sample Output</h4>
      <div class="output-content">
        <h1 style="color: navy; font-size: 24px; margin: 0;">Welcome!</h1>
      </div>
    </div>
  `,
  lesson9: `
    <h2>2nd Quarter – Lesson 2 (Style Sheets)</h2>
    <p>Style sheets separate content (HTML) from appearance (CSS).</p>
    <h3>Parts of a CSS Rule</h3>
    <ul>
      <li><b>Selector</b> – identifies the HTML element.</li>
      <li><b>Property</b> – the style attribute to change.</li>
      <li><b>Value</b> – the setting applied.</li>
    </ul>
    <div class="sample-code-box">
      <h4>Sample Code</h4>
      <pre><code><span class="selector">p</span> { <span class="property">color</span>: <span class="value">green</span>; }
<span class="selector">.highlight</span> { <span class="property">background</span>: <span class="value">yellow</span>; }</code></pre>
    </div>
    <div class="sample-output-box">
      <h4>Sample Output</h4>
      <div class="output-content">
        <p style="color: green; margin: 5px 0;">Green paragraph</p>
        <div style="background: yellow; padding: 10px; margin: 5px 0;">Highlighted</div>
      </div>
    </div>
  `,
  lesson10: `
    <h2>2nd Quarter – Lesson 3 (Inline, Internal, External CSS)</h2>
    <p>CSS can be applied in three ways.</p>
    <h3>Display Property</h3>
    <ul>
      <li><b>block</b> – elements stack vertically.</li>
      <li><b>inline</b> – elements flow horizontally.</li>
    </ul>
    <div class="sample-code-box">
      <h4>Sample Code</h4>
      <pre><code><span class="selector">.block</span> { <span class="property">display</span>: <span class="value">block</span>; }
<span class="selector">.inline</span> { <span class="property">display</span>: <span class="value">inline</span>; }</code></pre>
    </div>
    <div class="sample-output-box">
      <h4>Sample Output</h4>
      <div class="output-content">
        <span style="display:block; background:#ddd; padding:5px; margin:5px 0;">Block 1</span>
        <span style="display:block; background:#ddd; padding:5px; margin:5px 0;">Block 2</span>
        <div style="margin-top:10px;">
          <span style="display:inline; background:#ddd; padding:5px;">Inline 1</span>
          <span style="display:inline; background:#ddd; padding:5px;">Inline 2</span>
        </div>
      </div>
    </div>
  `,
  lesson11: `
    <h2>2nd Quarter – Lesson 4 (CSS Rules and Classes)</h2>
    <p>Classes are user-defined selectors applied to specific HTML elements.</p>
    <h3>Classes</h3>
    <ul>
      <li>Defined with a dot (.) followed by the class name.</li>
      <li>Reusable across multiple elements.</li>
    </ul>
    <div class="sample-code-box">
      <h4>Sample Code</h4>
      <pre><code><span class="selector">.highlight</span> {
  <span class="property">background-color</span>: <span class="value">yellow</span>;
}</code></pre>
    </div>
    <div class="sample-output-box">
      <h4>Sample Output</h4>
      <div class="output-content">
        <div style="background-color: yellow; padding: 10px;">Important!</div>
      </div>
    </div>
  `,
  lesson12: `
    <h2>2nd Quarter – Lesson 5 (CSS Selectors)</h2>
    <p>Selectors are used to target HTML elements for styling.</p>
    <h3>Types of Selectors</h3>
    <ul>
      <li><b>Element</b> – targets all instances of a tag.</li>
      <li><b>ID</b> – targets a unique element using #id.</li>
      <li><b>Class</b> – targets elements with a specific class.</li>
    </ul>
    <div class="sample-code-box">
      <h4>Sample Code</h4>
      <pre><code><span class="comment">/* Element */</span>
<span class="selector">p</span> { <span class="property">color</span>: <span class="value">blue</span>; }
<span class="comment">/* ID */</span>
<span class="selector">#header</span> { <span class="property">background</span>: <span class="value">navy</span>; }</code></pre>
    </div>
    <div class="sample-output-box">
      <h4>Sample Output</h4>
      <div class="output-content" style="display:flex; flex-direction:column; gap:10px;">
        <div style="background:navy; color:white; padding:10px;">Header (ID)</div>
        <p style="color:blue; margin:5px 0;">Paragraph (Element)</p>
      </div>
    </div>
  `,
  lesson13: `
    <h2>2nd Quarter – Lesson 6 (CSS Dimensions and Pseudo-Classes)</h2>
    <p>CSS can control dimensions and link behaviors.</p>
    <h3>Dimension Properties</h3>
    <ul>
      <li><b>width</b> – sets element width.</li>
      <li><b>height</b> – sets element height.</li>
    </ul>
    <h3>Pseudo-Classes</h3>
    <ul>
      <li><b>:hover</b> – when mouse hovers.</li>
      <li><b>:active</b> – when clicked.</li>
    </ul>
    <div class="sample-code-box">
      <h4>Sample Code</h4>
      <pre><code><span class="selector">.box</span> {
  <span class="property">width</span>: <span class="value">150px</span>;
  <span class="property">height</span>: <span class="value">80px</span>;
  <span class="property">background</span>: <span class="value">lightblue</span>;
}</code></pre>
    </div>
    <div class="sample-output-box">
      <h4>Sample Output</h4>
      <div class="output-content">
        <div style="width:150px; height:80px; background:lightblue; display:flex; align-items:center; justify-content:center;">
          150x80 Box
        </div>
      </div>
    </div>
  `
};

const quarter3 = {
  lesson14: `
    <h2>3rd Quarter – Lesson 1 (CSS Introduction)</h2>
    <p>CSS (Cascading Style Sheets) is used to style and design webpages.</p>
    <h3>Key Concepts</h3>
    <ul>
      <li>CSS rules consist of a selector and a declaration block.</li>
      <li>Selectors target HTML elements.</li>
    </ul>
    <div class="sample-code-box">
      <h4>Sample Code</h4>
      <pre><code><span class="selector">.card</span> {
  <span class="property">border</span>: <span class="value">1px solid #ccc</span>;
  <span class="property">border-radius</span>: <span class="value">8px</span>;
  <span class="property">padding</span>: <span class="value">20px</span>;
}</code></pre>
    </div>
    <div class="sample-output-box">
      <h4>Sample Output</h4>
      <div class="output-content">
        <div style="border:1px solid #ccc; border-radius:8px; padding:20px;">
          <h3 style="margin-top:0;">Card Title</h3>
          <p style="margin-bottom:0;">Card content</p>
        </div>
      </div>
    </div>
  `,
  lesson15: `
    <h2>3rd Quarter – Lesson 2 (Colors and Fonts)</h2>
    <p>CSS provides properties to control colors, fonts, and text styling.</p>
    <h3>Color Properties</h3>
    <ul>
      <li><b>color</b> – sets text color.</li>
      <li><b>background-color</b> – sets background color.</li>
    </ul>
    <h3>Font Properties</h3>
    <ul>
      <li><b>font-family</b> – specifies typeface.</li>
      <li><b>font-size</b> – sets text size.</li>
    </ul>
    <div class="sample-code-box">
      <h4>Sample Code</h4>
      <pre><code><span class="selector">.styled</span> {
  <span class="property">font-family</span>: <span class="value">Georgia, serif</span>;
  <span class="property">font-size</span>: <span class="value">18px</span>;
  <span class="property">color</span>: <span class="value">#333</span>;
}</code></pre>
    </div>
    <div class="sample-output-box">
      <h4>Sample Output</h4>
      <div class="output-content">
        <p style="font-family:Georgia,serif; font-size:18px; color:#333; margin:0;">
          Styled text example.
        </p>
      </div>
    </div>
  `,
  lesson16: `
    <h2>3rd Quarter – Lesson 3 (Layouts)</h2>
    <p>CSS layouts define how elements are arranged on a webpage.</p>
    <h3>Box Model</h3>
    <ul>
      <li><b>Content</b> – the actual text or image.</li>
      <li><b>Padding</b> – space between content and border.</li>
      <li><b>Border</b> – the edge around the element.</li>
      <li><b>Margin</b> – space outside the border.</li>
    </ul>
    <div class="sample-code-box">
      <h4>Sample Code</h4>
      <pre><code><span class="selector">.box</span> {
  <span class="property">padding</span>: <span class="value">20px</span>;
  <span class="property">border</span>: <span class="value">5px solid navy</span>;
  <span class="property">margin</span>: <span class="value">10px</span>;
}</code></pre>
    </div>
    <div class="sample-output-box">
      <h4>Sample Output</h4>
      <div class="output-content" style="display:flex; justify-content:center;">
        <div style="background:#f0f0f0; padding:10px; margin:10px; display:inline-block;">
          Margin
          <div style="background:navy; padding:5px; display:inline-block;">
            Border
            <div style="background:#e0e0ff; padding:20px; display:inline-block;">Content</div>
          </div>
        </div>
      </div>
    </div>
  `,
  lesson17: `
    <h2>3rd Quarter – Lesson 4 (Responsive Design)</h2>
    <p>Responsive design ensures webpages look good on all devices.</p>
    <h3>Key Techniques</h3>
    <ul>
      <li><b>Media Queries</b> – apply styles based on device width.</li>
      <li><b>Flexible Layouts</b> – use relative units like percentages.</li>
    </ul>
    <div class="sample-code-box">
      <h4>Sample Code</h4>
      <pre><code><span class="comment">/* Mobile */</span>
<span class="selector">.container</span> { <span class="property">width</span>: <span class="value">100%</span>; }

<span class="comment">/* Desktop */</span>
<span class="tag">@media</span> (<span class="attr">min-width</span>: <span class="value">768px</span>) {
  <span class="selector">.container</span> { <span class="property">width</span>: <span class="value">750px</span>; }
}</code></pre>
    </div>
    <div class="sample-output-box">
      <h4>Sample Output</h4>
      <div class="output-content">
        <div style="background:#4a90d9; color:white; padding:10px; text-align:center;">
          Responsive Container
        </div>
        <p style="font-size:14px; margin:10px 0 0 0;">Resize browser to see changes</p>
      </div>
    </div>
  `
};

const quarter4 = {
  lesson18: `
    <h2>4th Quarter – Lesson 1 (JavaScript Basics)</h2>
    <p>JavaScript is a programming language used to add interactivity to web pages.</p>
    <h3>Key Concepts</h3>
    <ul>
      <li>Variables – store data values.</li>
      <li>Data Types – strings, numbers, booleans.</li>
      <li>Functions – reusable blocks of code.</li>
    </ul>
    <div class="sample-code-box">
      <h4>Sample Code</h4>
      <pre><code><span class="keyword">let</span> name = <span class="value">"Mayumi"</span>;
<span class="keyword">function</span> <span class="function">greet</span>(user) {
  <span class="keyword">return</span> <span class="value">"Hello, " </span>+ user;
}
console.log(greet(name));</code></pre>
    </div>
    <div class="sample-output-box">
      <h4>Sample Output</h4>
      <div class="output-content" style="background:#1e1e1e; color:#0f0; font-family:monospace; padding:15px;">
        <div style="margin:5px 0;">> let name = "Mayumi"</div>
        <div style="margin:5px 0; color:#ffeb3b;">> greet(name)</div>
        <div style="margin:5px 0;">"Hello, Mayumi"</div>
      </div>
    </div>
  `,
  lesson19: `
    <h2>4th Quarter – Lesson 2 (Events)</h2>
    <p>Events are actions that happen in the browser, such as clicks.</p>
    <h3>Common Events</h3>
    <ul>
      <li><b>onclick</b> – triggered when clicked.</li>
      <li><b>onmouseover</b> – triggered when mouse hovers.</li>
    </ul>
    <div class="sample-code-box">
      <h4>Sample Code</h4>
      <pre><code><span class="tag"><button</span> <span class="attr">id</span>=<span class="value">"btn"</span><span class="tag">></span>Click<span class="tag"></button></span>
<span class="tag"><script></span>
  document.getElementById(<span class="value">"btn"</span>).onclick = () => {
    alert(<span class="value">"Clicked!"</span>);
  };
<span class="tag"></script></span></code></pre>
    </div>
    <div class="sample-output-box">
      <h4>Sample Output</h4>
      <div class="output-content">
        <button onclick="alert('Clicked!')" style="padding:10px 20px; cursor:pointer;">Click Me!</button>
      </div>
    </div>
  `,
  lesson20: `
    <h2>4th Quarter – Lesson 3 (DOM Manipulation)</h2>
    <p>The DOM represents the structure of a webpage. JavaScript can manipulate it.</p>
    <h3>Common Methods</h3>
    <ul>
      <li><b>getElementById()</b> – selects element by ID.</li>
      <li><b>innerHTML</b> – changes content.</li>
    </ul>
    <div class="sample-code-box">
      <h4>Sample Code</h4>
      <pre><code><span class="keyword">let</span> title = document.getElementById(<span class="value">"title"</span>);
title.innerHTML = <span class="value">"New Title!"</span>;</code></pre>
    </div>
    <div class="sample-output-box">
      <h4>Sample Output</h4>
      <div class="output-content">
        <h2 id="demoTitle">Original Title</h2>
        <button onclick="document.getElementById('demoTitle').innerHTML='New Title!'" style="padding:8px; cursor:pointer;">Change Title</button>
      </div>
    </div>
  `,
  lesson21: `
    <h2>4th Quarter – Lesson 4 (Final Website Project)</h2>
    <p>The final project integrates HTML, CSS, and JavaScript.</p>
    <h3>Project Components</h3>
    <ul>
      <li>HTML – structure and content.</li>
      <li>CSS – styling and layout.</li>
      <li>JavaScript – interactivity.</li>
    </ul>
    <div class="sample-code-box">
      <h4>Sample Code</h4>
      <pre><code><span class="tag"><header><h1></span>My Website<span class="tag"></h1></header></span>
<span class="tag"><nav></span>
  <span class="tag"><a</span> <span class="attr">href</span>=<span class="value">"#"</span><span class="tag">></span>Home<span class="tag"></a></span>
<span class="tag"></nav></span></code></pre>
    </div>
    <div class="sample-output-box">
      <h4>Sample Output</h4>
      <div class="output-content" style="padding:0; overflow:hidden;">
        <div style="background:#333; color:white; padding:20px; text-align:center;">My Website</div>
        <div style="background:#555; padding:10px;">
          <a href="#" style="color:white; margin:10px;">Home</a>
          <a href="#" style="color:white; margin:10px;">About</a>
        </div>
      </div>
    </div>
  `
};

// Merge all quarters into one lessons object
const lessons = {
  ...quarter1,
  ...quarter2,
  ...quarter3,
  ...quarter4
};

// ==================== ICT LESSON CLICK HANDLERS ====================
document.addEventListener('DOMContentLoaded', function() {
  
  // ICT Lesson Cards Click Handler
  const lessonCards = document.querySelectorAll('.lesson-card');
  if (lessonCards) {
    lessonCards.forEach(card => {
      card.addEventListener('click', function() {
        const lessonKey = this.getAttribute('data-lesson');
        const contentBox = document.getElementById('lessonContent');
        if (contentBox && lessons[lessonKey]) {
          contentBox.innerHTML = lessons[lessonKey];
        } else if (contentBox) {
          contentBox.innerHTML = "<p>Lesson content not found.</p>";
        }
      });
    });
  }

  // ==================== AP LESSONS ACCORDION ====================
  const apButtons = document.querySelectorAll('#apLessonsAccordion .accordion-button');
  
  if (apButtons) {
    apButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the target collapse element
        const targetId = this.getAttribute('data-bs-target');
        const targetCollapse = document.querySelector(targetId);
        
        if (targetCollapse) {
          // Toggle the clicked one
          const isShown = targetCollapse.classList.contains('show');
          
          // Close all collapses first
          document.querySelectorAll('#apLessonsAccordion .accordion-collapse').forEach(collapse => {
            collapse.classList.remove('show');
          });
          
          // Open the clicked one if it was closed
          if (!isShown) {
            targetCollapse.classList.add('show');
          }
          
          // Update button states
          apButtons.forEach(btn => {
            btn.classList.add('collapsed');
          });
          
          if (!isShown) {
            this.classList.remove('collapsed');
          }
        }
      });
    });
  }
});

