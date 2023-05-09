import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Svelte Data Viz: Part 1 - How to import Data in Svelte",
  "date": "2021-12-27",
  "updated": "2022-09-06",
  "categories": ["svelte", "javascript", "tutorial"],
  "coverImage": "sveltekit-learn.png",
  "coverWidth": 16,
  "coverHeight": 9,
  "excerpt": "Learn the fundamentals of SvelteKit by building a statically generated blog from scratch, with Markdown support, Sass, an API, and an RSS feed.",
  "titleSection": [
    "Easy Way: import from '../path'",
    "Retro Way: asynchronous d3",
    "Svelte Way: `onMount`"
  ]
};
const Svelte_import_data = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Today I will introduce you three ways to import data in Svelte and talk about how I understand Svelte’s <code>onMount</code></p>
<blockquote><p><strong>Note</strong>: This tutorial uses <a href="https://github.com/sveltejs/template" rel="nofollow">Svelte’s offical template</a> on Github</p></blockquote>
<h2 id="easy-way-import-from-path"><a aria-hidden="true" tabindex="-1" href="#easy-way-import-from-path"><span class="icon icon-link"></span></a>Easy Way: import from path</h2>
<p>Let’s say you are importing data in <code>App.svelte</code>.</p>
<ol><li><p>Code below is all you need</p>
<pre class="language-javascript"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token keyword">import</span> data <span class="token keyword">from</span> <span class="token string">"./data.csv"</span><span class="token punctuation">;</span> <span class="token comment">// this could be from any path of the desired data file</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p><strong>BUT</strong> If you are running it locally with <em>Node.js</em>, Svelte doesn’t just happily handle csv for you.</p>
<p>It needs a plugin, called <a href="https://github.com/rollup/plugins/tree/master/packages/dsv" rel="nofollow"><strong>@rollup/plugin-dsv</strong></a></p></li>
<li><p>Go to the current project folder(not <code>/src</code>, not <code>/public</code>, just the primary folder of your whole svelte project where you store everything) and type the command below in the terminal</p>
<pre class="language-javascript"><!-- HTML_TAG_START -->${`<code class="language-javascript">npm install @rollup<span class="token operator">/</span>plugin<span class="token operator">-</span>dsv <span class="token operator">--</span>save<span class="token operator">-</span>dev</code>`}<!-- HTML_TAG_END --></pre>
<p>Now, Svelte gets its plugin. The last thing you need to do is to make sure Svelte uses it.</p>
<p>Inside <em>rollup.config.js</em>, there is a <code>plugins:[]</code> property.</p></li>
<li><p><strong>Add <code>dsv()</code> to to it.</strong></p></li></ol>

<p><strong><em>Tips:</em></strong></p>
<p>When you use this method to import data:</p>
<ul><li>You need to have the data locally</li>
<li>The data is <strong>often</strong> saved in <code>src</code> folder</li></ul>
<h2 id="retro-way-asynchronous-d3"><a aria-hidden="true" tabindex="-1" href="#retro-way-asynchronous-d3"><span class="icon icon-link"></span></a>Retro Way: asynchronous d3</h2>
<p>First of all, import <em>d3</em> in Svelte. (Do this however you want, I used <code>npm install d3</code>)</p>
<p>Then you can get the good-old <code>d3.csv</code> (use <code>d3.json</code> or <code>d3.tsv</code> in terms of your file types) from <em>d3.js</em>.</p>
<pre class="language-javascript"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> csv <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"d3"</span><span class="token punctuation">;</span> <span class="token comment">// I just want the csv function</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Things may become familiar now: <code>csv</code> returns a promise, when it’s fulfilled, <code>then</code> you save and process the data however you want.</p>
<p>This is just a typical asynchronous d3 code written in Javascript.</p>
<pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token comment">&lt;!-- Async.svelte --></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> csv <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"d3"</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> dataset <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token function">csv</span><span class="token punctuation">(</span>
    <span class="token string">"https://raw.githubusercontent.com/tututwo/svelte-tutorial-heatmap/main/src/data/data.csv"</span>
  <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>dataset <span class="token operator">=</span> data<span class="token punctuation">)</span>
    <span class="token comment">// feel free to do .map().filter()</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token literal-property property">$</span><span class="token operator">:</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dataset<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p><strong><em>Tips:</em></strong></p>
