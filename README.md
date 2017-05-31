# Hello, World!

- A-nivå
- [GitBook](https://coursepress.gitbooks.io/1dv021/content/ovningsuppgifter/del1/hello-world/)

> __VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbooks.io/1dv021/content/guider/att-komma-igang-med-en-ovningsuppgift/) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem övningsuppgiftens repo och lägg till en .gitignore-fil. Öppna filen `hello.js` och komplettera funktionen `sayHello`, så att funktionen returnerar strängen `Hello, World!`.

## ...och glöm inte!

### Spara på GitHub

Gjort ändringar i koden och sparat dem på GitHub? Kanske behöver du skapa en .gitignore-fil med inställningar för Node.js, utvecklingsverktyg och operativsystem? Glöm inte att följa guiden [Arbetsgång med en övningsuppgift](https://coursepress.gitbooks.io/1dv021/content/guider/arbetsgang-med-en-ovningsuppgift/). Använd `git commit` och `git push` regelbundet!

### Kör applikation och test

Innan du kan köra applikationen, eller dess test, måste du exekvera kommandot `npm install` i terminalfönstret för att installera de paket applikationen är beroende av.

<figure>
<pre class="command-line">
$ npm install
<span class="output">...
      +-- find-up@2.1.0
      | `-- locate-path@2.0.0
      | +-- p-locate@2.0.0
      | | `-- p-limit@1.1.0
      | `-- path-exists@3.0.0
      `-- load-json-file@2.0.0
      +-- graceful-fs@4.1.11 deduped
      +-- parse-json@2.2.0
      | `-- error-ex@1.3.1
      | `-- is-arrayish@0.2.1
      +-- pify@2.3.0
      `-- strip-bom@3.0.0 deduped</span>
</pre>
<figcaption>Exempelutskrift av kommandot `npm install`.</figcaption>
</figure>

För att köra applikationen skriver du kommandot `npm start` i terminalfönstret.

<figure>
<pre class="command-line">
$ npm start
<span class="output">
&gt; exercise-hello-world@1.1.0 start <em>example-path</em>/1dv021/<em>example-username</em>-exercises/hello-world
&gt; node app.js
 
Hello, World!</span></pre>
<figcaption>Exempelutskrift av kommandot `npm start`.</figcaption>
</figure>

För att köra applikationens test skriver du kommandot `npm test` i terminalfönstret.

<figure>
<pre class="command-line">
$ npm test
<span class="output">
&gt; exercise-hello-world@1.1.0 start <em>example-path</em>/1dv021/<em>example-username</em>-exercises/hello-world
&gt; node app.js

Test the function sayHello
√ sayHello(); should return 'Hello, World!'

1 passing (8ms)</span>
</pre>
<figcaption>Exempelutskrift av kommandot `npm test`.</figcaption>
</figure>

Skulle du till exempel indenterat koden fel och råkat skriva ett semikolon på fel plats kan du få följande utskrift.

<figure>
<pre class="command-line">
$ npm test
<span class="output">
&gt; exercise-hello-world@1.1.0 start <em>example-path</em>/1dv021/<em>example-username</em>-exercises/hello-world
&gt; node app.js

  standard: Use JavaScript Standard Style (https://standardjs.com)
  standard: Run `standard --fix` to automatically fix some problems.

<em>example-path</em>/1dv021/<em>example-username</em>-exercises/hello-world/src/hello.js
17:5 error Expected indentation of 2 spaces but found 4
17:27 error Extra semicolon

✖ 2 problems
npm ERR! Test failed. See above for more details.</span>
</pre>
<figcaption>Exempelutskrift av kommandot `npm test` då koden innehåller fel enligt kodstandarden.</figcaption>
</figure>

Skulle du råkat returnera en felaktig sträng kan du få följande utskrift.

<figure>
<pre class="command-line">
$ npm test
<span class="output">
&gt; exercise-hello-world@1.1.0 start <em>example-path</em>/1dv021/<em>example-username</em>-exercises/hello-world
&gt; node app.js

  Test the function sayHello
    1) should return 'Hello, World!'

  0 passing (9ms)
  1 failing

  1) Test the function sayHello should return 'Hello, World!':

      AssertionError: expected 'Hi, there!' to deeply equal 'Hello, World!'
      + expected - actual

      -Hi, there!
      +Hello, World!

      at Context.it (test\hello.test.js:15:33)

npm ERR! Test failed. See above for more details.</span>
</pre>
<figcaption>Exempelutskrift av kommandot `npm test` då fel sträng returneras av funktionen `sayHello`.</figcaption>
</figure>

## Tips

Genom att köra testet som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testet...).

Funktioner, metoder, etc. som _kan_ komma till användning beroende hur du väljer att lösa uppgiften:

- [funktionsuttryck](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
- [return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
- [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Lösningsförslag

- [https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/hello-world](https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/hello-world)
