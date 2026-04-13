var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "landing-2",
  "level": "1",
  "url": "landing-2.html",
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
  "body": " 3-31-26  Motivation for Lebesgue Theory, Introduction to the Outer Measure.   Inconsistencies of Riemann Integration  Assume and . is undefined since is discontinuous at every point.  What is the \"average\" value of ? .  Let , let , and let . Then, exists and is equal to 17. Furthermore, pointwise in a \"controlled\" way (since and are bounded).    Motivation for Lebesgue Theory  Riemann integration is \"bad.\" It does not hold in the limit and it does not respect the idea of an \"average\" value. This motivates Lebesgue theory.    Measure  Let be a measure of subsets of . Then, satisfies  Nonnegativity . .  Monotonicity . If , .  Normalization . .  Translation invariance . Assume . Then, .  Countable additivity . Let be pairwise disjoint. Then,      Nonexistence of a Measure  We want a measure to define a reasonable notion of the \"size\" of subsets . However, no such exists! This is mainly due to the fifth property. The solution is to restrict the domain of from certain subsets of .    Lebesgue Outer Measure  Let be an open interval. Define . Given , let be a cover of by open intervals.  By the Second Axiom of Countability, we can cover by countably many intervals. Let .  Then,   Note that is not a measure.    Outer Measure Examples  Let . Then, . Since , we have .  Let be a singleton. Then, so . Since is arbitrary, .  Assume . Let . For , let . Clearly, , so covers by countably many open intervals. Then, Thus, we have .    Countable sets have outer measure .    Null Set   is a null set if .  Null sets are always measurable.    Middle Cantor set  The middle Cantor set is a null set but it is uncountable.    Monotonicity of the Outer Measure  Given , we have .   Suppose . Then, let be a cover of by countably many open intervals. It follows that is also a cover of . Since  by the properties of the infimum.    "
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
  "body": " Countable sets have outer measure .  "
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
  "body": " 4-1-26  Properties of the Outer Measure, Introduction to -Algebras.   Normalization of Outer Measure on Compact Intervals  Let be a compact interval. Then, .   Firstly, . so . Thus,   We now show that . Let be a cover of by countably many open intervals. By compactness, there is a finite such that .  Since is a cover of , there exists with . If , then Otherwise, and since , we have . Then, pick such that . Again, either or .  Suppose we have such that  .  for , i.e., .    If , then there is , and . Since is finite, this process must terminate and we can assume that . Then   Since , it follows that . Consequently, for every , . As , it follows that .  We have shown that and . Therefore, , as required.     Normalization of Outer Measure on Bounded Intervals  Let be a bounded interval with endpoints . Then, .    . By monotonicity, . It follows that .     Outer Measure on Unbounded Intervals  If is an unbounded interval, then .   Without loss of generality, let . . As we have , as required.     Translation Invariance  Let and for write . Then, .   It is true that if and only if . Since , it follows that and .     Subadditivity of Outer Measure  Let . Then, .   For each , pick with . Such a exists since is an infimum.  Since is a cover of , it follows that is a cover of by open intervals. Therefore, As , it follows that , as required.     Sets Without Outer Measure  There exists such that . Non-measurable sets exist and might fail to be finitely additive on disjoint sets.    Outer Regularity of Outer Measure  Let with . Then, there is an open set with and .   Let . Take some with . Set . Then, and      -Algebras  A subset is a -algebra if  .  is closed under complements, i.e., if , then .  is closed under countable unions. If , then .    Note that means \"countable\" and denotes the power set of .    Intersections and -Algebras  If is a -algebra on , then for any , . This follows from De Morgan's Laws as .   "
},
{
  "id": "prop-outer-measure-normalized-on-compact-intervals",
  "level": "2",
  "url": "4-1-26.html#prop-outer-measure-normalized-on-compact-intervals",
  "type": "Proposition",
  "number": "2.1",
  "title": "Normalization of Outer Measure on Compact Intervals.",
  "body": " Normalization of Outer Measure on Compact Intervals  Let be a compact interval. Then, .   Firstly, . so . Thus,   We now show that . Let be a cover of by countably many open intervals. By compactness, there is a finite such that .  Since is a cover of , there exists with . If , then Otherwise, and since , we have . Then, pick such that . Again, either or .  Suppose we have such that  .  for , i.e., .    If , then there is , and . Since is finite, this process must terminate and we can assume that . Then   Since , it follows that . Consequently, for every , . As , it follows that .  We have shown that and . Therefore, , as required.   "
},
{
  "id": "prop-outer-measure-normalized-on-bounded-intervals",
  "level": "2",
  "url": "4-1-26.html#prop-outer-measure-normalized-on-bounded-intervals",
  "type": "Proposition",
  "number": "2.2",
  "title": "Normalization of Outer Measure on Bounded Intervals.",
  "body": " Normalization of Outer Measure on Bounded Intervals  Let be a bounded interval with endpoints . Then, .    . By monotonicity, . It follows that .   "
},
{
  "id": "prop-outer-measure-on-unbounded-intervals",
  "level": "2",
  "url": "4-1-26.html#prop-outer-measure-on-unbounded-intervals",
  "type": "Proposition",
  "number": "2.3",
  "title": "Outer Measure on Unbounded Intervals.",
  "body": " Outer Measure on Unbounded Intervals  If is an unbounded interval, then .   Without loss of generality, let . . As we have , as required.   "
},
{
  "id": "4-1-26-6",
  "level": "2",
  "url": "4-1-26.html#4-1-26-6",
  "type": "Proposition",
  "number": "2.4",
  "title": "Translation Invariance.",
  "body": " Translation Invariance  Let and for write . Then, .   It is true that if and only if . Since , it follows that and .   "
},
{
  "id": "prop-outer-measure-countable-subadditivity",
  "level": "2",
  "url": "4-1-26.html#prop-outer-measure-countable-subadditivity",
  "type": "Proposition",
  "number": "2.5",
  "title": "Subadditivity of Outer Measure.",
  "body": " Subadditivity of Outer Measure  Let . Then, .   For each , pick with . Such a exists since is an infimum.  Since is a cover of , it follows that is a cover of by open intervals. Therefore, As , it follows that , as required.   "
},
{
  "id": "rmk-sets-without-outer-measure",
  "level": "2",
  "url": "4-1-26.html#rmk-sets-without-outer-measure",
  "type": "Remark",
  "number": "2.6",
  "title": "Sets Without Outer Measure.",
  "body": " Sets Without Outer Measure  There exists such that . Non-measurable sets exist and might fail to be finitely additive on disjoint sets.  "
},
{
  "id": "prop-outer-measure-outer-regularity",
  "level": "2",
  "url": "4-1-26.html#prop-outer-measure-outer-regularity",
  "type": "Proposition",
  "number": "2.7",
  "title": "Outer Regularity of Outer Measure.",
  "body": " Outer Regularity of Outer Measure  Let with . Then, there is an open set with and .   Let . Take some with . Set . Then, and    "
},
{
  "id": "def-sigma-algebras",
  "level": "2",
  "url": "4-1-26.html#def-sigma-algebras",
  "type": "Definition",
  "number": "2.8",
  "title": "<span class=\"process-math\">\\(\\sigma\\)<\/span>-Algebras.",
  "body": " -Algebras  A subset is a -algebra if  .  is closed under complements, i.e., if , then .  is closed under countable unions. If , then .    Note that means \"countable\" and denotes the power set of .  "
},
{
  "id": "rmk-sigma-algebras-intersections",
  "level": "2",
  "url": "4-1-26.html#rmk-sigma-algebras-intersections",
  "type": "Remark",
  "number": "2.9",
  "title": "Intersections and <span class=\"process-math\">\\(\\sigma\\)<\/span>-Algebras.",
  "body": " Intersections and -Algebras  If is a -algebra on , then for any , . This follows from De Morgan's Laws as .  "
},
{
  "id": "4-3-26",
  "level": "1",
  "url": "4-3-26.html",
  "type": "Section",
  "number": "3",
  "title": "4-3-26",
  "body": " 4-3-26  Generated -Algebras, Borel Sets, Carathéodory Criterion.   Let such that .  Since is not closed under countable unions (or even finite unions) is not a -algebra.    -Algebra Generated by  Let be a collection of subsets of . Let be the smallest -algebra on containing .  Call the -algebra generated by .    Borel -Algebra  Let . Then, is called the Borel -algebra .  The elements of are called Borel sets .    Let be a collection of closed sets. . Consequently, is not closed under countable unions and is not a -algebra.    Let . Let . Then, .    Borel -Algebra of Lebesgue Measurable Sets  Let be the -algebra on generated by Borel sets and null sets.  Later we will see that is the -algebra of Lebesgue measurable sets.  We sometimes call the completion of .    Carathéodory Criterion  We say is in if for any subset  .  is equivalent to and is also the -algebra of Lebesgue measurable sets.    We always have by countable subadditivity. Consequently, to show that , it suffices to prove .  We will also see that Borel sets and null sets satisfy the Carathéodory Criterion.    Measurability of Null Sets  Null sets are measurable.   Let be a null set. Take any . Then, .     Satifies First Two Properties of -Algebras  if and only if .  so .  Thus, satisfies the first two properties of -algebras outlined in . It remains to show that is closed under countable unions.    Finite Unions of  Let . Then, .   Note that . Additionally, where the first equality holds from and the second from .  Consequently, . Thus, , as required.     Disjoint Elements of  Let be disjoint. Then, for any , .   .    Finite Additivity of Disjoint Elements of  Let . If , , we have from and . Thus, for measurable sets that are disjoint, we have finite additivity.    Closedness of Under Countable Unions  Let . Then, .   Let , let for , and assume .  Firstly, . Then, as well. Finally, if , so the set of is pairwise disjoint.  Given and , where the final inequality holds from .  Since this holds for all , it follows that so is measurable.  As , it follows that , as required.     is a -Algebra  From and , is a -algebra.   "
},
{
  "id": "4-3-26-3",
  "level": "2",
  "url": "4-3-26.html#4-3-26-3",
  "type": "Example",
  "number": "3.1",
  "title": "",
  "body": " Let such that .  Since is not closed under countable unions (or even finite unions) is not a -algebra.  "
},
{
  "id": "def-gen-sigma-alg",
  "level": "2",
  "url": "4-3-26.html#def-gen-sigma-alg",
  "type": "Definition",
  "number": "3.2",
  "title": "<span class=\"process-math\">\\(\\sigma\\)<\/span>-Algebra Generated by <span class=\"process-math\">\\(\\mathcal F\\)<\/span>.",
  "body": " -Algebra Generated by  Let be a collection of subsets of . Let be the smallest -algebra on containing .  Call the -algebra generated by .  "
},
{
  "id": "def-borel",
  "level": "2",
  "url": "4-3-26.html#def-borel",
  "type": "Definition",
  "number": "3.3",
  "title": "Borel <span class=\"process-math\">\\(\\sigma\\)<\/span>-Algebra.",
  "body": " Borel -Algebra  Let . Then, is called the Borel -algebra .  The elements of are called Borel sets .  "
},
{
  "id": "4-3-26-6",
  "level": "2",
  "url": "4-3-26.html#4-3-26-6",
  "type": "Example",
  "number": "3.4",
  "title": "",
  "body": " Let be a collection of closed sets. . Consequently, is not closed under countable unions and is not a -algebra.  "
},
{
  "id": "4-3-26-7",
  "level": "2",
  "url": "4-3-26.html#4-3-26-7",
  "type": "Example",
  "number": "3.5",
  "title": "",
  "body": " Let . Let . Then, .  "
},
{
  "id": "def-borel-sig-alg-msr-sets",
  "level": "2",
  "url": "4-3-26.html#def-borel-sig-alg-msr-sets",
  "type": "Definition",
  "number": "3.6",
  "title": "Borel <span class=\"process-math\">\\(\\sigma\\)<\/span>-Algebra of Lebesgue Measurable Sets.",
  "body": " Borel -Algebra of Lebesgue Measurable Sets  Let be the -algebra on generated by Borel sets and null sets.  Later we will see that is the -algebra of Lebesgue measurable sets.  We sometimes call the completion of .  "
},
{
  "id": "def-caratheodory-crit",
  "level": "2",
  "url": "4-3-26.html#def-caratheodory-crit",
  "type": "Definition",
  "number": "3.7",
  "title": "Carathéodory Criterion.",
  "body": " Carathéodory Criterion  We say is in if for any subset  .  is equivalent to and is also the -algebra of Lebesgue measurable sets.  "
},
{
  "id": "4-3-26-10",
  "level": "2",
  "url": "4-3-26.html#4-3-26-10",
  "type": "Remark",
  "number": "3.8",
  "title": "",
  "body": " We always have by countable subadditivity. Consequently, to show that , it suffices to prove .  We will also see that Borel sets and null sets satisfy the Carathéodory Criterion.  "
},
{
  "id": "prop-msr-null-sets",
  "level": "2",
  "url": "4-3-26.html#prop-msr-null-sets",
  "type": "Proposition",
  "number": "3.9",
  "title": "Measurability of Null Sets.",
  "body": " Measurability of Null Sets  Null sets are measurable.   Let be a null set. Take any . Then, .   "
},
{
  "id": "obs-M0-first-two-sigma-alg",
  "level": "2",
  "url": "4-3-26.html#obs-M0-first-two-sigma-alg",
  "type": "Observation",
  "number": "3.10",
  "title": "<span class=\"process-math\">\\(\\mathcal M_0\\)<\/span> Satifies First Two Properties of <span class=\"process-math\">\\(\\sigma\\)<\/span>-Algebras.",
  "body": " Satifies First Two Properties of -Algebras  if and only if .  so .  Thus, satisfies the first two properties of -algebras outlined in . It remains to show that is closed under countable unions.  "
},
{
  "id": "prop-M0-finite-unions",
  "level": "2",
  "url": "4-3-26.html#prop-M0-finite-unions",
  "type": "Proposition",
  "number": "3.11",
  "title": "Finite Unions of <span class=\"process-math\">\\(\\mathcal M_0\\)<\/span>.",
  "body": " Finite Unions of  Let . Then, .   Note that . Additionally, where the first equality holds from and the second from .  Consequently, . Thus, , as required.   "
},
{
  "id": "prop-disjoint-M0",
  "level": "2",
  "url": "4-3-26.html#prop-disjoint-M0",
  "type": "Proposition",
  "number": "3.12",
  "title": "Disjoint Elements of <span class=\"process-math\">\\(\\mathcal M_0\\)<\/span>.",
  "body": " Disjoint Elements of  Let be disjoint. Then, for any , .   .  "
},
{
  "id": "cor-finite-add-disjoint-M0",
  "level": "2",
  "url": "4-3-26.html#cor-finite-add-disjoint-M0",
  "type": "Corollary",
  "number": "3.13",
  "title": "Finite Additivity of Disjoint Elements of <span class=\"process-math\">\\(\\mathcal M_0\\)<\/span>.",
  "body": " Finite Additivity of Disjoint Elements of  Let . If , , we have from and . Thus, for measurable sets that are disjoint, we have finite additivity.  "
},
{
  "id": "prop-M0-closed-countable-union",
  "level": "2",
  "url": "4-3-26.html#prop-M0-closed-countable-union",
  "type": "Proposition",
  "number": "3.14",
  "title": "Closedness of <span class=\"process-math\">\\(\\mathcal M_0\\)<\/span> Under Countable Unions.",
  "body": " Closedness of Under Countable Unions  Let . Then, .   Let , let for , and assume .  Firstly, . Then, as well. Finally, if , so the set of is pairwise disjoint.  Given and , where the final inequality holds from .  Since this holds for all , it follows that so is measurable.  As , it follows that , as required.   "
},
{
  "id": "cor-M0-sigma-alg",
  "level": "2",
  "url": "4-3-26.html#cor-M0-sigma-alg",
  "type": "Corollary",
  "number": "3.15",
  "title": "<span class=\"process-math\">\\(\\mathcal M_0\\)<\/span> is a <span class=\"process-math\">\\(\\sigma\\)<\/span>-Algebra.",
  "body": " is a -Algebra  From and , is a -algebra.  "
},
{
  "id": "4-6-26",
  "level": "1",
  "url": "4-6-26.html",
  "type": "Section",
  "number": "4",
  "title": "4-6-26",
  "body": " 4-6-26  "
},
{
  "id": "4-8-26",
  "level": "1",
  "url": "4-8-26.html",
  "type": "Section",
  "number": "5",
  "title": "4-8-26",
  "body": " 4-8-26   The measure on exists  There exists a unique set function satisfying  Nonnegativity.  Monotonicity.  Normalization.  Translation invariance.  Countable additivity.  Outer regularity. Given and , there is open with and .      Given , . The Legesgue measure is just the restriction of the outer measure to .    Inner regularity  Given and , there is a closed with and .   Let . By outer regularity, there is open with and . Let . Then since , and , so .     Continuity of measure   Given an increasing sequence , .  Given a descending sequence with , .     Let and let . Then, and for . Then, .   First note that is non-increasing and bounded below by so exists.  Let . Then, . Also, .  It follows that so due to disjointness and measurability. Thus, since , , and is finite.       For , .   is a disjoint union. The formula follows by finite additivity.     There is no set function satisfying all of the following:  Translation invariance.  Monotonicity.  Normalization.  Countable additivity. If is pairwise disjoint, then .      Vitali set  Given , say if . defines an equivalence relation on the real line and let . By the Axiom of Choice, for each equivalence class, pick a representative .  Then, is a Vitali set. Given , let .     If , for some , so .  if .     If exists, then .   . Thus, . Since , cannot be so .     If exists, then .   . . But, .  On the other hand, by translation invariance, .     Let .  Then, , . .   "
},
{
  "id": "thm-existence-of-measure",
  "level": "2",
  "url": "4-8-26.html#thm-existence-of-measure",
  "type": "Theorem",
  "number": "5.1",
  "title": "The measure on <span class=\"process-math\">\\(\\mathcal M\\)<\/span> exists.",
  "body": " The measure on exists  There exists a unique set function satisfying  Nonnegativity.  Monotonicity.  Normalization.  Translation invariance.  Countable additivity.  Outer regularity. Given and , there is open with and .    "
},
{
  "id": "4-8-26-3",
  "level": "2",
  "url": "4-8-26.html#4-8-26-3",
  "type": "Remark",
  "number": "5.2",
  "title": "",
  "body": " Given , . The Legesgue measure is just the restriction of the outer measure to .  "
},
{
  "id": "prop-inner-regularity",
  "level": "2",
  "url": "4-8-26.html#prop-inner-regularity",
  "type": "Proposition",
  "number": "5.3",
  "title": "Inner regularity.",
  "body": " Inner regularity  Given and , there is a closed with and .   Let . By outer regularity, there is open with and . Let . Then since , and , so .   "
},
{
  "id": "prop_measure-continuity",
  "level": "2",
  "url": "4-8-26.html#prop_measure-continuity",
  "type": "Proposition",
  "number": "5.4",
  "title": "Continuity of measure.",
  "body": " Continuity of measure   Given an increasing sequence , .  Given a descending sequence with , .     Let and let . Then, and for . Then, .   First note that is non-increasing and bounded below by so exists.  Let . Then, . Also, .  It follows that so due to disjointness and measurability. Thus, since , , and is finite.     "
},
{
  "id": "4-8-26-6",
  "level": "2",
  "url": "4-8-26.html#4-8-26-6",
  "type": "Proposition",
  "number": "5.5",
  "title": "",
  "body": " For , .   is a disjoint union. The formula follows by finite additivity.   "
},
{
  "id": "4-8-26-7",
  "level": "2",
  "url": "4-8-26.html#4-8-26-7",
  "type": "Theorem",
  "number": "5.6",
  "title": "",
  "body": " There is no set function satisfying all of the following:  Translation invariance.  Monotonicity.  Normalization.  Countable additivity. If is pairwise disjoint, then .    "
},
{
  "id": "ex-vitali-set",
  "level": "2",
  "url": "4-8-26.html#ex-vitali-set",
  "type": "Example",
  "number": "5.7",
  "title": "Vitali set.",
  "body": " Vitali set  Given , say if . defines an equivalence relation on the real line and let . By the Axiom of Choice, for each equivalence class, pick a representative .  Then, is a Vitali set. Given , let .  "
},
{
  "id": "4-8-26-9",
  "level": "2",
  "url": "4-8-26.html#4-8-26-9",
  "type": "Observation",
  "number": "5.8",
  "title": "",
  "body": "  If , for some , so .  if .   "
},
{
  "id": "4-8-26-10",
  "level": "2",
  "url": "4-8-26.html#4-8-26-10",
  "type": "Lemma",
  "number": "5.9",
  "title": "",
  "body": " If exists, then .   . Thus, . Since , cannot be so .   "
},
{
  "id": "4-8-26-11",
  "level": "2",
  "url": "4-8-26.html#4-8-26-11",
  "type": "Lemma",
  "number": "5.10",
  "title": "",
  "body": " If exists, then .   . . But, .  On the other hand, by translation invariance, .   "
},
{
  "id": "4-8-26-12",
  "level": "2",
  "url": "4-8-26.html#4-8-26-12",
  "type": "Claim",
  "number": "5.11",
  "title": "",
  "body": " Let .  Then, , . .  "
},
{
  "id": "4-10-26",
  "level": "1",
  "url": "4-10-26.html",
  "type": "Section",
  "number": "6",
  "title": "4-10-26",
  "body": " 4-10-26  "
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