<p>When you use this method to import data:</p>
<ul><li>Data often stays in <code>public</code> folder</li>
<li>Data path can even be an URL</li>
<li>You can mutate the data inside of .then()</li></ul>
<h2 id="crash-course-import-local-data-files-in-svelte"><a aria-hidden="true" tabindex="-1" href="#crash-course-import-local-data-files-in-svelte"><span class="icon icon-link"></span></a>Crash Course: import local data files in Svelte</h2>
<p>You might wanna ask the difference between two approaches above. (Well, I did). Probably, where should you save the data? <code>src</code>? or <code>public</code> folder? Let’s talk about it briefly.</p>
<h4 id="import--from-src"><a aria-hidden="true" tabindex="-1" href="#import--from-src"><span class="icon icon-link"></span></a><code>import ... from &quot;src/...&quot;</code></h4>
<p>When you write <code>import data.csv from &quot;src/data&quot;</code> in a basic <code>.js</code> file, this is not a typical js syntax, aka, it won’t work because:</p>
<ol><li><code>import</code> can only import <code>.js</code> file</li>
<li><code>import</code> must be bundled by bundlers like <em>webpack</em> or <em>rollup</em>.</li></ol>
<p>However, thanks to the <em>rollup/plugin-dsv</em>, we can still import csv files Svelte, but the impoted <code>.csv</code> will still be bundled/compiled into a <code>.js</code> file. <strong>Consequently, if you are using <code>import ... from ...</code>, it really doesn’t matter where the imported <code>.csv</code> file is.</strong> (Try to put the data on Desktop, wink)</p>

<pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">import</span> data <span class="token keyword">from</span> <span class="token string">"./data/data.csv"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> metrics <span class="token keyword">from</span> <span class="token string">"./data/metrics"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> d <span class="token keyword">from</span> <span class="token string">"../public/data/data.csv"</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<h4 id="public-folder"><a aria-hidden="true" tabindex="-1" href="#public-folder"><span class="icon icon-link"></span></a><code>public</code> folder</h4>
<p>Once the Svelte project gets deployed, the <code>build</code> script makes everything in <code>public</code> folder available on the web. As a result, you can get the data in <code>public</code> folder via <strong>http request</strong>too.</p>
<p>The interesting thing is that <code>d3.csv</code> happens to be able to do so. <code>d3.csv</code> does not run on bundler like <code>import from</code> command, but on <em>JavaScript Runtime Environment</em>. Therefore, it is really up to you.</p>
<p>In summary, I say my habit is that:</p>
<ul><li><p>When I save the data in <code>src</code> folder, I use <code>import ... from ...</code>.</p></li>
<li><p>When data is in <code>public</code> folder or somewhere else on the internet, I’ll try <code>d3.csv</code>.</p></li></ul>
<h2 id="svelte-way-onmount"><a aria-hidden="true" tabindex="-1" href="#svelte-way-onmount"><span class="icon icon-link"></span></a>Svelte Way: <code>onMount</code></h2>
<p>What if your data is on a server and it takes some time to load it, <strong>but</strong> you want to do it in <em>Svelte’s Way</em>. Well, we still need some help from our old friend, <code>d3.csv</code></p>
<ol><li><p>Import <code>d3.csv</code></p>
<pre class="language-javascript"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> csv <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"d3"</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>Import data asynchronously but don’t call it.</p>
<pre class="language-javascript"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token keyword">let</span> dataset <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  dataset <span class="token operator">=</span> <span class="token keyword">await</span> d3<span class="token punctuation">.</span><span class="token function">csv</span><span class="token punctuation">(</span><span class="token string">"link_or_path_of_dataset"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>When do you call it?</p>
<p>Passing the asynchronous function as a callback to <code>onMount</code>. It tells Svelte when the callback is executed</p>
<pre class="language-javascript"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"svelte"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> dataset <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token function">onMount</span><span class="token punctuation">(</span>
	<span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
		dataset <span class="token operator">=</span> <span class="token keyword">await</span> d3<span class="token punctuation">.</span><span class="token function">csv</span><span class="token punctuation">(</span><span class="token string">'link_or_path_of_dataset'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>  <span class="token comment">// you can use fetch() here, totally up to you</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">)</span>

<span class="token literal-property property">$</span><span class="token operator">:</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dataset<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Once you put the <code>async</code> function above inside <code>onMount</code>, you can access the data even at the top level too.</p>
<p>The chunk above is basically saying:</p>
<p><em>“Ok, everyone outside of me(<code>onMount</code>). Keep going. I will catch up with you once you are all ‘mounted’ ”</em></p>
<blockquote><p>To learn more about <em>mount</em>, I have written another blog about component initialization and lifecycle of Svelte <a href="https://tuyukun.com/post/svelte_componentinit/" rel="nofollow">here</a>.</p></blockquote>
<p>In short, when other code in <code>&lt;script&gt;</code> finishes running and the markup(html) you wrote in <code>.svelte</code> are finally added to the DOM, <em>callbacks inside <code>onMount</code> finally get called.</em> With elements in the DOM, <code>onMount</code>’s callback will not only change <code>dataset</code> you defined earlier (as you can see in <code>console.log</code>) but also, with <strong>Svelte’s reactivity</strong>, happliy update other variables/DOM elements that depends on <code>dataset</code>.</p>
<p>In this very specific case, <code>onMount</code> will return you a fulfilled promise (because <code>async</code> function returns a promise).</p>
<iframe src="https://svelte.dev/repl/d41603e8668945dba79459575590261e?version=3.47.0" width="100%" height="600" title="Svelte temperature each demo"></iframe></li></ol>
<p><strong><em>Tips</em></strong>:</p>
<ul><li>Do not define the <code>dataset</code> variable inside onMount. It would be <strong>scoped</strong> in <code>onMount</code> so that you can’t refer to it outside of <code>onMount</code> function.</li>
<li>Whatever is inside of <code>onMount</code> will be run as soon as the rest of your code is run, aka ”<em>the component is first rendered to the DOM</em>”, aka <em>after elements are ”<strong>mounted</strong>”</em>.(Or I think of it as: the code your wrote in your <code>.svlete</code> completes running for the first time.)</li></ul>
<iframe src="https://svelte.dev/repl/51307d85d4c544f5a685e4514713d49c?version=3.47.0" width="100%" height="600" title="Svelte temperature each demo"></iframe>
<h4 id="useful-resources"><a aria-hidden="true" tabindex="-1" href="#useful-resources"><span class="icon icon-link"></span></a>Useful Resources</h4>
<ul><li>There is actually one article talking about <a href="https://www.sitepoint.com/svelte-fetch-data/" rel="nofollow">how to fetch data with other APIs in Svelte</a></li>
<li>All kinds of plugins for rollup, such as <a href="https://github.com/rollup/plugins/tree/master/packages/dsv" rel="nofollow">dsv</a></li>
<li><a href="https://stackoverflow.com/questions/61577631/sveltejs-components-with-or-without-onmount" rel="nofollow">stackoverflow onMount</a></li>
<li>Svelte Discord (People there are so nice. I personally believe all of my questions about Svelte can be answered there)</li>
<li><a href="https://svelte.dev/tutorial/onmount" rel="nofollow">Svelte’s own onMount Tutorial</a></li></ul>`;
});
export {
  Svelte_import_data as default,
  metadata
};
