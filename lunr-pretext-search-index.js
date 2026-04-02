var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase-2",
  "level": "1",
  "url": "shorttitlelowercase-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Author M. Chen   "
},
{
  "id": "3-31-26",
  "level": "1",
  "url": "3-31-26.html",
  "type": "Section",
  "number": "1",
  "title": "3-31-26",
  "body": " 3-31-26   Inconsistencies of Riemann Integration  Assume and . is undefined since is discontinuous at every point.  What is the \"average\" value of ? .  Let , let , and let . Then, exists and is equal to 17. Furthermore, pointwise in a \"controlled\" way (since and are bounded).    Motivation for Lebesgue Theory  Riemann integration is \"bad.\" It does not hold in the limit and it does not respect the idea of an \"average\" value. This motivates Lebesgue theory.    Measure  Let be a measure of subsets of . Then, satisfies  Nonnegativity . .  Monotonicity . If , .  Normalization . .  Translation invariance . Assume . Then, .  Countable additivity . Let be pairwise disjoint. Then,      Nonexistence of a Measure  We want a measure to define a reasonable notion of the \"size\" of subsets . However, no such exists! This is mainly due to the fifth property. The solution is to restrict the domain of from certain subsets of .    Lebesgue Outer Measure  Let be an open interval. Define . Given , let be a cover of by open intervals.  By the Second Axiom of Countability, we can cover by countably many intervals. Let .  Then,   Note that is not a measure.    Outer Measure Examples  Let . Then, . Since , we have .  Let be a singleton. Then, so . Since is arbitrary, .  Assume . Let . For , let . Clearly, , so covers by countably many open intervals. Then, Thus, we have .    Countable sets have outer measure 0.    Null Set   is a null set if .  Null sets are always measurable.    Middle Cantor set  The middle Cantor set is a null set but it is uncountable.    Monotonicity of the Outer Measure  Given , we have .   Suppose . Then, let be a cover of by countably many open intervals. It follows that is also a cover of . Since  by the properties of the infimum.    "
},
{
  "id": "ex-riemann-inconsistencies",
  "level": "2",
  "url": "3-31-26.html#ex-riemann-inconsistencies",
  "type": "Example",
  "number": "1.1",
  "title": "Inconsistencies of Riemann Integration.",
  "body": " Inconsistencies of Riemann Integration  Assume and . is undefined since is discontinuous at every point.  What is the \"average\" value of ? .  Let , let , and let . Then, exists and is equal to 17. Furthermore, pointwise in a \"controlled\" way (since and are bounded).  "
},
{
  "id": "clm-lebesgue-motivation",
  "level": "2",
  "url": "3-31-26.html#clm-lebesgue-motivation",
  "type": "Claim",
  "number": "1.2",
  "title": "Motivation for Lebesgue Theory.",
  "body": " Motivation for Lebesgue Theory  Riemann integration is \"bad.\" It does not hold in the limit and it does not respect the idea of an \"average\" value. This motivates Lebesgue theory.  "
},
{
  "id": "def-measure",
  "level": "2",
  "url": "3-31-26.html#def-measure",
  "type": "Definition",
  "number": "1.3",
  "title": "Measure.",
  "body": " Measure  Let be a measure of subsets of . Then, satisfies  Nonnegativity . .  Monotonicity . If , .  Normalization . .  Translation invariance . Assume . Then, .  Countable additivity . Let be pairwise disjoint. Then,    "
},
{
  "id": "rmk-nonexistence-of-measure",
  "level": "2",
  "url": "3-31-26.html#rmk-nonexistence-of-measure",
  "type": "Remark",
  "number": "1.4",
  "title": "Nonexistence of a Measure.",
  "body": " Nonexistence of a Measure  We want a measure to define a reasonable notion of the \"size\" of subsets . However, no such exists! This is mainly due to the fifth property. The solution is to restrict the domain of from certain subsets of .  "
},
{
  "id": "def-outer-measure",
  "level": "2",
  "url": "3-31-26.html#def-outer-measure",
  "type": "Definition",
  "number": "1.5",
  "title": "Lebesgue Outer Measure.",
  "body": " Lebesgue Outer Measure  Let be an open interval. Define . Given , let be a cover of by open intervals.  By the Second Axiom of Countability, we can cover by countably many intervals. Let .  Then,   Note that is not a measure.  "
},
{
  "id": "ex-outer-measure",
  "level": "2",
  "url": "3-31-26.html#ex-outer-measure",
  "type": "Example",
  "number": "1.6",
  "title": "Outer Measure Examples.",
  "body": " Outer Measure Examples  Let . Then, . Since , we have .  Let be a singleton. Then, so . Since is arbitrary, .  Assume . Let . For , let . Clearly, , so covers by countably many open intervals. Then, Thus, we have .  "
},
{
  "id": "cor-countable-sets",
  "level": "2",
  "url": "3-31-26.html#cor-countable-sets",
  "type": "Corollary",
  "number": "1.7",
  "title": "",
  "body": " Countable sets have outer measure 0.  "
},
{
  "id": "def-null-set",
  "level": "2",
  "url": "3-31-26.html#def-null-set",
  "type": "Definition",
  "number": "1.8",
  "title": "Null Set.",
  "body": " Null Set   is a null set if .  Null sets are always measurable.  "
},
{
  "id": "ex-middle-cantor-set",
  "level": "2",
  "url": "3-31-26.html#ex-middle-cantor-set",
  "type": "Example",
  "number": "1.9",
  "title": "Middle <span class=\"process-math\">\\(\\frac{1}{3}\\)<\/span> Cantor set.",
  "body": " Middle Cantor set  The middle Cantor set is a null set but it is uncountable.  "
},
{
  "id": "prop-outer-measure-monotonicity",
  "level": "2",
  "url": "3-31-26.html#prop-outer-measure-monotonicity",
  "type": "Proposition",
  "number": "1.10",
  "title": "Monotonicity of the Outer Measure.",
  "body": " Monotonicity of the Outer Measure  Given , we have .   Suppose . Then, let be a cover of by countably many open intervals. It follows that is also a cover of . Since  by the properties of the infimum.   "
},
{
  "id": "4-1-26",
  "level": "1",
  "url": "4-1-26.html",
  "type": "Section",
  "number": "2",
  "title": "4-1-26",
  "body": " 4-1-26  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
