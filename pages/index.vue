<template>
  <main>
    <h2>MathLive with Vue.js</h2>
    <client-only>
      <mathlive-mathfield
        id="mf"
        ref="mathfield"
        v-model="formula"
        :config="{ smartFence: false }"
        :on-keystroke="displayKeystroke"
        @focus="ping"
      >
        f(x)=
      </mathlive-mathfield>
    </client-only>
    <div>
      <label>Keystroke:&nbsp;</label><span>{{ keystroke }}</span>
    </div>
    <div class="output">LaTeX: {{ formula }}</div>
    <div class="output">Spoken text: {{ asSpokenText() }}</div>
    <button @click="sayIt">Say It</button>
    <button @click="setIt">Set It</button>
  </main>
</template>

<script>
export default {
  data() {
    return {
      formula: "g(x)",
      keystroke: "",
    };
  },
  methods: {
    sayIt: function (event) {
      this.$refs.mathfield.perform(["speak", "all"]);
    },
    setIt: function (event) {
      this.formula = "x=-b\\pm \\frac {\\sqrt{b^2-4ac}}{2a}";
    },
    ping: function () {
      console.log("ping");
    },
    displayKeystroke: function (keystroke, _ev) {
      this.keystroke = keystroke;
      return true;
    },
    asSpokenText: function () {
      return this.$refs.mathfield
        ? this.$refs.mathfield.getValue("spoken")
        : "";
    },
  },
};
</script>

<style>
body {
  font-family: sans-serif;
  color: #444;
  background-color: #f9f9f9;
}
main {
  max-width: 820px;
  margin: auto;
}
.mathfield {
  border: 1px solid #ddd;
  padding: 5px;
  margin: 10px 0 10px 0;
  border-radius: 5px;
  background-color: #fff;
}
.output {
  padding: 5px;
  margin: 20px 0 20px 0;
  border-radius: 5px;
  border: 1px solid #000;

  font-family: "Source Code Pro", Menlo, "Bitstream Vera Sans Mono", Monaco,
    Courier, "Andale Mono", monospace;
  color: #f0c674;
  background: #35434e;
}
label {
  font-weight: bold;
}
button {
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  color: #0066ce;
  fill: #0066ce;
  position: relative;
  height: 36px;
  line-height: 36px;
  margin: 0 18px 0 0;
  min-width: 64px;
  padding: 0 16px;
  display: inline-block;
  overflow: hidden;
  will-change: box-shadow;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),
    background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  user-select: none;

  font-size: 16px;
  letter-spacing: 0.08929em;
  text-transform: uppercase;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
}
button:first-child {
  margin-left: 0;
}
button:hover {
  background-color: rgba(0, 0, 0, 0.08);
}
button:active {
  background-color: white;
}
</style>
