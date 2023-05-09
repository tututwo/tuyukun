import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { B as BlogHeading } from "./blogHeading.js";
const metadata = {
  "title": "Svelte Data Viz: Part 0 - Component Initialization and Updates",
  "date": "2021-12-07",
  "updated": "2022-09-06",
  "categories": ["svelte", "javascript"],
  "coverImage": "sveltekit-learn.png",
  "coverWidth": 16,
  "coverHeight": 9,
  "excerpt": "Learn the fundamentals of SvelteKit by building a statically generated blog from scratch, with Markdown support, Sass, an API, and an RSS feed.",
  "titleSection": ["The Early Stage", "A Bit Later: Mounting", "Svelte's Updating Pattern"]
};
const Svelte_component_init = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>I often see</p>
<blockquote><p>this must be called during component initialisation</p></blockquote>
<p>in Svelte’s docs, but what exactly is <strong>Component Initialization</strong>???</p>
<p>After inquiring some smart people on the Internet, I would like to jog down some notes about what’s included in <strong>Component Initialization</strong> in case of forgetting it again, like I always do.</p>
${validate_component(BlogHeading, "BlogHeading").$$render($$result, { heading: "The Early Stage" }, {}, {})}
<p>TL DR:</p>
<blockquote><h5 id="component-initialization-includes-everything-you-write-in-svelte-but-callbacks"><a aria-hidden="true" tabindex="-1" href="#component-initialization-includes-everything-you-write-in-svelte-but-callbacks"><span class="icon icon-link"></span></a>Component initialization includes everything you write in .svelte, but callbacks.</h5></blockquote>
<p>It includes those imports:</p>
<pre class="language-svelte"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> abc <span class="token keyword">from</span> <span class="token string">"./abc.js"</span>

  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"svelte"</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Sync tasks:</p>
<pre class="language-svelte"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">2</span>

  <span class="token keyword">function</span> <span class="token function">thisGetsCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
  <span class="token function">thisGetsCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">thisNotCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
  <span class="token comment">// because I didn't invoke it: thisNotCalled()</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Microtasks that are schedule to run.</p>
<pre class="language-svelte"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">function</span> <span class="token function">thisGetsCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
    <span class="token function">thisAlsoCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
    <span class="token function">thisAlsoCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>
  <span class="token function">thisGetsCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Macrotasks like <code>setTimeOut</code> runs during <strong>Component Initialization</strong> but not whatever is scheduled to run(aka, callbacks) inside it for whatever inside it is considered as <em>callbacks</em></p>
<p>Lihau has this wonderful <a href="https://twitter.com/lihautan/status/1396111979799093254" rel="nofollow">thread</a> about Component Initialization, and he introduced this trick: <em>In <code>&lt;script&gt;</code>, put everything inside ONE function. Whatever runs at the first time runs during <strong>Component Initialization</strong>.</em></p>
${validate_component(BlogHeading, "BlogHeading").$$render($$result, { heading: "A Bit Later: Mounting" }, {}, {})}
<p>Basically when <code>&lt;scirpt&gt;</code> is run. Elements defined in <em>.svelte</em>, the component, is added to the DOM. This step is called <strong>component mouting</strong>.</p>
<h2 id="the-end-stuff-inside-onmount"><a aria-hidden="true" tabindex="-1" href="#the-end-stuff-inside-onmount"><span class="icon icon-link"></span></a>The End: Stuff inside onMount()</h2>
<p>If I defined <code>onMount</code> earlier, I know <code>onMount</code> is run, but not its callback. Guess what, right now is the time!</p>
<p>Stuff inside <code>onMount</code> looks around see what’s available, then RUN. In this <a href="https://stackoverflow.com/questions/61577631/sveltejs-components-with-or-without-onmount" rel="nofollow">stackoverflow</a> answer, it points out the difference between using <code>onMount</code> and <code>setTimeOut</code> is about what’s available.</p>
<h6 id="a-bit-about-lifecycle-functions-onmount"><a aria-hidden="true" tabindex="-1" href="#a-bit-about-lifecycle-functions-onmount"><span class="icon icon-link"></span></a>A bit about lifecycle functions: <code>onMount()</code></h6>
<blockquote><p>Lifecycle functions like <code>onMount</code> to me are more like a timer. It marks some point on the timeline of Svelte’s working progress. For example, <code>onMount</code> marks the point right after when the component is mounted. It is a relative time point: if I got a lot of elements to add and large data to load, then statements inside <code>onMount</code> would not for a while. It just waits until things all get loaded.</p>
<p><code>setTimeOut(()=&gt;{}, 1000)</code> then marks an absolute point of the timeline: 1 second. Regardless of loading data or mouting component, its callback just got push to the task queue to run after 1 second.</p></blockquote>
${validate_component(BlogHeading, "BlogHeading").$$render($$result, { heading: "Svelte's Updating Pattern" }, {}, {})}
While making data visualization using Svelte, I often want to add animation or transition in Svelte. Sometimes I don&#39;t get to see any animation playing. Why? It&#39;s all due to Svelte&#39;s special updating pattern.
<p>If I want to change/update DOM elements via clicking a button:</p>
<iframe src="https://svelte.dev/repl/7145bafa507a4bec8d8a9adb4a3cd9b5?version=3.44.2" width="100%" height="600" title="Svelte temperature each demo"></iframe>
<p><code>foo</code> and <code>bar</code> are changed to 2 and 5 respectively, and they are according to <code>console.log()</code>. However, when I try to log the DOM element’s content, I still see the old <code>1+2=3</code>. WHY???</p>

${validate_component(BlogHeading, "BlogHeading").$$render($$result, { heading: "Svelte's Updating Pattern" }, {}, {})}
To put it in my words in this case:
<p>When I change those variables in <code>&lt;script&gt;</code>, they are changed in <code>&lt;script&gt;</code>. Once Svelte is about to compile the code to <code>.js</code> to update the DOM, this very action is batched!</p>
<p>Svelte is kind of saying: <em>Hey, you sync task go first, I will keep collecting those pending changes to be made in the DOM</em>. Once those tasks are done, aka before the next micro task, DOM then gets updated.</p>
<h6 id="a-bit-about-beforeupdate"><a aria-hidden="true" tabindex="-1" href="#a-bit-about-beforeupdate"><span class="icon icon-link"></span></a>A bit about <code>beforeUpdate()</code></h6>
<blockquote><p><em>Watch out: lifecycle function alter:<code>beforeUpdate()</code>. Like <code>onMount</code> and other lifecycle functions, it marks a point on Svelte’s working timeline. This point happen to be right before DOM gets updated. Statements inside <code>beforeUpdate()</code> will run right before those pending state changes are about to be exectioned.</em></p></blockquote>
<p>Consequently, <strong><code>console.log(DOMElement)</code> happens before DOM is actually changed!</strong> Because the subsequent changes in DOM are artifically halted by Svelte.</p>
<p>My take home message here is : maybe be careful when code that can change DOM is followed by code to implement once DOM is changed. The later code probably won’t run successfully.</p>
<p><strong>BUT</strong>!</p>
<p><code>tick()</code> can give you some help:</p>
<pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token function">changeTheDOM</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token keyword">await</span> <span class="token function">tick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token function">doThisOnceDOMChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p><code>tick()</code> basically cashed in those <em>pending state changes</em>: Don’t wait. Just do it now!</p>
<p>I made an outline of Svelte’s component initialization and updating process, and I hope it’s useful.</p>
`;
});
export {
  Svelte_component_init as default,
  metadata
};
