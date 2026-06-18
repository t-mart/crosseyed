!(function () {
  try {
    var e = "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
      t = new Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
        (e._sentryDebugIds[t] = "2c28b6da-5e16-49da-ad50-19464acafa69"),
        (e._sentryDebugIdIdentifier =
          "sentry-dbid-2c28b6da-5e16-49da-ad50-19464acafa69"));
  } catch (e) {}
})();
var _global = "undefined" != typeof window
  ? window
  : "undefined" != typeof global
  ? global
  : "undefined" != typeof self
  ? self
  : {};
((_global.SENTRY_RELEASE = { id: "b62d79f8c1db608307dddf754f78f621505375f8" }),
  (function () {
    var e,
      t,
      r,
      n = {
        39351: function (e, t, r) {
          "use strict";
          (r(31405), r(37422));
          var n = r(67294),
            o = r(20745),
            a = r(50533),
            i = r(3093),
            l = r(65489),
            s = r(95854),
            c = r(65046),
            d = r(51238),
            u = r(34767),
            m = r(29829);
          const p = "crossword/progress/APPLY_PROGRESS",
            f = "crossword/progress/RECALC_COUNTS",
            g = ["cells", "status", "timer", "selection"],
            v = "crossword/transient/PUZZLE_READY",
            b = "crossword/transient/PUZZLE_SYNCED",
            h = "crossword/transient/ESCAPE_PUZZLE",
            y = "crossword/transient/AUTO_OPENED_CONGRATS",
            w = "crossword/transient/SET_WEB_SOURCE_PARAM",
            _ = "crossword/transient/CLEAR_WEB_SOURCE_PARAM",
            E = "crossword/transient/SHOW_CONGRATS_MOMENT",
            O = "crossword/transient/CLEAR_CONGRATS_MOMENT",
            S = "crossword/transient/SET_MIDI_TITLE",
            k = (e) => ({ type: b, payload: { commitID: e } }),
            P = (e) => (t) => {
              setTimeout(() => t({ type: E }), null != e ? e : 0);
            },
            x = "crossword/cell/CHECK",
            C = "crossword/cell/CLEAR",
            j = "crossword/cell/REVEAL",
            T = "crossword/cell/GUESS",
            D = (e) => !!e.guess,
            N = (e) => ![0, 4].includes(e.type),
            L = (e) => N(e) && !D(e),
            z = (e) => e && e.confirmed,
            I = (e) => !z(e),
            A = (e, t) => {
              const { answer: r, moreAnswers: n } = e;
              if (!n) return r ? r === t : !t;
              const { valid: o = [] } = n,
                a = o.concat(r);
              return (
                !((!a.includes(" ") && !a.includes("")) || t) || a.includes(t)
              );
            },
            M = (e) => A(e, e.guess || ""),
            R = (e) => N(e) && !M(e),
            B = (e) => I(e) && N(e),
            U = (e) => D(e) && I(e),
            G = (e) => U(e) && ((e) => !e.checked || e.modified)(e),
            W = (e) => (t) =>
              !!((e) => e.checked && !e.modified && I(e))(t) ||
              !e.skipFilled ||
              !!L(t) ||
              (!e.skipPenciled && t.penciled),
            Y = "crossword/selection/NAVIGATE",
            H = "crossword/selection/SELECT_CELL",
            F = "crossword/selection/SELECT_CLUE",
            q = "crossword/selection/SWITCH_DIRECTION",
            Z = () => ({ type: q }),
            $ = (e) => ({ type: Y, payload: { direction: e } }),
            V = (e, t) => {
              const r = "ClueStart";
              return t
                ? { type: Y, payload: { direction: r } }
                : { type: F, payload: { index: e, direction: r } };
            },
            X = "crossword/status/SET_INITIAL_CELL_STATUS",
            K = "crossword/status/RESET_GAME",
            J = "crossword/status/DEBUG_REVEAL",
            Q = "crossword/status/MARK_SOLVED",
            ee = "crossword/status/ENABLE_AUTOCHECK",
            te = "crossword/status/DISABLE_AUTOCHECK",
            re = "crossword/status/TRACK_PROGRESS",
            ne = "crossword/status/MARK_FILLED",
            oe = "crossword/status/UNMARK_FILLED",
            ae = "crossword/status/SET_LOADING_SERVER_STAR",
            ie = (e) => ({ type: ae, payload: { loading: e } }),
            le = (e) => e[Math.floor(Math.random() * e.length)];
          var se = r(89977);
          const ce = (e) => e.user,
            de = (0, se.createSelector)(ce, (e) => {
              let { settings: t } = e;
              return t;
            }),
            ue = (0, se.createSelector)(ce, (e) => {
              let { printPrefs: t } = e;
              return t;
            }),
            me = (0, se.createSelector)(ce, (e) => {
              let { access: t } = e;
              return t;
            }),
            pe = (0, se.createSelector)(me, (e) => {
              let { canAccessPuzzle: t } = e;
              return t;
            }),
            fe = (0, se.createSelector)(me, (e) => {
              let { isAccessDataAvailable: t } = e;
              return t;
            });
          const ge = (e, t) => {
              const r = Math.floor(e / t) * t;
              return [r, r + t - 1];
            },
            ve = (e) => [0, e.length - 1];
          var be = r(30381),
            he = r.n(be);
          const ye = (e, t) => e + (t ? he()().unix() - t : 0),
            we = (e) => {
              const t = Math.floor(e / 3600),
                r = Math.floor((e % 3600) / 60),
                n = r < 10 ? "0".concat(r) : r,
                o = Math.floor(e % 60),
                a = o < 10 ? "0".concat(o) : o;
              return t > 0 ? [t, n, a].join(":") : "".concat(r, ":").concat(a);
            },
            _e = /(\w*)\{nyt-(\w+)\}(\w*)/g,
            Ee = {
              m: (e) => {
                const t = e.format("MMMM"),
                  r = "September" === t ? "Sept" : t.substring(0, 3);
                return t.length > 4 ? "".concat(r, ".") : t;
              },
            },
            Oe = (e, t) => {
              if (!e) return "";
              const r = he()(e),
                n = ((e, t) =>
                  t.replace(_e, (t, r, n) => {
                    const o = Ee[n];
                    if (!o) {
                      throw new Error(
                        'Unrecognized NYT time: "'.concat(n, '"'),
                      );
                    }
                    return "[".concat(o(e), "]");
                  }))(r, t);
              return r.format(n);
            },
            Se = [
              "sunday",
              "monday",
              "tuesday",
              "wednesday",
              "thursday",
              "friday",
              "saturday",
            ],
            ke = (e) => e.cells,
            Pe = (0, se.createSelector)(ke, (e) => e.map((e) => 4 === e.type)),
            xe = (e) => e.clues,
            Ce = (e) => e.puzzle.data,
            je = (e) => e.puzzle.hasLoaded,
            Te = (e) => e.puzzle.error,
            De = (0, se.createSelector)(
              Ce,
              (e) => (null == e ? void 0 : e.meta) || null,
            ),
            Ne = (0, se.createSelector)(
              Ce,
              (e) => (null == e ? void 0 : e.board) || null,
            ),
            Le = (0, se.createSelector)(
              Ce,
              (e) => (null == e ? void 0 : e.clueLists) || [],
            ),
            ze = (0, se.createSelector)(
              Ce,
              (e) => (null == e ? void 0 : e.overlays) || null,
            ),
            Ie = (0, se.createSelector)(
              Ce,
              (e) => (null == e ? void 0 : e.dimensions) || null,
            ),
            Ae = (0, se.createSelector)(De, (e) => (null == e ? void 0 : e.id)),
            Me = (0, se.createSelector)(
              De,
              (e) => null == e ? void 0 : e.title,
            ),
            Re = (0, se.createSelector)(
              De,
              (e) => (null == e ? void 0 : e.publishStream) || "",
            ),
            Be = (0, se.createSelector)(Re, (e) => "mini" === e),
            Ue = (0, se.createSelector)(Re, (e) => "midi" === e),
            Ge = (0, se.createSelector)(Re, (e) => "daily" === e),
            We = (0, se.createSelector)(
              De,
              (e) => null == e ? void 0 : e.publicationDate,
            ),
            Ye = (0, se.createSelector)([Re, We, Me, Te], (e, t, r, n) => {
              if (n) {
                return 403 === n.status
                  ? "Subscription Required"
                  : 404 === n.status
                  ? "Page Not Found"
                  : "Oops! Something went wrong.";
              }
              const o = !e;
              let a = "MMMM D, YYYY";
              a = "bonus" === e ? "MMMM YYYY" : "dddd, MMMM D, YYYY";
              let i = "The Crossword puzzle";
              return (
                "mini" === e && (i = "The Mini puzzle"),
                  "midi" === e && (i = "The Midi puzzle"),
                  (o || "bonus" === e) &&
                  (i = "The Crossword Bonus puzzle — ".concat(r)),
                  o && (i = "The Special Crossword puzzle"),
                  !o && t && (i = "".concat(Oe(t, a), " ").concat(i)),
                  "".concat(i, " — The New York Times")
              );
            }),
            He = (0, se.createSelector)(We, (e) => (e ? Oe(e, "dddd") : "")),
            Fe = (0, se.createSelector)(He, (e) => Se.indexOf(e.toLowerCase())),
            qe = (e) => e.selection,
            Ze = (0, se.createSelector)(qe, (e) => e.cell),
            $e = (0, se.createSelector)(
              [ke, Ze],
              (e, t) => "number" == typeof t ? e[t] : null,
            ),
            Ve = (0, se.createSelector)(
              [xe, qe],
              (e, t) => "number" == typeof t.clue ? e[t.clue] : null,
            ),
            Xe = ((0, se.createSelector)([Le, qe], (e, t) =>
              "number" == typeof t.clueList ? e[t.clueList] : null),
              (0, se.createSelector)(qe, (e) =>
                e.clueCells)),
            Ke = (0, se.createSelector)(qe, (e) =>
              e.relatedCells);
          function Je(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function Qe(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Je(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : Je(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const et = (e, t, r) => {
              const n = e.find((e) =>
                r(t[e])
              );
              if (void 0 !== n) return t[n];
            },
            tt = () => 0,
            rt = (e, t) => t.length - 1,
            nt = (e) => e - 1,
            ot = (e) => e + 1,
            at = (e, t, r) => {
              const n = t.clueCells[r],
                o = e[n];
              return Qe(Qe({}, t), {}, { cell: n, cellClues: o.clues });
            },
            it = (e, t) => {
              let { cells: r, selection: n } = e;
              const { cell: o, clueCells: a } = n;
              if (!a.length) return null;
              const i = t(a.indexOf(o), a);
              return at(r, n, i);
            },
            lt = function (e) {
              var t;
              let r = arguments.length > 1 && void 0 !== arguments[1] &&
                arguments[1];
              const n = de(e),
                { cells: o, clues: a, selection: i } = e,
                l = W(n),
                s = a[i.clue],
                c = r ? "prev" : "next";
              let d, u;
              d = s ? s[c] : r ? a.length - 1 : 0;
              let m = a[d];
              do {
                if (((u = et(m.cells, o, l)), u)) break;
                m = a[m[c]];
              } while (m.index !== d);
              const p = u ? u.index : m.cells[0];
              return {
                cell: p,
                cellClues: o[p].clues,
                clue: m.index,
                clueCells: m.cells,
                clueList: null !== (t = m.list) && void 0 !== t ? t : null,
                relatedCells: [],
                relatedClues: [],
              };
            };
          function st(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function ct(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? st(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : st(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          var dt = (e, t, r) => {
            switch (t) {
              case "Up":
              case "Down":
              case "Left":
              case "Right":
                return ((e, t, r) => {
                  var n, o;
                  const { cells: a, clues: i, puzzle: l, selection: s } = e,
                    c = ((e, t, r, n, o) => {
                      if ("number" != typeof n || n < 1) {
                        throw new Error("gridwidth must be a positive number");
                      }
                      let a, i;
                      switch (t) {
                        case "Up":
                          ((a = -n), (i = ve(r)));
                          break;
                        case "Down":
                          ((a = n), (i = ve(r)));
                          break;
                        case "Right":
                          ((a = 1), (i = ge(e, n)));
                          break;
                        case "Left":
                          ((a = -1), (i = ge(e, n)));
                      }
                      if (a && i) {
                        for (let t = e + a; t >= i[0] && t <= i[1]; t += a) {
                          if (o(r[t])) return r[t];
                        }
                      }
                    })(
                      s.cell || 0,
                      t,
                      a,
                      (null === (n = l.data) || void 0 === n
                        ? void 0
                        : n.dimensions.columnCount) || 0,
                      N,
                    );
                  if (!c) return null;
                  const d = ((e, t, r) => {
                    if (0 === e.clues.length) {
                      return { index: null, cells: [], list: r };
                    }
                    if (1 === e.clues.length) return t[e.clues[0]];
                    const n = e.clues,
                      o = n.map((e) => t[e].list),
                      a = ((i = r),
                        o.reduce((e, t) =>
                          t === i ? t : e === i ? e : "number" == typeof i &&
                              ((t < i && e < i) || (t > i && e > i))
                            ? Math.min(t, e)
                            : Math.max(t, e)
                        ));
                    var i;
                    const l = o.findIndex((e) => e === a);
                    return t[n[l]];
                  })(c, i, void 0 !== r ? r : s.clueList);
                  return ct(
                    ct({}, s),
                    {},
                    {
                      cell: c.index,
                      cellClues: c.clues,
                      clue: d.index,
                      clueCells: d.cells,
                      clueList: null !== (o = d.list) && void 0 !== o
                        ? o
                        : null,
                    },
                  );
                })(e, t, r);
              default:
                return ((e, t) => {
                  switch (t) {
                    case "ClueStart":
                      return it(e, tt);
                    case "ClueEnd":
                      return it(e, rt);
                    case "Advance":
                      return ((e) => {
                        const t = de(e),
                          { cells: r, selection: n } = e,
                          { cell: o, clueCells: a } = n,
                          i = W(t),
                          l = $e(e),
                          s = !!l && l.guess,
                          c = ((m = o), (u = a).slice(u.indexOf(m) + 1)),
                          d = 0 === c.length;
                        var u, m;
                        if (s && !d) return it(e, ot);
                        const p = t.jumpBack
                            ? c.concat(
                              ((e, t) => e.slice(0, e.indexOf(t)))(a, o),
                            )
                            : c,
                          f = et(p, r, i);
                        return f
                          ? at(r, n, a.indexOf(f.index))
                          : t.autoAdvance
                          ? lt(e)
                          : null;
                      })(e);
                    case "Backspace":
                      return ((e) => {
                        var t;
                        const r = de(e),
                          { cells: n, clues: o, selection: a } = e,
                          { cell: i, clue: l, clueCells: s } = a;
                        if (null === i || 0 !== s.indexOf(i)) return it(e, nt);
                        if (!r.backspaceAcrossWords) return null;
                        const c =
                          ((d = o),
                            (u = o[l]),
                            d[d.indexOf(u) - 1] || d[d.length - 1]);
                        var d, u;
                        const m = c.cells,
                          p = n[m[m.length - 1]];
                        return Qe(
                          Qe({}, a),
                          {},
                          {
                            cell: p.index,
                            cellClues: p.clues,
                            clue: c.index,
                            clueCells: m,
                            clueList: null !== (t = c.list) && void 0 !== t
                              ? t
                              : null,
                          },
                        );
                      })(e);
                    case "NextClue":
                      return lt(e);
                    case "PreviousClue":
                      return lt(e, !0);
                    default:
                      return null;
                  }
                })(e, t);
            }
          };
          function ut(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function mt(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? ut(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : ut(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const pt = /[Up|Down]$/,
            ft = ["Across", "Down"],
            gt = (e, t) => {
              var r;
              return ft.includes(
                null === (r = t[e]) || void 0 === r ? void 0 : r.name,
              );
            },
            vt = (e) => {
              var t;
              let { cells: r, clues: n } = e;
              const o = r.find(L) || r.find(N),
                [a = null] = (null == o ? void 0 : o.clues) || [],
                i = n[a];
              return {
                cell:
                  null !== (t = null == o ? void 0 : o.index) && void 0 !== t
                    ? t
                    : null,
                cellClues: (null == o ? void 0 : o.clues) || [],
                clue: a,
                clueCells: (null == i ? void 0 : i.cells) || [],
                clueList: (null == i ? void 0 : i.list) || 0,
                relatedCells: [],
                relatedClues: [],
              };
            },
            bt = (e, t) => {
              var r;
              let { cells: n, clues: o } = e;
              const a = o[t],
                i = a.cells.map((e) => n[e]).find((e) => L(e)),
                l = i ? i.index : a.cells[0];
              return {
                cell: l,
                cellClues: n[l].clues,
                clue: a.index,
                clueCells: a.cells,
                clueList: null !== (r = a.list) && void 0 !== r ? r : null,
                relatedCells: [],
                relatedClues: [],
              };
            },
            ht = function (e) {
              var t;
              let r = arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
              const { clues: n } = e,
                o = r || e.selection,
                { clue: a, cellClues: i } = o;
              if (i.length < 2) return o;
              var l, s;
              const c = n[((s = a), (l = i)[(l.indexOf(s) + 1) % l.length])];
              return mt(
                mt({}, o),
                {},
                {
                  clueCells: c.cells,
                  clue: c.index,
                  clueList: null !== (t = c.list) && void 0 !== t ? t : null,
                },
              );
            },
            yt = (e, t) => {
              const {
                puzzle: { data: r },
                selection: { clueList: n },
              } = e;
              return (
                !!r && r.clueLists[n].name !== (pt.test(t) ? "Down" : "Across")
              );
            },
            wt = {
              ShiftArrowUp: "PreviousClue",
              ShiftArrowDown: "NextClue",
              ShiftArrowLeft: "PreviousClue",
              ShiftArrowRight: "NextClue",
            };
          function _t(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function Et(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? _t(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : _t(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          var Ot = (e) => (t) => (r) => {
            const n = ((e, t) => {
              let r = null;
              switch (t.type) {
                case p:
                  "selection" in t.payload && (r = t.payload.selection || null);
                  break;
                case v:
                  r = ((e) => {
                    const { selection: t } = e;
                    return null == t.cell ? vt(e) : null;
                  })(e);
                  break;
                case K:
                  r = vt(e);
                  break;
                case J:
                case H:
                  r = ((e, t) => {
                    var r;
                    let { cells: n, clues: o, selection: a } = e;
                    const i = n[t],
                      { clueList: l } = a,
                      { clues: s } = i,
                      c = s.find((e) => o[e].list === l),
                      d = c ? o[c] : o[s[0]];
                    return d
                      ? {
                        cell: t,
                        cellClues: s,
                        clue: d.index,
                        clueCells: d.cells,
                        clueList: null !== (r = d.list) && void 0 !== r
                          ? r
                          : null,
                        relatedCells: [],
                        relatedClues: [],
                      }
                      : {
                        cell: t,
                        cellClues: [],
                        clue: null,
                        clueCells: [],
                        clueList: l,
                        relatedCells: [],
                        relatedClues: [],
                      };
                  })(e, t.payload.index);
                  break;
                case F:
                  r = bt(e, t.payload.index);
                  break;
                case q:
                  r = ht(e);
                  break;
                case Y: {
                  const { direction: n } = t.payload;
                  r = null != n && n.startsWith("Arrow")
                    ? ((e, t) => {
                      const r = ce(e),
                        {
                          settings: { onSwitch: n },
                        } = r,
                        {
                          puzzle: { data: o },
                          selection: { cellClues: a, clueList: i },
                        } = e;
                      if (!o) return null;
                      if (yt(e, t)) {
                        const r = 0 === a.length,
                          l = "move" === n || r || !gt(i, o.clueLists)
                            ? dt(e, t.substring(5))
                            : null;
                        return ht(e, l);
                      }
                      return dt(e, t.substring(5));
                    })(e, n)
                    : null != n && n.startsWith("Shift")
                    ? ((e, t) => {
                      const {
                          puzzle: { data: r },
                          cells: n,
                          selection: { clueList: o },
                        } = e,
                        a = t.replace("ShiftArrow", "");
                      if (!r) return null;
                      if (null == o || !gt(o, r.clueLists)) {
                        const t = pt.test(a)
                          ? r.clueLists.findIndex(
                            (e) => "Down" === e.name,
                          ) || 0
                          : r.clueLists.findIndex(
                            (e) => "Across" === e.name,
                          ) || 0;
                        return dt(e, a, t);
                      }
                      if (yt(e, t)) {
                        const t = dt(e, a);
                        if (!t) return null;
                        const r = (e) => !L(n[e]);
                        return t.clueCells.every(r) ? t : bt(e, t.clue);
                      }
                      return dt(e, wt[t] || "");
                    })(e, n)
                    : dt(e, n);
                  break;
                }
                case T:
                  r = dt(e, "Advance");
                  break;
                default:
                  return null;
              }
              return r
                ? ((r = ((e, t) => {
                  let { clues: r } = e;
                  const n = r[t.clue];
                  let o = [],
                    a = [];
                  return (
                    n &&
                    ((a = n.relatives || []),
                      (o = a
                        .map((e) => r[e])
                        .reduce((e, t) => e.concat(t.cells), []))),
                      mt(mt({}, t), {}, { relatedCells: o, relatedClues: a })
                  );
                })(e, r)),
                  r)
                : null;
            })(e.getState(), r);
            return t(n ? Et(Et({}, r), {}, { selection: n }) : r);
          };
          function St(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          const kt = "crossword/modal/OPEN_MODAL",
            Pt = "crossword/modal/CLOSE_MODAL",
            xt = "crossword/modal/REMOVE_MODAL",
            Ct = (e, t, r) =>
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? St(Object(r), !0).forEach(function (t) {
                      var n, o, a, i;
                      ((n = e),
                        (o = t),
                        (a = r[t]),
                        (o = "symbol" ==
                              typeof (i = (function (e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                  var n = r.call(e, "string");
                                  if ("object" != typeof n) return n;
                                  throw new TypeError(
                                    "@@toPrimitive must return a primitive value.",
                                  );
                                }
                                return String(e);
                              })(o))
                            ? i
                            : i + "") in n
                          ? Object.defineProperty(n, o, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                          : (n[o] = a));
                    })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r),
                    )
                    : St(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t),
                      );
                    });
                }
                return e;
              })(
                { type: kt, payload: { name: e, config: t } },
                r && { meta: { delay: r } },
              ),
            jt = (e) => ({ type: Pt, payload: { isCancelled: e } }),
            Tt = () => ({ type: xt }),
            Dt = "crossword/timer/RESUME_TIMER",
            Nt = "crossword/timer/PAUSE_TIMER",
            Lt = "crossword/timer/COMMIT_PROGRESS",
            zt = (e, t) =>
              e === Dt || e === Lt
                ? { type: e, payload: { now: he()().unix() } }
                : {
                  type: e,
                  payload: { now: he()().unix(), isLeavingGame: t },
                },
            It = () => zt(Lt),
            At = () => zt(Dt),
            Mt = function () {
              return zt(
                Nt,
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              );
            },
            Rt = "crossword/toolbar/TOGGLE_PENCIL_MODE",
            Bt = "crossword/toolbar/ENTER_REBUS_MODE",
            Ut = "crossword/toolbar/EXIT_REBUS_MODE",
            Gt = "crossword/toolbar/UPDATE_REBUS",
            Wt = "crossword/toolbar/TOGGLE_HELP_MENU",
            Yt = "crossword/toolbar/SET_PUZZLE_INFO_SEEN",
            Ht = () => ({ type: Rt }),
            Ft = (e) => ({ type: Wt, payload: { menu: e } }),
            qt = (e) => ({ type: Gt, payload: e });
          var Zt = r(73435);
          let $t = (function (e) {
            return (
              (e.Letter = "LETTER_SCOPE"),
                (e.Unchecked = "UNCHECKED_SCOPE"),
                (e.Word = "WORD_SCOPE"),
                (e.Puzzle = "PUZZLE_SCOPE"),
                (e.Fifty = "FIFTY_SCOPE"),
                (e.SeventyFive = "SEVENTYFIVE_SCOPE"),
                e
            );
          })({});
          const Vt = (e, t, r, n, o) => {
            switch (e) {
              case $t.Unchecked:
                (0, Zt.$)("click", t, r, "".concat(n, "-incomplete"));
                break;
              case $t.Letter:
                (0, Zt.$)("click", t, r, "".concat(n, "-square"));
                break;
              case $t.Word:
                (0, Zt.$)("click", t, r, "".concat(n, "-word"), o);
                break;
              case $t.Puzzle:
                (0, Zt.$)("click", t, r, "".concat(n, "-puzzle"));
            }
          };
          var Xt = (e) => (t) => (r) => {
            const n = e.getState(),
              o = Be(e.getState()),
              a = Ue(e.getState()),
              i = Ae(n) || 0,
              l = a ? "midi-page" : o ? "mini-page" : "game-page";
            switch (r.type) {
              case j: {
                const e = (r.payload.cellsInScope || [])
                  .map((e) => n.cells[e].answer)
                  .join("");
                Vt(r.payload.scope, i, l, "reveal", e);
                break;
              }
              case x:
                Vt(r.payload.scope, i, l, "check");
                break;
              case C:
                Vt(r.payload.scope, i, l, "clear");
                break;
              case Rt:
                ((e, t, r) => {
                  const n = r.toolbar.inPencilMode ? "pen" : "pencil";
                  (0, Zt.$)("click", e, t, n);
                })(i, l, n);
                break;
              case Pt:
                ((e, t, r, n) => {
                  var o;
                  const a = (null === (o = n.modal.config) || void 0 === o
                      ? void 0
                      : o.actionType) || "",
                    i = (e.type !== xt &&
                      "isCancelled" in e.payload &&
                      e.payload.isCancelled) ||
                      !1;
                  [C, K].includes(a) &&
                    i &&
                    (0, Zt.$)("click", t, r, "clear-cancel");
                })(r, i, l, n);
                break;
              case K:
                (0, Zt.$)("click", i, l, "clear-confirm");
                break;
              case Nt:
                (0, Zt.$)("click", i, l, "stop-timer");
                break;
              case Dt:
                (0, Zt.$)("click", i, l, "start-timer");
            }
            return t(r);
          };
          const Kt = (e) => {
              var t, r;
              return null !==
                    (t = null === (r = e.meter) || void 0 === r
                      ? void 0
                      : r.data) &&
                  void 0 !== t
                ? t
                : null;
            },
            Jt = (e) => {
              var t, r;
              return (
                null !==
                  (t = null === (r = e.meter) || void 0 === r
                    ? void 0
                    : r.hasLoaded) &&
                void 0 !== t &&
                t
              );
            };
          function Qt(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function er(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Qt(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : Qt(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          ((0, se.createSelector)(Kt, (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.granted) && void 0 !== t
              ? t
              : null;
          }),
            (0, se.createSelector)(Kt, (e) => {
              var t;
              return null !== (t = null == e ? void 0 : e.grantReason) &&
                  void 0 !== t
                ? t
                : null;
            }));
          let tr = (function (e) {
              return (
                (e.standard = "standard"),
                  (e.southpaw = "southpaw"),
                  (e.large_print = "large_print"),
                  e
              );
            })({}),
            rr = (function (e) {
              return (
                (e.PROGRESS = "progress"),
                  (e.DUAL_WRITE = "dual_write"),
                  (e.STATE = "state"),
                  e
              );
            })({}),
            nr = (function (e) {
              return ((e.PROGRESS = "progress"), (e.STATE = "state"), e);
            })({});
          const or = {
              onSwitch: "stay",
              jumpBack: !0,
              skipFilled: !0,
              skipPenciled: !1,
              showTimer: !0,
              suppressDisqualificationWarnings: !1,
              forceGoldStarEligibility: !1,
              speedUpSyncInterval: !1,
              suppressAutocheckNotice: !1,
              writeOptions: rr.PROGRESS,
              readOptions: nr.PROGRESS,
            },
            ar = er(
              er({}, or),
              {},
              {
                spaceTriggers: "toggle",
                backspaceAcrossWords: !0,
                autoAdvance: !0,
                soundOn: !1,
              },
            ),
            ir = er(
              er({}, or),
              {},
              {
                spaceTriggers: "clear",
                backspaceAcrossWords: !1,
                autoAdvance: !1,
                soundOn: !0,
                showMilestones: !0,
              },
            ),
            lr = { opacity: 100, layout: tr.standard },
            sr = "crossword/user/CHANGE_SETTING",
            cr = "crossword/user/LOAD_SETTINGS",
            dr = "crossword/user/RESET_TO_DEFAULTS",
            ur = "crossword/user/LOAD_PRINT_PREFS",
            mr = "crossword/user/CHANGE_BLOCK_OPACITY",
            pr = "crossword/user/CHANGE_PRINT_LAYOUT",
            fr = "crossword/user/USER_TYPE_LOADED",
            gr = "crossword/user/SET_USER_ACCESS",
            vr = "crossword/user/ACCESS_DATA_AVAILABLE",
            br = (e) => ({ type: sr, payload: e }),
            hr = (e) => ({ type: gr, payload: e });
          var yr = (function (e) {
            return (
              (e.GRANT_S1 = "User has Xwd entitlement"),
                (e.GRANT_S2 = "User has shortz mode enabled"),
                (e.GRANT_S3 = "User is playing a free puzzle"),
                (e.GRANT_S4 = "Meter granted"),
                (e.DENY_S1 = "Meter did not grant"),
                (e.DENY_S2 =
                  "No meter data available. Puzzle has not been detected as free"),
                (e.DENY_S3 =
                  "No puzzle data available. No meter data available"),
                e
            );
          })(yr || {});
          const wr = (e) =>
          (t) =>
          (r) => {
            const n = e.getState(),
              o = t(r),
              a = e.getState();
            if (fe(n)) return o;
            if (Te(a)) return o;
            if (!je(a)) return o;
            if (Be(a)) return o;
            if (!Jt(a)) return o;
            if (r.type === vr) {
              switch (
                ((e) => {
                  let { meter: t, puzzle: r, access: n } = e;
                  return n.userType.hasXwd
                    ? yr.GRANT_S1
                    : n.userType.inShortzMode
                    ? yr.GRANT_S2
                    : null !== r
                    ? r.freePuzzle
                      ? yr.GRANT_S3
                      : null !== t
                      ? t.granted ? yr.GRANT_S4 : yr.DENY_S1
                      : yr.DENY_S2
                    : yr.DENY_S3;
                })({ meter: Kt(a), puzzle: De(a), access: me(a) })
              ) {
                case yr.DENY_S1:
                case yr.DENY_S2:
                  e.dispatch(hr(!1));
                  break;
                case yr.DENY_S3:
                  break;
                case yr.GRANT_S1:
                case yr.GRANT_S2:
                case yr.GRANT_S3:
                case yr.GRANT_S4:
                  e.dispatch(hr(!0));
                  break;
                default:
                  e.dispatch(hr(!1));
              }
            }
            return o;
          };
          var _r = r(69537);
          const Er = (0, r(59391).Z)();
          var Or = n.createContext(Er);
          const Sr = "crossword/stats/GET_STATS",
            kr = "crossword/stats/UPDATE_FROM_STATE",
            Pr = function () {},
            xr = {
              log: Pr,
              info: Pr,
              warn: Pr,
              error: Pr,
              dir: Pr,
              time: Pr,
              timeEnd: Pr,
              trace: Pr,
              assert: Pr,
              debug: Pr,
              table: Pr,
              group: Pr,
              groupCollapsed: Pr,
              groupEnd: Pr,
              clear: Pr,
              count: Pr,
              timeStamp: Pr,
            };
          Object.keys(xr).forEach((e) => {
            xr[e] = function () {
              for (
                var t = arguments.length, r = new Array(t), n = 0;
                n < t;
                n++
              ) {
                r[n] = arguments[n];
              }
              const o = "function" == typeof r ? r() : r;
              console[e](...o);
            };
          });
          var Cr = xr;
          function jr(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function Tr(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? jr(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : jr(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const Dr = (e, t, r) => r.every((r) => e[r] === t[r]),
            Nr = (e, t) =>
              t.reduce((t, r) => Tr(Tr({}, t), {}, { [r]: e[r] }), {}),
            Lr = (e) => {
              let t = "";
              for (let r = 0; r < e.length; r += 1) {
                t += "_" === e[r] ? e[r += 1].toUpperCase() : e[r];
              }
              return t;
            },
            zr = (e) => {
              switch (!0) {
                case !e:
                  return e;
                case Array.isArray(e):
                  return e.map(zr);
                case "object" == typeof e:
                  return Object.entries(e).reduce((e, t) => {
                    let [r, n] = t;
                    return Object.assign(e, { [Lr(r)]: zr(n) });
                  }, {});
                default:
                  return e;
              }
            },
            Ir = () => Math.random().toString(36).slice(2, 8),
            Ar = "".concat(l.env.edge, "/svc/crosswords"),
            Mr = (e, t) => {
              const { method: r, url: n, data: o = null, isSync: a } = e;
              return (
                t.inShortzMode &&
                Cr.info("info: API CALL ".concat(JSON.stringify(e, null, 2))),
                  l.Be.request(r, n, { data: o, isSync: a })
              );
            },
            Rr = (0, se.createSelector)(
              (e) => e.rollout,
              (e) => e.phase,
            );
          let Br = (function (e) {
            return (
              (e[e.PENDING = -1] = "PENDING"),
                (e[e.LEGACY_ONLY = 0] = "LEGACY_ONLY"),
                (e[e.LEGACY_WITH_STATE = 1] = "LEGACY_WITH_STATE"),
                (e[e.STATE_ONLY = 2] = "STATE_ONLY"),
                (e[e.READ_STATE_DUAL_WRITE = 3] = "READ_STATE_DUAL_WRITE"),
                e
            );
          })({});
          var Ur = r(38918),
            Gr = r(63448);
          const Wr = (e) => e.timer,
            Yr = (0, se.createSelector)(Wr, (e) => e.totalElapsedTime),
            Hr = (0, se.createSelector)(Wr, (e) => e.sessionStartTimestamp),
            Fr = (0, se.createSelector)([Yr, Hr], ye);
          var qr = r(22042),
            Zr = r(72811);
          function $r(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function Vr(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? $r(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : $r(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const Xr = (e, t) => {
              const r = ke(t),
                n = new Set(e.penciled || []),
                o = new Set(e.checked || []),
                a = new Set(e.revealed || []),
                i = new Set(e.modified || []),
                l = new Set(e.confirmed || []),
                s = r.map((t) => {
                  const r = t.index,
                    s = e.cells[r] || "",
                    c = n.has(r),
                    d = o.has(r),
                    u = a.has(r),
                    m = i.has(r),
                    p = l.has(r),
                    f = !!s &&
                      !!t.answer &&
                      s.toUpperCase() === t.answer.toUpperCase(),
                    g = d,
                    v = m || (d && f && !m);
                  return Vr(
                    Vr({}, t),
                    {},
                    {
                      guess: s,
                      penciled: c,
                      checked: g,
                      revealed: u,
                      modified: v,
                      confirmed: p,
                    },
                  );
                }),
                c = s.filter(
                  (e) => 1 === e.type && (!e.guess || "" === e.guess.trim()),
                ).length,
                d = s.filter((e) => {
                  var t;
                  return (
                    1 === e.type &&
                    e.guess &&
                    "" !== e.guess.trim() &&
                    e.guess.toUpperCase() !==
                      (null === (t = e.answer) || void 0 === t
                        ? void 0
                        : t.toUpperCase())
                  );
                }).length,
                u = e.star || bn.NoStar,
                m = 0 === c && 0 === d,
                p = (e.checked || []).length > 0,
                f = (e.revealed || []).length > 0;
              return {
                lastCommitID: "",
                cells: s,
                status: {
                  autocheckEnabled: e.isAutocheckEnabled || !1,
                  blankCells: c,
                  isSolved: m,
                  firsts: {
                    opened: e.playTimeSeconds && e.playTimeSeconds > 0 ? 1 : 0,
                    timerReset: e.isTimerReset ? 1 : 0,
                    checked: p ? 1 : 0,
                    revealed: f ? 1 : 0,
                    solved: m ? 1 : 0,
                  },
                  serverStar: u || null,
                },
                timer: { totalElapsedTime: e.playTimeSeconds || 0 },
              };
            },
            Kr = (e) => {
              const {
                  dailyStats: t,
                  dailyStreaks: r,
                  puzzlesStarted: n,
                  puzzlesSolved: o,
                  solveRate: a,
                } = e,
                i = [],
                l = [];
              let s = 0;
              for (const e of Se) {
                var c, d, u;
                const r = t[e],
                  n = (null == r ? void 0 : r.avgTimeSeconds) || 0;
                (n > s && (s = n),
                  i.push({
                    label: e.charAt(0).toUpperCase() + e.slice(1),
                    avgTime: n,
                    avgDenominator: (null == r ? void 0 : r.totalSolves) || 0,
                    bestDate:
                      (null == r || null === (c = r.best) || void 0 === c
                        ? void 0
                        : c.date) || "",
                    bestTime:
                      (null == r || null === (d = r.best) || void 0 === d
                        ? void 0
                        : d.timeSeconds) || 0,
                    thisWeeksTime: (null == r ? void 0 : r.thisWeeksTime) || 0,
                  }));
                const o =
                  (null == r || null === (u = r.verticalStreak) || void 0 === u
                    ? void 0
                    : u.current) || 0;
                l.push({ length: Math.max(0, o - 1), nextDate: "" });
              }
              return {
                dailyStats: {
                  puzzlesAttempted: n,
                  puzzlesSolved: o,
                  solveRate: a,
                  longestAvgTime: s,
                  statsByDay: i,
                },
                streaks: {
                  currentStreak: Math.max(0, r.current - 1),
                  longestStreak: r.longest,
                  dateStart: r.startDate,
                  dateEnd: "",
                  dates: [],
                  verticalStreaks: l,
                },
              };
            },
            Jr = () => (e, t) => {
              const r = t(),
                n = ke(r),
                o = xe(r);
              e({ type: f, payload: { cells: n, clues: o } });
            },
            Qr = (e) => (t, r) => {
              (t({ type: p, payload: e }), t(Jr()));
            },
            en = (e) => e.toolbar,
            tn = (0, se.createSelector)(en, (e) => e.inPencilMode),
            rn = (0, se.createSelector)(en, (e) => e.inRebusMode),
            nn = (0, se.createSelector)(en, (e) => e.rebusValue),
            on = (0, se.createSelector)(en, (e) => e.activeMenu),
            an = (0, se.createSelector)(en, (e) => e.puzzleInfoSeen),
            ln = (0, se.createSelector)(
              (e) => e.midiMetagame,
              (e) => e.isMidiMetagameEnabled,
            ),
            sn = "firstSolve/UPDATE";
          function cn(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function dn(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? cn(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : cn(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const un = {};
          const mn = (e, t) => {
              var r;
              return null === (r = e.firstSolve) || void 0 === r
                ? void 0
                : r[t];
            },
            pn = (0, m.createSlice)({
              name: "tempLogging",
              initialState: { progressData: null, stateData: null },
              reducers: {
                insertProgressData: (e, t) => {
                  e.progressData = t.payload;
                },
                insertStateData: (e, t) => {
                  e.stateData = t.payload;
                },
              },
            }),
            { insertProgressData: fn, insertStateData: gn } = pn.actions;
          var vn = pn.reducer;
          let bn = (function (e) {
            return ((e.NoStar = ""), (e.Blue = "blue"), (e.Gold = "gold"), e);
          })({});
          const hn = () => {
              var e;
              const { stream: t } =
                null !== (e = window.gameData) && void 0 !== e ? e : {};
              let r;
              switch (t) {
                case "daily":
                case "midi":
                case "mini":
                case "promo":
                case "bonus":
                  r = "crossword_".concat(t);
                  break;
                default:
                  r = "crossword_undated";
              }
              return r;
            },
            yn = (e) => {
              const t = Rr(e);
              return t === Br.READ_STATE_DUAL_WRITE || t === Br.STATE_ONLY;
            },
            wn = (e) => {
              const t = Ae(e);
              if (!t) return null;
              const r =
                e.moogle.getPuzzleProgress.statesByPuzzleId[t.toString()];
              return r ? r.game_data : null;
            },
            _n = {
              game: hn(),
              selectPuzzleIdOrSettings: (e) => {
                const t = Ae(e);
                return t ? t.toString() : "";
              },
              selectPuzzlePrintDate: (e) => We(e) || "",
              selectMoogleState: (e) => e.moogle,
              shouldSave: (e, t, r) => {
                const n = Rr(e);
                if (
                  n === Br.LEGACY_WITH_STATE ||
                  n === Br.STATE_ONLY ||
                  n === Br.READ_STATE_DUAL_WRITE
                ) {
                  const n = !r.timer.sessionStartTimestamp,
                    o = !e.timer.sessionStartTimestamp,
                    a = !n && o,
                    i = r.status.isSolved,
                    l = e.status.isSolved,
                    s = !i && l;
                  if (t.type === p) return !1;
                  if (a || (s && o) || t.type === K || t.type === Lt) {
                    return (
                      console.log(
                        "[XWD on State] Will save state due to action",
                        t.type,
                        "payload" in t ? t.payload : null,
                        r,
                        e,
                      ), !0
                    );
                  }
                }
                return !1;
              },
              selectPersistedState: (e) => {
                const t = wn(e),
                  r = !!Sn(e).firsts.timerReset ||
                    (yn(e) && !(null == t || !t.isTimerReset)),
                  n = Pn(e),
                  o = ((e) => {
                    var t;
                    const r = null === (t = Ae(e)) || void 0 === t
                      ? void 0
                      : t.toString();
                    if (r) {
                      const t = mn(e, r);
                      if (
                        void 0 !== (null == t ? void 0 : t.firstSolve) &&
                        t.firstSolve > 0
                      ) {
                        return t.firstSolve;
                      }
                    }
                    const n = wn(e);
                    return null != n && n.firstSolve && n.firstSolve > 0
                      ? n.firstSolve
                      : Pn(e)
                      ? Sn(e).firsts.timerReset ? void 0 : Yr(e)
                      : void 0;
                  })(e),
                  a = ((e) => {
                    var t;
                    const r = null === (t = Ae(e)) || void 0 === t
                      ? void 0
                      : t.toString();
                    if (r) {
                      const t = mn(e, r);
                      if (void 0 !== (null == t ? void 0 : t.firstSolveDate)) {
                        return t.firstSolveDate;
                      }
                    }
                    const n = wn(e);
                    if (null != n && n.firstSolveDate) return n.firstSolveDate;
                    const o = Sn(e).firsts.solved;
                    return o && 0 !== o && !Sn(e).firsts.timerReset
                      ? ((e) => {
                        const t = function (e) {
                            let t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 2;
                            return e.toString().padStart(t, "0");
                          },
                          r = -e.getTimezoneOffset(),
                          n = r >= 0 ? "+" : "-",
                          o = Math.abs(r);
                        return (
                          ""
                            .concat(e.getFullYear(), "-")
                            .concat(t(e.getMonth() + 1), "-")
                            .concat(t(e.getDate()), "T") +
                          ""
                            .concat(t(e.getHours()), ":")
                            .concat(t(e.getMinutes()), ":")
                            .concat(t(e.getSeconds()), ".") +
                          ""
                            .concat(t(e.getMilliseconds(), 3))
                            .concat(n)
                            .concat(t(Math.floor(o / 60)), ":")
                            .concat(t(o % 60))
                        );
                      })(new Date(1e3 * o))
                      : void 0;
                  })(e),
                  i = ((e) => {
                    var t;
                    const r = null === (t = Ae(e)) || void 0 === t
                      ? void 0
                      : t.toString();
                    if (r) {
                      const t = mn(e, r);
                      var n;
                      if (null != t && t.firstSolveDate) {
                        return (
                          null !==
                            (n = null == t ? void 0 : t.firstSolveUsedAid) &&
                          void 0 !== n &&
                          n
                        );
                      }
                      if (!0 === (null == t ? void 0 : t.firstSolveUsedAid)) {
                        return !0;
                      }
                    }
                    const o = wn(e);
                    var a;
                    if (null != o && o.firstSolveDate) {
                      return (
                        null !==
                          (a = null == o ? void 0 : o.firstSolveUsedAid) &&
                        void 0 !== a &&
                        a
                      );
                    }
                    if (!0 === (null == o ? void 0 : o.firstSolveUsedAid)) {
                      return !0;
                    }
                    const { firsts: i } = Sn(e),
                      l = yn(e);
                    if (!l && i.timerReset) return;
                    const s = (l && !!i.timerReset) ||
                      !!i.checked ||
                      !!i.revealed ||
                      ((e) =>
                        ke(e).some(
                          (e) =>
                            e.checked ||
                            e.modified ||
                            e.revealed ||
                            e.confirmed,
                        ))(e);
                    return !!s || (!Pn(e) && void 0);
                  })(e),
                  l = ((e) => {
                    var t;
                    const r = null === (t = Ae(e)) || void 0 === t
                      ? void 0
                      : t.toString();
                    if (r) {
                      const t = mn(e, r);
                      var n;
                      if (null != t && t.firstSolveDate) {
                        return (
                          null !==
                            (n = null == t
                              ? void 0
                              : t.firstSolveRevealedOrReset) &&
                          void 0 !== n &&
                          n
                        );
                      }
                      if (
                        !0 ===
                          (null == t ? void 0 : t.firstSolveRevealedOrReset)
                      ) {
                        return !0;
                      }
                    }
                    const o = wn(e);
                    var a;
                    if (null != o && o.firstSolveDate) {
                      return (
                        null !==
                          (a = null == o
                            ? void 0
                            : o.firstSolveRevealedOrReset) &&
                        void 0 !== a &&
                        a
                      );
                    }
                    if (
                      !0 === (null == o ? void 0 : o.firstSolveRevealedOrReset)
                    ) {
                      return !0;
                    }
                    const { firsts: i } = Sn(e),
                      l = yn(e),
                      s = ((e) => ke(e).some((e) => e.revealed))(e);
                    let c = !1;
                    return (
                      (c =
                        (l && !0 === (null == o ? void 0 : o.isTimerReset)) ||
                        !!i.timerReset), !(!s && !c) || (!Pn(e) && void 0)
                    );
                  })(e),
                  s = {
                    cells: {},
                    confirmed: [],
                    penciled: [],
                    checked: [],
                    revealed: [],
                    modified: [],
                    firstSolve: o,
                    playTimeSeconds: Yr(e),
                    isAutocheckEnabled: Cn(e),
                    isTimerReset: r,
                    puzzleInfoSeen: an(e),
                    firstSolveDate: a,
                    firstSolveUsedAid: i,
                    firstSolveRevealedOrReset: l,
                    completionFraction: jn({ cells: ke(e), status: Sn(e) }),
                    star: bn.NoStar,
                  };
                ke(e).forEach((e) => {
                  const {
                    index: t,
                    guess: r,
                    penciled: n,
                    checked: o,
                    revealed: a,
                    modified: i,
                    confirmed: l,
                  } = e;
                  (r && "" !== r.trim() && (s.cells[t] = r),
                    n && s.penciled.push(t),
                    o && s.checked.push(t),
                    a && s.revealed.push(t),
                    i && s.modified.push(t),
                    l && s.confirmed.push(t));
                });
                const c = null == t ? void 0 : t.star;
                if (c === bn.Blue || c === bn.Gold) s.star = c;
                else {
                  const t = hn(),
                    r = ln(e);
                  n &&
                    ("crossword_daily" === t || ("crossword_midi" === t && r))
                    ? Dn(e) ? (s.star = bn.Gold) : (s.star = bn.Blue)
                    : (s.star = bn.NoStar);
                }
                ((e) => {
                  try {
                    var t, r;
                    const n = Yr(e),
                      o = Re(e),
                      a = "daily" === o
                        ? 18e3
                        : ["mini", "midi"].includes(o)
                        ? 7200
                        : void 0;
                    if (!a || n <= a) return;
                    const i = null === (t = Ae(e)) || void 0 === t
                        ? void 0
                        : t.toString(),
                      l = me(e),
                      s = null == l || null === (r = l.userType) || void 0 === r
                        ? void 0
                        : r.regiId;
                    (0, Zr.D)("crossword_solve_time_exceeds_threshold", {
                      puzzle_id: i,
                      regi_id: s,
                      game_type: o,
                      playTimeSeconds: n,
                      playTimeHours: parseFloat((n / 3600).toFixed(2)),
                      thresholdSeconds: a,
                    });
                  } catch (e) {
                    "prod" !== qr.OB.name &&
                      console.warn("Error in reportLongSolveTime:", e);
                  }
                })(e);
                const {
                  firstSolve: d,
                  isTimerReset: u,
                  playTimeSeconds: m,
                } = s;
                return (
                  d && d > 0 && !u && m > d && (s.playTimeSeconds = d),
                    console.log(
                      "[XWD on State] Determined state to save",
                      s,
                      Yr(e),
                      Math.floor(Date.now() / 1e3),
                    ),
                    s
                );
              },
              insertProgress: (e) => (t, r) => {
                const n = Rr(r());
                if (n === Br.LEGACY_WITH_STATE) {
                  if (
                    (console.groupCollapsed(
                      "[XWD on State Phase: LEGACY_WITH_STATE] insertProgress invoked - NOT APPLYING (monitoring only)",
                    ),
                      console.table(e),
                      console.groupEnd(),
                      e)
                  ) {
                    try {
                      const n = r(),
                        o = Xr(e, n);
                      t(gn(o));
                    } catch (e) {
                      console.error(
                        "[XWD on State Phase: LEGACY_WITH_STATE] Error transforming and recording state for logging:",
                        e,
                      );
                    }
                  }
                } else if (n === Br.READ_STATE_DUAL_WRITE) {
                  if (
                    (console.groupCollapsed(
                      "[XWD on State Phase: READ_STATE_DUAL_WRITE] insertProgress invoked - APPLYING STATE FROM STATE SERVICE",
                    ),
                      console.table(e),
                      console.groupEnd(),
                      e)
                  ) {
                    try {
                      const n = r(),
                        o = Xr(e, n);
                      t(Qr(o));
                    } catch (e) {
                      console.error(
                        "[XWD on State Phase: READ_STATE_DUAL_WRITE] Error transforming and applying state:",
                        e,
                      );
                    }
                  }
                } else if (
                  n === Br.STATE_ONLY &&
                  (console.groupCollapsed(
                    "[XWD on State Phase: STATE_ONLY] insertProgress invoked - APPLYING STATE FROM STATE SERVICE",
                  ),
                    console.table(e),
                    console.groupEnd(),
                    e)
                ) {
                  try {
                    const n = r(),
                      o = Xr(e, n);
                    t(Qr(o));
                  } catch (e) {
                    console.error(
                      "[XWD on State Phase: STATE_ONLY] Error transforming and applying state:",
                      e,
                    );
                  }
                }
              },
              shouldPreventSaveAfterLoad: (e, t, r) => {
                switch (Rr(r)) {
                  case Br.LEGACY_ONLY:
                  case Br.LEGACY_WITH_STATE:
                    return !0;
                  default:
                    return !1;
                }
              },
              onSave: (e) => (t, r) => {
                var n;
                const o = r(),
                  a = null === (n = Ae(o)) || void 0 === n
                    ? void 0
                    : n.toString();
                if (a && e) {
                  const r = {};
                  (void 0 !== e.firstSolve &&
                    e.firstSolve > 0 &&
                    (r.firstSolve = e.firstSolve),
                    void 0 !== e.firstSolveDate &&
                    (r.firstSolveDate = e.firstSolveDate),
                    void 0 !== e.firstSolveUsedAid &&
                    (r.firstSolveUsedAid = e.firstSolveUsedAid),
                    void 0 !== e.firstSolveRevealedOrReset &&
                    (r.firstSolveRevealedOrReset = e.firstSolveRevealedOrReset),
                    void 0 !== e.star &&
                    e.star !== bn.NoStar &&
                    (r.star = e.star),
                    Object.keys(r).length > 0 &&
                    t(
                      ((e, t) => ({
                        type: sn,
                        payload: { puzzleId: e, data: t },
                      }))(a, r),
                    ));
                }
              },
              disableLocalStorageEjection: (e) =>
                Rr(e) === Br.LEGACY_WITH_STATE,
            },
            En = (0, Gr.L)(_n),
            On = (0, Ur.d)(_n),
            Sn = (e) => e.status,
            kn = (0, se.createSelector)(Sn, (e) => e.currentProgress),
            Pn = (0, se.createSelector)(Sn, (e) => e.isSolved),
            xn = (0, se.createSelector)(Sn, (e) => e.loadingServerStar),
            Cn = (0, se.createSelector)(Sn, (e) => e.autocheckEnabled),
            jn = (e) => {
              let { cells: t, status: r } = e;
              const n = t.filter((e) => N(e)).length;
              return (n - ((null == r ? void 0 : r.blankCells) || 0)) / n;
            },
            Tn = (0, se.createSelector)([ke, Sn], (e, t) =>
              jn({ cells: e, status: t })),
            Dn = (0, se.createSelector)([Sn, De, de, ln], (e, t, r, n) => {
              let { firsts: o } = e;
              if (!t) {
                return !1;
              }
              switch (!0) {
                case "daily" !== t.publishStream &&
                  !(n && "midi" === t.publishStream):
                  return !1;
                case r.forceGoldStarEligibility:
                  return !0;
                case !!o.revealed:
                case !!o.timerReset:
                case !!o.checked:
                case he()().isAfter(t.goldStarCutoff):
                  return !1;
                default:
                  return !0;
              }
            }),
            Nn = (0, se.createSelector)([ze, Pn], (e, t) => {
              if (!e) {
                return "";
              }
              const { beforeStart: r, afterSolve: n } = e;
              return (t && n) || r;
            }),
            Ln = (e) => {
              const t = De(e),
                r = Rr(e),
                n = "daily" === (null == t ? void 0 : t.publishStream),
                o = "midi" === (null == t ? void 0 : t.publishStream),
                a = r === Br.READ_STATE_DUAL_WRITE || r === Br.STATE_ONLY;
              if ((n || o) && a) {
                const { serverStar: t } = e.status;
                if (t) {
                  return t;
                }
              }
              return Pn(e) ? (Dn(e) ? bn.Gold : bn.Blue) : bn.NoStar;
            },
            zn = [C, j, T, J, K],
            In = { reached: !1, seen: !1, text: "3/4 Done!", threshold: 0.75 },
            An = { reached: !1, seen: !1, text: "Halfway!", threshold: 0.5 };
          var Mn = (e) =>
            (t) =>
            (r) => {
              const n = e.getState(),
                o = t(r),
                a = e.getState();
              if (
                r.type === _r.Nw.mooglePostSuccess.type ||
                r.type === _r.Nw.mooglePostError.type
              ) {
                if (r.type === _r.Nw.mooglePostSuccess.type) {
                  const t = Rr(a);
                  if (t === Br.READ_STATE_DUAL_WRITE || t === Br.STATE_ONLY) {
                    var i, l, s;
                    const t = null === (i = r.payload) || void 0 === i
                        ? void 0
                        : i.player,
                      n = null == t || null === (l = t.stats) || void 0 === l
                        ? void 0
                        : l.crossword_daily;
                    n && e.dispatch({ type: kr, payload: Kr(n) });
                    const o =
                      null == t || null === (s = t.stats) || void 0 === s
                        ? void 0
                        : s.crossword_midi;
                    o &&
                      e.dispatch({
                        type: kr,
                        payload: ((c = o), {
                          midiStreaks: {
                            currentStreak: Math.max(0, c.streaks.current),
                            longestStreak: c.streaks.longest,
                          },
                        }),
                      });
                  }
                }
                return (xn(a) && (e.dispatch(ie(!1)), e.dispatch(P())), o);
              }
              var c;
              if (r.type === v && Dn(a)) {
                var d;
                const t = Rr(a),
                  n = t === Br.READ_STATE_DUAL_WRITE || t === Br.STATE_ONLY,
                  o = "daily" ===
                    (null === (d = De(a)) || void 0 === d
                      ? void 0
                      : d.publishStream);
                if (!n && o) {
                  ((e) => (t) =>
                    e.isLoggedIn
                      ? ((e) => {
                        const t = ""
                          .concat(Ar, "/v3/")
                          .concat(
                            e.regiId,
                            "/stats-and-streaks.json?date_start=2014-01-01&start_on_monday=true",
                          );
                        return Mr({ method: "GET", url: t }, e)
                          .then((e) =>
                            zr({
                              dailyStats: e.results.stats,
                              streaks: e.results.streaks,
                            })
                          )
                          .catch((e) => {
                            Cr.error("failed to fetch stats and streaks", e);
                          });
                      })(e)
                        .then((e) => t({ type: Sr, payload: e }))
                        .catch((e) => {
                          Cr.error(
                            "fetch stats and streaks failed: ".concat(
                              e.stack,
                            ),
                          );
                        })
                      : Promise.resolve({}))(r.payload.user)(
                      e.dispatch,
                      e.getState,
                      null,
                    );
                }
              }
              if (!de(a).showMilestones) return o;
              if (!zn.includes(r.type)) return o;
              const u = Tn(n),
                m = Tn(a);
              if (u === m) return o;
              if (
                (((e, t) => {
                  [In, An].forEach((r) => {
                    const { threshold: n } = r,
                      o = e <= n && n < t;
                    (o || (t <= n && n < e)) &&
                      Object.assign(r, { reached: o, seen: !1 });
                  });
                })(u, m),
                  ((e, t) => {
                    const r = ((e, t) => {
                        const r = Ve(e),
                          n = r && xe(t)[r.index];
                        return (
                          (null == r ? void 0 : r.unfilledCount) &&
                          !(null != n && n.unfilledCount)
                        );
                      })(e, t),
                      n = Sn(t).incorrectCells <= 0;
                    return r && !n;
                  })(n, a))
              ) {
                const e = ((e) => {
                  const { index: t } = $e(e);
                  return (e) => {
                    const r = e.reached && !e.seen;
                    return (
                      r &&
                      ((e, t) => {
                        const { text: r } = e;
                        (Er.emit("milestone", { text: r, idx: t }),
                          (e.seen = !0));
                      })(e, t), r
                    );
                  };
                })(n);
                e(In) || e(An);
              }
              return o;
            },
            Rn = r(69483),
            Bn = r.n(Rn);
          /iPad|iPhone|Safari/.test(navigator.userAgent) &&
            Bn().config({ driver: Bn().LOCALSTORAGE });
          const Un = "anon",
            Gn = (e, t) => "".concat(e || Un, "@").concat(t),
            Wn = (e) => {
              const t = new Date().getTime() - 1728e5;
              ((e) => Bn().getItem("".concat(e, "#lastPlayed")))(e).then(
                (r) => {
                  ((r && r <= t) || null === r) &&
                    ((e) => {
                      (Bn().removeItem("".concat(e, "#lastPlayed")),
                        Bn().removeItem(e));
                    })(e);
                },
              );
            };
          let Yn;
          const Hn = function () {
              let e = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Un;
              return Bn().getItem("".concat(e, "#preferences"));
            },
            Fn = "crossword/puzzle/PUZZLE_LOADED",
            qn = "crossword/puzzle/PUZZLE_ERROR",
            Zn = (e) => ({ type: qn, payload: { status: e } });
          function $n(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function Vn(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? $n(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : $n(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const Xn = (e) => {
              if (!B(e)) return e;
              const t = M(e);
              return Vn(
                Vn({}, e),
                {},
                {
                  confirmed: !0,
                  checked: e.checked && t,
                  penciled: !1,
                  revealed: !t,
                  guess: e.answer,
                },
              );
            },
            Kn = (e) => {
              if (!G(e)) return e;
              const t = M(e);
              return Vn(
                Vn({}, e),
                {},
                {
                  confirmed: t,
                  checked: !t || e.checked,
                  penciled: !t && e.penciled,
                  modified: !1,
                },
              );
            },
            Jn = (e, t, r) => {
              const {
                inPencilMode: n = !1,
                fromRebus: o = !1,
                autocheckEnabled: a = !1,
              } = r || {};
              if (z(e) && !o) return e;
              const i = Vn(
                Vn({}, e),
                {},
                { guess: t, penciled: n, modified: e.checked, confirmed: !1 },
              );
              return a ? Kn(i) : i;
            },
            Qn = (e) => (U(e) ? Jn(e, "") : e),
            eo = (e) =>
              Vn(
                Vn({}, e),
                {},
                {
                  penciled: !1,
                  revealed: !1,
                  checked: !1,
                  confirmed: !1,
                  modified: !1,
                  guess: "",
                },
              ),
            to = [
              "guess",
              "checked",
              "confirmed",
              "modified",
              "revealed",
              "penciled",
            ],
            ro = (e, t, r, n) =>
              e.map((e) => {
                if (!N(e) || !r.includes(e.index)) return e;
                const o = t(e);
                return Dr(e, o, to) ? o : Vn(Vn({}, o), {}, { timestamp: n });
              });
          function no(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function oo(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? no(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : no(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const ao = [...to, "timestamp"],
            io = (e, t) => {
              let { cells: r, status: n, timer: o } = t;
              const { firsts: a, isSolved: i, autocheckEnabled: l } = n,
                { userID: s, deviceID: c, puzzleID: d } = e,
                u = {
                  deviceID: c,
                  puzzleID: d,
                  userID: s ? parseInt(s) : null,
                },
                { sessionElapsedTime: m, resetSinceLastCommit: p } = o,
                f = r.map((e) => e.timestamp || 1 / 0).sort()[0] - 1 || 0,
                g = ((e, t) =>
                  e.map((e) =>
                    N(e)
                      ? oo(
                        oo({}, Nr(e, ao)),
                        {},
                        { timestamp: e.timestamp ? e.timestamp - t : void 0 },
                      )
                      : { blank: !0 }
                  ))(r, f),
                v = Ir();
              return oo(
                oo({}, u),
                {},
                {
                  commitID: v,
                  timestamp: he()().unix(),
                  minGuessTime: f,
                  timerDiff: m,
                  reset: p,
                  solved: i,
                  board: { cells: g },
                  firsts: a,
                  autocheckEnabled: l,
                },
              );
            },
            lo = (e, t) => {
              const r = {
                guess: "",
                label: "",
                penciled: !1,
                checked: !1,
                confirmed: !1,
                revealed: !1,
                modified: !1,
              };
              return e.map((e) =>
                e.blank
                  ? oo(
                    oo({}, r),
                    {},
                    { type: 0, clues: [], index: e.index, answer: e.answer },
                  )
                  : (e.timestamp && (e.timestamp += t), oo(oo({}, r), e))
              );
            },
            so = (e) => {
              if (!e || !e.calcs) return Promise.reject();
              const {
                  board: t,
                  minGuessTime: r,
                  calcs: n,
                  firsts: o,
                  lastCommitID: a,
                  autocheckEnabled: i = !1,
                } = e,
                {
                  secondsSpentSolving: l = 0,
                  solved: s = !1,
                  eligible: c = !1,
                } = n;
              return Promise.resolve({
                lastCommitID: a,
                cells: t ? lo(t.cells, r) : [],
                status: {
                  firsts: o,
                  isSolved: s,
                  isGoldStarEligible: c,
                  autocheckEnabled: i,
                },
                timer: { totalElapsedTime: l },
              });
            },
            co = [b, Q, Dt, Nt, Y, H, F, q, T, j, C, x, Lt, K, ee, te],
            uo = [T, j, C, x, K],
            mo = [K, Lt];
          var po = (e) => {
            let t,
              r,
              n = !1;
            const o = () => {
                n && ((n = !1), e.dispatch(It()));
              },
              a = function () {
                let e = arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                (clearInterval(t), (t = window.setInterval(o, e ? 5e3 : 3e5)));
              };
            return (
              "object" == typeof window &&
              (a(), window.addEventListener("online", () => e.dispatch(It()))),
                (t) => (o) => {
                  var i;
                  const { type: l } = o;
                  if (l === v) return ((r = o.payload.user), t(o));
                  const s = e.getState(),
                    c = Wr(s),
                    d = de(s),
                    u = t(o);
                  if (!r) return u;
                  const m = e.getState(),
                    p = Wr(m),
                    f = de(m),
                    b = Ae(m),
                    h = r.inShortzMode,
                    y = "midi" ===
                      (null === (i = window.gameData) || void 0 === i
                        ? void 0
                        : i.stream);
                  if (b) {
                    if (
                      (d.speedUpSyncInterval !== f.speedUpSyncInterval &&
                        a(f.speedUpSyncInterval),
                        co.includes(l))
                    ) {
                      const t = Nr(m, g);
                      y
                        ? Cr.log(
                          "Skipped persisting game for MIDI crossword to local storage",
                        )
                        : (((e, t, r) => {
                          const n = Gn(e, t);
                          (Bn()
                            .setItem(n, r)
                            .catch((e) => {
                              console.error("error storing game", e);
                            }),
                            (function (e) {
                              let t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : new Date().getTime();
                              Bn().setItem("".concat(e, "#lastPlayed"), t);
                            })(n));
                        })(r.regiId, b, t),
                          h &&
                          Cr.log("info: PERSISTED LOCAL GAME due to", o.type));
                      const a = mo.includes(l),
                        i = p.isLeavingGame,
                        d = !c.sessionStartTimestamp,
                        u = !p.sessionStartTimestamp,
                        f = s.status.isSolved,
                        { isSolved: v } = m.status,
                        w = a || (!d && u) || (!f && v && u);
                      (uo.includes(l) && (n = !0),
                        w &&
                        r.isLoggedIn &&
                        r.regiId &&
                        (h && Cr.time("info: PERSISTED REMOTE GAME"),
                          (Yn ? Promise.resolve(Yn) : Bn()
                            .getItem("deviceID")
                            .then(
                              (e) => (
                                (Yn = e || "".concat(Ir(), "-web")),
                                  e ||
                                  Bn()
                                    .setItem("deviceID", Yn)
                                    .catch((e) => {
                                      console.error(
                                        "error setting device id",
                                        e,
                                      );
                                    }),
                                  Yn
                              ),
                            ))
                            .then((n) => {
                              (function (e, t, r) {
                                let n = arguments.length > 3 &&
                                  void 0 !== arguments[3] &&
                                  arguments[3];
                                if (
                                  arguments.length > 4 &&
                                  void 0 !== arguments[4] &&
                                  arguments[4]
                                ) {
                                  return (
                                    console.log(
                                      "Skipping persisting progress to progress endpoint for MIDI crossword",
                                    ), Promise.resolve(void 0)
                                  );
                                }
                                const o = {
                                  now: he()().unix(),
                                  commits: [io(e, r)],
                                };
                                return (function (e, t) {
                                  let r = arguments.length > 2 &&
                                    void 0 !== arguments[2] &&
                                    arguments[2];
                                  const n = "".concat(Ar, "/v6/game"),
                                    o = "".concat(n, ".json");
                                  return Mr(
                                    {
                                      method: "PUT",
                                      url: o,
                                      data: t,
                                      isSync: r,
                                    },
                                    e,
                                  ).catch((e) => {
                                    Cr.error(
                                      "Failed to fetch puzzle progress: ",
                                      e,
                                    );
                                  });
                                })(t, o, n)
                                  .then(
                                    (e) => (
                                      console.groupCollapsed(
                                        "[XWD on Progress] syncGameState",
                                      ),
                                        console.log(
                                          "Persisting progress to progress endpoint - /svc/crosswords/v6/game.json",
                                        ),
                                        console.dir({ user: t, data: o }),
                                        console.groupEnd(),
                                        e
                                    ),
                                  )
                                  .then(so)
                                  .catch(() => {
                                    console.error("Failed to sync game state");
                                  });
                              })(
                                { deviceID: n, puzzleID: b, userID: r.regiId },
                                r,
                                t,
                                !!i,
                                y,
                              ).then((t) => {
                                (e.dispatch(
                                  k(null == t ? void 0 : t.lastCommitID),
                                ),
                                  h &&
                                  Cr.timeEnd("info: PERSISTED REMOTE GAME"));
                              });
                            })
                            .catch((e) => {
                              console.error("Failed to generate device ID:", e);
                            })));
                    }
                    return u;
                  }
                }
            );
          };
          const fo = [sr, dr, mr, pr];
          var go = (e) => {
              let t;
              return (r) => (n) => {
                const { type: o } = n;
                if (o === v) return ((t = n.payload.user), r(n));
                const a = r(n);
                return (
                  t &&
                  fo.includes(o) &&
                  ((e, t) => {
                    const { printPrefs: r, settings: n } = e;
                    Bn()
                      .setItem("".concat(t.regiId || Un, "#preferences"), {
                        printPrefs: r,
                        settings: n,
                      })
                      .catch((e) => {
                        console.error("error storing user prefs", e);
                      });
                  })(ce(e.getState()), t), a
                );
              };
            },
            vo = r(14890);
          const bo = _r.I6;
          function ho(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function yo(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? ho(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : ho(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          function wo(e) {
            var t, r;
            return (
              "" === (null == e ? void 0 : e.answer) ||
              " " === (null == e ? void 0 : e.answer) ||
              (null == e || null === (t = e.moreAnswers) || void 0 === t
                ? void 0
                : t.valid.includes("")) ||
              (null == e || null === (r = e.moreAnswers) || void 0 === r
                ? void 0
                : r.valid.includes(" "))
            );
          }
          const _o = { name: null, config: null, isClosing: !1 };
          const Eo = {
            cell: null,
            clueCells: [],
            clue: null,
            cellClues: [],
            clueList: null,
            relatedCells: [],
            relatedClues: [],
          };
          function Oo(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function So(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Oo(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : Oo(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const ko = (e, t, r) => (e[t] ? e : So(So({}, e), {}, { [t]: r }));
          var Po = (0, vo.UY)({
            firsts: function () {
              let e = arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
                t = arguments.length > 1 ? arguments[1] : void 0;
              switch (t.type) {
                case p:
                  return So(So({}, e), t.payload.status.firsts);
                case v:
                  return ko(e, "opened", t.payload.now);
                case Q:
                  return ko(e, "solved", t.payload.now);
                case j:
                  return ko(e, "revealed", t.payload.now);
                case x:
                case ee:
                  return ko(e, "checked", t.payload.now);
                case C:
                  return ko(e, "cleared", t.payload.now);
                case K:
                  return ko(e, "timerReset", t.payload.now);
                default:
                  return e;
              }
            },
            isSolved: function () {
              let e = arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = arguments.length > 1 ? arguments[1] : void 0;
              switch (t.type) {
                case K:
                  return !1;
                case Q:
                  return !0;
                case p:
                  return t.payload.status.isSolved || !1;
                default:
                  return e;
              }
            },
            isFilled: function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] &&
                arguments[0];
              switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
                case ne:
                  return !0;
                case oe:
                  return !1;
                default:
                  return e;
              }
            },
            autocheckEnabled: function () {
              let e = arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = arguments.length > 1 ? arguments[1] : void 0;
              switch (t.type) {
                case p:
                  return t.payload.status.autocheckEnabled || !1;
                case ee:
                  return !0;
                case te:
                  return !1;
                default:
                  return e;
              }
            },
            blankCells: function () {
              let e = arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
                t = arguments.length > 1 ? arguments[1] : void 0;
              switch (t.type) {
                case T:
                  return e + (t.payload.blankDelta || 0);
                case X:
                case f:
                  return t.payload.cells.filter(L).length;
                case J:
                case j:
                case C: {
                  const { blankDeltas: r } = t.payload;
                  return e + r.reduce((e, t) => e + t, 0);
                }
                case K:
                  return t.payload.affectedCells.length;
                default:
                  return e;
              }
            },
            incorrectCells: function () {
              let e = arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
                t = arguments.length > 1 ? arguments[1] : void 0;
              switch (t.type) {
                case T:
                  return e + (t.payload.incorrectDelta || 0);
                case X:
                case f:
                  return t.payload.cells.filter(R).length;
                case J:
                case j:
                case C: {
                  const { incorrectDeltas: r } = t.payload;
                  return e + r.reduce((e, t) => e + t, 0);
                }
                case K:
                  return t.payload.affectedCells.length;
                default:
                  return e;
              }
            },
            lastCommitID: function () {
              let e = arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
                t = arguments.length > 1 ? arguments[1] : void 0;
              return (t.type === b && t.payload.commitID) || e;
            },
            currentProgress: function () {
              let e = arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
                t = arguments.length > 1 ? arguments[1] : void 0;
              switch (t.type) {
                case re:
                  return t.payload.currentProgress;
                case p:
                  return Math.floor(jn(t.payload) / 0.2);
                case K:
                  return 0;
                default:
                  return e;
              }
            },
            serverStar: function () {
              let e = arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
                t = arguments.length > 1 ? arguments[1] : void 0;
              switch (t.type) {
                case p: {
                  const r = t.payload.status.serverStar;
                  return null != r ? r : e;
                }
                case _r.Nw.mooglePostSuccess.type: {
                  const { gameData: r } = t.payload;
                  return null != r && r.star ? r.star : e;
                }
                default:
                  return e;
              }
            },
            loadingServerStar: function () {
              let e = arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = arguments.length > 1 ? arguments[1] : void 0;
              switch (t.type) {
                case ae:
                  return t.payload.loading;
                case K:
                  return !1;
                default:
                  return e;
              }
            },
          });
          function xo(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function Co(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? xo(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : xo(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const jo = {
            sessionStartTimestamp: void 0,
            totalElapsedTime: 0,
            sessionElapsedTime: 0,
            resetSinceLastCommit: !1,
          };
          function To(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function Do(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? To(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : To(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const No = {
            activeMenu: null,
            inPencilMode: !1,
            inRebusMode: !1,
            rebusValue: "",
            puzzleInfoSeen: !1,
          };
          function Lo(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function zo(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Lo(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : Lo(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const Io = {
            isReady: !1,
            isSynced: !1,
            doEscape: !1,
            autoOpenedCongrats: !1,
            webSourceParam: null,
            showCongrats: !1,
            midiTitle: null,
          };
          function Ao(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function Mo(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Ao(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : Ao(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const Ro = {
            settings: ar,
            printPrefs: lr,
            access: {
              userType: {},
              isAccessDataAvailable: !1,
              canAccessPuzzle: null,
            },
          };
          function Bo(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function Uo(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Bo(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : Bo(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const Go = "crossword/printOptions/CHANGE_PRINT_OPTION";
          function Wo(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function Yo(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Wo(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : Wo(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const Ho = { version: "puzzle", showBlack: !1, showSpoiler: !0 };
          function Fo(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function qo(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Fo(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : Fo(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const Zo = { data: null, hasLoaded: !1, error: null };
          const $o = "crossword/meter/METER_LOADED",
            Vo = "crossword/meter/METER_ERROR",
            Xo = (e) => ({ type: Vo, payload: { status: e } });
          function Ko(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function Jo(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Ko(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : Ko(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const Qo = { data: null, hasLoaded: !1, error: null };
          const ea = "crossword/modal/SET_ROLLOUT",
            ta = (e) => ({ type: ea, payload: { phase: e } }),
            ra = { phase: Br.PENDING };
          const na = "crossword/toast/OPEN_TOAST",
            oa = "crossword/toast/CLOSE_TOAST",
            aa = "crossword/toast/REMOVE_TOAST",
            ia = (e) => ({ type: oa, payload: { isCancelled: e } }),
            la = () => ({ type: aa }),
            sa = { name: null, isClosing: !1 };
          const ca = (0, m.createSlice)({
              name: "midiNpe",
              initialState: { isMidiNpe: !1 },
              reducers: {
                setIsMidiNpe(e, t) {
                  e.isMidiNpe = t.payload;
                },
              },
            }),
            { setIsMidiNpe: da } = ca.actions;
          var ua = ca.reducer;
          const ma = (0, m.createSlice)({
              name: "midiMetagame",
              initialState: { isMidiMetagameEnabled: !1 },
              reducers: {
                setIsMidiMetagameEnabled(e, t) {
                  e.isMidiMetagameEnabled = t.payload;
                },
              },
            }),
            { setIsMidiMetagameEnabled: pa } = ma.actions;
          var fa = ma.reducer;
          const ga = (0, vo.UY)({
              cells: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case Fn:
                    return t.payload.cells;
                  case p:
                    return e.map((e) =>
                      N(e) ? Vn(Vn({}, e), t.payload.cells[e.index]) : e
                    );
                  case K:
                    return ro(e, eo, t.payload.affectedCells, t.payload.now);
                  case J:
                    return ro(
                      e,
                      (e) =>
                        t.payload.index <= e.index ? eo(e) : ((e) =>
                          Vn(
                            Vn({}, e),
                            {},
                            { guess: e.answer, checked: !1 },
                          ))(e),
                      t.payload.affectedCells,
                      t.payload.now,
                    );
                  case T: {
                    const r = "number" == typeof t.payload.index
                      ? [t.payload.index]
                      : [];
                    return ro(
                      e,
                      (e) => Jn(e, t.payload.value, t.payload),
                      r,
                      t.payload.now,
                    );
                  }
                  case C:
                    return ro(e, Qn, t.payload.affectedCells, t.payload.now);
                  case j:
                    return ro(e, Xn, t.payload.affectedCells, t.payload.now);
                  case x:
                  case ee:
                    return ro(e, Kn, t.payload.affectedCells, t.payload.now);
                  default:
                    return e;
                }
              },
              clues: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case Fn:
                    return t.payload.clues;
                  case f: {
                    const { cells: e, clues: r } = t.payload;
                    return r.map((t) => {
                      const r = t.cells
                        .map((t) => (wo(e[t]) ? null : e[t]))
                        .filter((e) => !!e)
                        .filter(L).length;
                      return yo(yo({}, t), {}, { unfilledCount: r });
                    });
                  }
                  case T: {
                    const { cells: r, index: n, blankDelta: o = 0 } = t.payload;
                    return e.map((e) =>
                      "number" == typeof n &&
                        e.cells.includes(n) &&
                        o &&
                        !wo(r[n])
                        ? yo(
                          yo({}, e),
                          {},
                          { unfilledCount: e.unfilledCount + o },
                        )
                        : e
                    );
                  }
                  case K:
                    return e.map((e) =>
                      yo(yo({}, e), {}, { unfilledCount: e.cells.length })
                    );
                  case C:
                  case j:
                  case J: {
                    const {
                      cells: r,
                      blankDeltas: n,
                      affectedCells: o,
                    } = t.payload;
                    return e.map((e) => {
                      const t = n
                        .filter((t, r) => {
                          return ((n = o[r]), e.cells.includes(n));
                          var n;
                        })
                        .map((e, t) => {
                          const n = o[t];
                          return wo(r[n]) ? 0 : e;
                        })
                        .reduce((e, t) => e + t, e.unfilledCount);
                      return yo(yo({}, e), {}, { unfilledCount: t });
                    });
                  }
                  default:
                    return e;
                }
              },
              firstSolve: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : un,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                if (t.type === sn) {
                  const { puzzleId: r, data: n } = t.payload;
                  return dn(dn({}, e), {}, { [r]: dn(dn({}, e[r]), n) });
                }
                return e;
              },
              meter: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : Qo,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case $o:
                    return Jo(
                      Jo({}, e),
                      {},
                      {
                        data: t.payload.meterResponse,
                        hasLoaded: !0,
                        error: null,
                      },
                    );
                  case Vo:
                    return Jo(
                      Jo({}, e),
                      {},
                      { hasLoaded: !0, error: t.payload },
                    );
                  default:
                    return e;
                }
              },
              midiNpe: ua,
              midiMetagame: fa,
              modal: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : _o,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case kt:
                    return {
                      name: t.payload.name,
                      config: t.payload.config || null,
                      isClosing: !1,
                    };
                  case Pt:
                    return { name: e.name, config: e.config, isClosing: !0 };
                  case xt:
                    return _o;
                  default:
                    return e;
                }
              },
              printOptions: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : Ho,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === Go ? Yo(Yo({}, e), t.payload) : e;
              },
              puzzle: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : Zo,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case Fn:
                    return qo(
                      qo({}, e),
                      {},
                      { data: t.payload.puzzle, hasLoaded: !0, error: null },
                    );
                  case qn:
                    return qo(
                      qo({}, e),
                      {},
                      { hasLoaded: !0, error: t.payload },
                    );
                  default:
                    return e;
                }
              },
              selection: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : Eo,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                return ("selection" in t && t.selection) || e;
              },
              stats: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case Sr:
                  case kr:
                    return Uo(Uo({}, e), t.payload);
                  default:
                    return e;
                }
              },
              status: Po,
              timer: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : jo,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case p:
                    return Co(
                      Co(Co({}, e), t.payload.timer),
                      {},
                      { sessionStartTimestamp: void 0 },
                    );
                  case b:
                    return Co(Co({}, e), {}, { resetSinceLastCommit: !1 });
                  case Dt:
                    return Co(
                      Co({}, e),
                      {},
                      {
                        sessionStartTimestamp: t.payload.now,
                        sessionElapsedTime: 0,
                      },
                    );
                  case Nt: {
                    const { now: r, isLeavingGame: n } = t.payload,
                      { sessionStartTimestamp: o, totalElapsedTime: a } = e,
                      i = o ? r - o : 0;
                    return Co(
                      Co({}, e),
                      {},
                      {
                        sessionElapsedTime: i,
                        sessionStartTimestamp: void 0,
                        totalElapsedTime: a + i,
                        isLeavingGame: n,
                      },
                    );
                  }
                  case Lt: {
                    const { sessionStartTimestamp: r, totalElapsedTime: n } = e,
                      { now: o } = t.payload,
                      a = r ? o - r : 0;
                    return Co(
                      Co({}, e),
                      {},
                      {
                        sessionElapsedTime: a,
                        sessionStartTimestamp: r ? o : void 0,
                        totalElapsedTime: n + a,
                        isLeavingGame: !1,
                      },
                    );
                  }
                  case K:
                    return {
                      totalElapsedTime: 0,
                      sessionElapsedTime: 0,
                      sessionStartTimestamp: t.payload.now,
                      resetSinceLastCommit: !0,
                    };
                  case Q:
                    return Co(Co({}, e), {}, { sessionElapsedTime: 0 });
                  default:
                    return e;
                }
              },
              toolbar: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : No,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case Bt:
                    return Do(
                      Do({}, e),
                      {},
                      { inRebusMode: !0, rebusValue: t.payload.initialValue },
                    );
                  case Ut:
                    return Do(
                      Do({}, e),
                      {},
                      { inRebusMode: !1, rebusValue: "" },
                    );
                  case Gt:
                    return Do(Do({}, e), {}, { rebusValue: t.payload });
                  case Rt:
                    return Do(Do({}, e), {}, { inPencilMode: !e.inPencilMode });
                  case "crossword/toolbar/PENCIL_MODE_ON":
                    return Do(Do({}, e), {}, { inPencilMode: !0 });
                  case "crossword/toolbar/PENCIL_MODE_OFF":
                    return Do(Do({}, e), {}, { inPencilMode: !1 });
                  case Wt: {
                    const { menu: r } = t.payload;
                    return Do(
                      Do({}, e),
                      {},
                      { activeMenu: r === e.activeMenu ? null : r },
                    );
                  }
                  case Yt:
                    return Do(Do({}, e), {}, { puzzleInfoSeen: t.payload });
                  default:
                    return e;
                }
              },
              transient: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : Io,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case v:
                    return zo(zo({}, e), {}, { isReady: !0 });
                  case b:
                    return zo(zo({}, e), {}, { isSynced: !0 });
                  case h:
                    return zo(zo({}, e), {}, { doEscape: t.payload });
                  case y:
                    return zo(zo({}, e), {}, { autoOpenedCongrats: !0 });
                  case w:
                    return zo(
                      zo({}, e),
                      {},
                      { webSourceParam: t.payload.webSourceParam },
                    );
                  case _:
                    return zo(zo({}, e), {}, { webSourceParam: null });
                  case E:
                    return zo(zo({}, e), {}, { showCongrats: !0 });
                  case O:
                    return zo(zo({}, e), {}, { showCongrats: !1 });
                  case S:
                    return zo(zo({}, e), {}, { midiTitle: t.payload });
                  default:
                    return e;
                }
              },
              user: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : Ro,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case sr:
                    return Mo(
                      Mo({}, e),
                      {},
                      { settings: Mo(Mo({}, e.settings), t.payload) },
                    );
                  case cr:
                  case dr:
                    return Mo(Mo({}, e), {}, { settings: Mo({}, t.payload) });
                  case ur:
                    return Mo(Mo({}, e), {}, { printPrefs: t.payload });
                  case pr:
                  case mr:
                    return Mo(
                      Mo({}, e),
                      {},
                      { printPrefs: Mo(Mo({}, e.printPrefs), t.payload) },
                    );
                  case fr:
                    return Mo(
                      Mo({}, e),
                      {},
                      {
                        access: Mo(
                          Mo({}, e.access),
                          {},
                          {
                            userType: Mo(Mo({}, e.access.userType), t.payload),
                          },
                        ),
                      },
                    );
                  case gr:
                    return Mo(
                      Mo({}, e),
                      {},
                      {
                        access: Mo(
                          Mo({}, e.access),
                          {},
                          { canAccessPuzzle: t.payload },
                        ),
                      },
                    );
                  case vr:
                    return Mo(
                      Mo({}, e),
                      {},
                      {
                        access: Mo(
                          Mo({}, e.access),
                          {},
                          { isAccessDataAvailable: t.payload },
                        ),
                      },
                    );
                  default:
                    return e;
                }
              },
              moogle: bo,
              rollout: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : ra,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === ea ? { phase: t.payload.phase } : e;
              },
              toast: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : sa,
                  t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                  case na:
                    return { name: t.payload.name, isClosing: !1 };
                  case oa:
                    return { name: null, isClosing: !0 };
                  case aa:
                    return sa;
                  default:
                    return e;
                }
              },
              tempLogging: vn,
            }),
            va = a.v9;
          function ba(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function ha(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? ba(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : ba(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          r(80008);
          const ya = /\d{4}-\d{2}-\d{2}/,
            wa = (e, t) => {
              if (t.platforms && !t.platforms.web) return e;
              const r = t.text.replace(/\n\n/g, "<br><br>"),
                n = ha(ha({}, t), {}, { text: r });
              return e.concat(n);
            };
          function _a(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function Ea(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? _a(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : _a(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const Oa = new RegExp(/^.+?(?=<img)/),
            Sa = new RegExp(/<img/),
            ka = new RegExp(/^\[aria-label\]/),
            Pa = (e, t) => Ea(Ea({}, e), {}, { index: t }),
            xa = (e, t, r) =>
              Ea(
                Ea({}, e),
                {},
                {
                  prev: 0 === t ? r.length - 1 : t - 1,
                  next: t === r.length - 1 ? 0 : t + 1,
                },
              ),
            Ca = (e) =>
              Ea(
                {
                  type: 0,
                  clues: [],
                  confirmed: !1,
                  checked: !1,
                  penciled: !1,
                  revealed: !1,
                  modified: !1,
                  guess: "",
                },
                e,
              ),
            ja = (e) => {
              const {
                  text: [t],
                } = e,
                r = ((e) =>
                  !(
                    !e.formatted ||
                    !Sa.test(e.formatted) ||
                    ((e.formatted = e.formatted.replace(Oa, "")), 0)
                  ))(t),
                n = ((e) =>
                  e.formatted
                    ? ka.test(e.plain)
                      ? ((e.plain = e.plain.replace(ka, "").trimStart()),
                        e.plain)
                      : e.formatted
                    : e.plain)(t);
              return Ea(
                Ea({ list: 0, cells: [] }, e),
                {},
                {
                  text: t.formatted || t.plain,
                  unfilledCount: e.cells ? e.cells.length : 1 / 0,
                  isImageClue: r,
                  alternativeAriaLabelText: n,
                },
              );
            };
          function Ta(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function Da(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Ta(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : Ta(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const Na = (e, t) => {
            return Da(
              Da({}, e),
              {},
              {
                attributes: ((r = e.attributes || []),
                  r.reduce((e, t) => {
                    let { name: r, value: n } = t;
                    if ("fill" === r) return e;
                    let o = r.startsWith("data")
                      ? r
                      : r.replace(/-([a-z])/, (e, t) => t.toUpperCase());
                    return (
                      "class" === r && (o = "className"),
                        Da(Da({}, e), {}, { [o]: n || null })
                    );
                  }, {})),
                children: e.children ? e.children.map(Na) : [],
                index: t,
              },
            );
            var r;
          };
          var La = (e) => {
              const { height: t, width: r } = e;
              return {
                rowCount: t,
                columnCount: r,
                aspectRatio: r / t,
                cellSize: Math.floor(500 / r),
              };
            },
            za = function () {
              let e = arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
                t = arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              const { beforeStart: r, afterSolve: n } = t,
                o = (t) => (null == t ? "" : (e[t - 1] || {}).uri || "");
              return { beforeStart: o(r), afterSolve: o(n) };
            };
          function Ia(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function Aa(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Ia(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : Ia(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          var Ma = (e, t) => {
            let r,
              { publicationDate: n, publishStream: o } = t;
            if ("daily" !== o) return e;
            switch (Oe(n, "MMMDDYYYY")) {
              case "Feb021995":
                r = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14];
                break;
              case "Nov022004":
                r = [
                  225,
                  226,
                  227,
                  228,
                  229,
                  230,
                  231,
                  232,
                  233,
                  234,
                  235,
                  237,
                  238,
                  239,
                ];
                break;
              case "Oct302014":
                r = [
                  0,
                  1,
                  2,
                  13,
                  14,
                  15,
                  16,
                  17,
                  30,
                  31,
                  32,
                  47,
                  208,
                  223,
                  224,
                  225,
                  238,
                  239,
                  240,
                  241,
                  242,
                  253,
                  254,
                  255,
                ];
                break;
              case "Jan062015":
                r = [60, 61, 62, 88, 89, 135, 136, 162, 163, 164];
                break;
              case "Feb142018":
                r = [
                  0,
                  1,
                  6,
                  7,
                  8,
                  9,
                  10,
                  15,
                  16,
                  17,
                  24,
                  25,
                  26,
                  33,
                  42,
                  170,
                  186,
                  187,
                  188,
                  202,
                  203,
                  204,
                  205,
                  206,
                  218,
                  219,
                  220,
                  221,
                  222,
                  223,
                  224,
                  234,
                  235,
                  236,
                  237,
                  238,
                  239,
                  240,
                  241,
                  242,
                  250,
                  251,
                  252,
                  253,
                  254,
                  255,
                  256,
                  257,
                  258,
                  259,
                  260,
                  266,
                  267,
                  268,
                  269,
                  270,
                  271,
                  272,
                  273,
                  274,
                  275,
                  276,
                  277,
                  278,
                  282,
                  283,
                  284,
                  285,
                  286,
                  287,
                  288,
                ];
                break;
              default:
                return e;
            }
            return e.map((e, t) =>
              Aa(Aa({}, e), {}, { type: r.includes(t) ? 4 : e.type })
            );
          };
          const Ra = ["assets", "body"],
            Ba = ["SVG"];
          function Ua(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function Ga(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Ua(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : Ua(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          function Wa(e, t) {
            if (null == e) return {};
            var r,
              n,
              o = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  o = {},
                  a = Object.keys(e);
                for (n = 0; n < a.length; n++) {
                  ((r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]));
                }
                return o;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (n = 0; n < a.length; n++) {
                ((r = a[n]),
                  t.indexOf(r) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (o[r] = e[r])));
              }
            }
            return o;
          }
          var Ya = (e, t) => {
            const {
                assets: r,
                body: [n],
              } = e,
              o = Wa(e, Ra),
              { SVG: a } = n,
              i = Wa(n, Ba),
              l = ((e, t) => {
                return ha(
                  ha({ category: 0 }, e),
                  {},
                  {
                    goldStarCutoff: ((r = e.publicationDate),
                      ((e) => "string" == typeof e && ya.exec(e))(r)
                        ? he()
                          .tz(r, "America/Los_Angeles")
                          .endOf("day")
                          .format()
                        : he()({ year: 3e3 }).format()),
                    notes: e.notes ? e.notes.reduce(wa, []) : e.notes,
                    publishStream: t,
                  },
                );
                var r;
              })(o, t),
              s = ((e) => {
                const t = e.cells.map(Ca).map(Pa),
                  r = e.clues.map(ja).map(xa).map(Pa),
                  n = e.clueLists
                    .map((t) =>
                      ((e, t) => {
                        const r = e.clues.map((e) =>
                          t[e]
                        );
                        return Ea(
                          Ea({}, e),
                          {},
                          {
                            cells: r.reduce(
                              (e, t) => e.concat(t.cells || []),
                              [],
                            ),
                          },
                        );
                      })(t, e.clues)
                    )
                    .map(xa)
                    .map(Pa);
                return Ea(Ea({}, e), {}, { clues: r, cells: t, clueLists: n });
              })(i);
            return Ga(
              Ga({ meta: l }, s),
              {},
              {
                cells: Ma(s.cells, l),
                dimensions: La(i.dimensions),
                board: ((c = a), Na(c)),
                overlays: za(r, i.overlays),
              },
            );
            var c;
          };
          const Ha = ["cells", "clues"];
          const Fa = (e) =>
              l.Be.get("".concat(Ar, "/v6/puzzle/").concat(e, ".json"), {
                withStatus: !0,
                headers: { "X-Games-Auth-Bypass": "true" },
              }),
            qa = (e, t) => (r, n) => {
              je(n()) ||
                Fa(e)
                  .then((e) => {
                    if (200 === e.status) {
                      const n = Ya(e, t),
                        { cells: o, clues: a } = n,
                        i = (function (e, t) {
                          if (null == e) return {};
                          var r,
                            n,
                            o = (function (e, t) {
                              if (null == e) return {};
                              var r,
                                n,
                                o = {},
                                a = Object.keys(e);
                              for (n = 0; n < a.length; n++) {
                                ((r = a[n]),
                                  t.indexOf(r) >= 0 || (o[r] = e[r]));
                              }
                              return o;
                            })(e, t);
                          if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < a.length; n++) {
                              ((r = a[n]),
                                t.indexOf(r) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                  e,
                                  r,
                                ) &&
                                  (o[r] = e[r])));
                            }
                          }
                          return o;
                        })(n, Ha);
                      (r(
                        ((e, t, r) => ({
                          type: Fn,
                          payload: { cells: e, clues: t, puzzle: r },
                        }))(o, a, i),
                      ),
                        r(((e) => ({ type: X, payload: { cells: e } }))(o)));
                    } else r(Zn(e.status));
                  })
                  .catch((e) => {
                    (console.error(e), r(Zn(e.status)));
                  });
            };
          var Za = r(81853),
            $a = r(19406),
            Va = r(9478);
          function Xa(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function Ka(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Xa(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : Xa(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const Ja = (e) => {
            let t,
              r = window.location.href;
            void 0 !== e &&
              ({ puzzleUrl: r = window.location.href, level: t } = e);
            const n = (0, s.jL)(r);
            let o = {};
            return (
              void 0 !== t &&
              (o = Ka(
                Ka({}, o),
                {},
                { headers: { "NYT-M-Level": window.btoa(t.toString()) } },
              )),
                Va.fF.isMeterInDebugMode ||
                  !window.abra ||
                  window.isHybridWebView ||
                  window.gamesAppPlatform ||
                  window.newsreaderAppPlatform
                  ? (0, Va.WO)(r, t)
                  : l.Be.get(n, o)
                    .then((e) => {
                      (0, Za.kg)(
                        "Meter service request succeeded",
                        [n, r, t],
                        e,
                      );
                      const o = Ka(Ka({}, e), {}, { isOffline: !1 });
                      return ((0, s.K7)(o), o);
                    })
                    .catch(
                      (e) => (
                        (0, Za.kg)(
                          "Meter service request failed",
                          [n, r, t],
                          e,
                        ),
                          (() => {
                            const e = (0, s.lJ)(),
                              t = Ka(Ka({}, e), {}, { isOffline: !0 });
                            var r;
                            return (
                              !(r = t).granted ||
                                (r.grantReason !== $a.Q.IP &&
                                  r.grantReason !== $a.Q.SUBSCRIBER &&
                                  r.grantReason !== $a.Q.OPEN &&
                                  r.grantReason !== $a.Q.REFERRER &&
                                  r.grantReason !== $a.Q.FREETIME)
                                ? (0, Za.kg)(
                                  "Game is instructed not fail open due to previous grantReason",
                                  [e.grantReason],
                                )
                                : (0, Za.kg)(
                                  "Game is instructed to fail open based on previous grantReason",
                                  [e.grantReason],
                                ), t
                            );
                          })()
                      ),
                    )
            );
          };
          var Qa = () => (e) => (t) => {
              if (!t.meta || !t.meta.delay) return e(t);
              const r = setTimeout(() => e(t), t.meta.delay);
              return function () {
                clearTimeout(r);
              };
            },
            ei = r(78986),
            ti = r(76773),
            ri = r(28426),
            ni = r(77336),
            oi = r(99596),
            ai = r(26441),
            ii = r(919),
            li = r(41405),
            si = r(53789),
            ci = r(57256),
            di = r(42983);
          const ui = "freeFromArchiveEndScreen";
          function mi(e, t, r) {
            return 15824 === e ? t : 22390 === e && r;
          }
          const pi = (e) => e.moogle.player,
            fi = (0, se.createSelector)(
              pi,
              (e) => e.moogle.getPuzzleProgress.isLoading,
              (e, t) => {
                var r, n;
                return (
                  !t &&
                  0 ===
                    (null !==
                          (r = null == e ||
                              null === (n = e.stats) ||
                              void 0 === n ||
                              null === (n = n.crossword_midi) ||
                              void 0 === n
                            ? void 0
                            : n.puzzlesSolved) && void 0 !== r
                      ? r
                      : 0)
                );
              },
            ),
            gi = (0, se.createSelector)(pi, (e) => {
              var t, r;
              return null !==
                    (t = null == e ||
                        null === (r = e.stats) ||
                        void 0 === r ||
                        null === (r = r.crossword_midi) ||
                        void 0 === r ||
                        null === (r = r.streaks) ||
                        void 0 === r
                      ? void 0
                      : r.current) && void 0 !== t
                ? t
                : 0;
            }),
            vi = (0, se.createSelector)(
              (e) => e.midiNpe,
              (e) => e.isMidiNpe,
            ),
            bi = (e, t) => {
              const r = ((e) => {
                  switch (e) {
                    case $t.Fifty:
                      return 0.5;
                    case $t.SeventyFive:
                      return 0.75;
                    default:
                      return 1;
                  }
                })(t),
                n = e.filter((e) => N(e));
              return n[Math.ceil(n.length * r - 1)].index;
            },
            hi = (e, t) => {
              const { cells: r, selection: n } = e;
              return (
                r &&
                r.filter((e, r) => {
                  switch (t) {
                    case $t.Letter:
                      return n && n.cell === r;
                    case $t.Word:
                      return n && n.clueCells.includes(r);
                    case $t.Puzzle:
                    default:
                      return !0;
                  }
                })
              );
            },
            yi = (e) => {
              let { cells: t, clues: r, selection: n } = e;
              return (n ? n.clueCells.map((e) => t && t[e]) : []).filter(
                (e) => {
                  const t = null == e ? void 0 : e.clues.filter(
                    (e) => e !== (null == n ? void 0 : n.clue),
                  );
                  return null == t
                    ? void 0
                    : t.some((e) => r && r[e].unfilledCount > 0);
                },
              );
            },
            wi = (e, t) => (t === $t.Unchecked ? yi : hi)(e, t),
            _i = (e, t, r) => {
              const n = wi(e, r),
                o = ((e) => {
                  switch (e) {
                    case x:
                    case ee:
                      return G;
                    case j:
                      return B;
                    case J:
                    case K:
                      return N;
                    default:
                      return U;
                  }
                })(t);
              return null == n ? void 0 : n.filter(o);
            },
            Ei = (e, t, r, n) => (z(e) && !n ? 0 : t !== r ? (t ? 1 : -1) : 0),
            Oi = (e, t, r) => Ei(e, !t, L(e), !!r),
            Si = (e, t, r) => Ei(e, !A(e, t), R(e), !!r),
            ki = (e) => (t, r) => {
              const n = r(),
                o = Re(n),
                a = Ae(n),
                i = Yr(n);
              if (a) {
                if (0 === i) {
                  const e = "midi" === o
                    ? "midi-page"
                    : "mini" === o
                    ? "mini-page"
                    : "game-page";
                  (0, Zt.$)("click", a, e, "start-game");
                }
                t({ type: v, payload: { now: he()().unix(), user: e } });
              }
            };
          let Pi = (function (e) {
            return (
              (e.Pause = "Pause"),
                (e.Info = "Info"),
                (e.Settings = "Settings"),
                (e.Rats = "Rats"),
                (e.Print = "Print"),
                (e.Confirmation = "Confirmation"),
                (e.Share = "Share"),
                (e.EditorWelcomeNote = "EditorWelcomeNote"),
                e
            );
          })({});
          const xi = [
              { id: 14177, anchor: "monday-level-easy" },
              { id: 14050, anchor: "fill-in-the-blanks" },
              { id: 14041, anchor: "tense" },
              { id: 14044, anchor: "tense" },
              { id: 14045, anchor: "tense" },
              { id: 14042, anchor: "tense" },
              { id: 14047, anchor: "partners" },
              { id: 14046, anchor: "partners" },
              { id: 14043, anchor: "partners" },
              { id: 14048, anchor: "question-marks" },
              { id: 14049, anchor: "question-marks" },
              { id: 14051, anchor: "question-marks" },
              { id: 14052, anchor: "question-marks" },
              { id: 14053, anchor: "rebus" },
            ],
            Ci = xi.map((e) => e.id),
            ji = (e) => {
              const t = xi.find((t) => t.id === e);
              return t ? t.anchor : "";
            },
            Ti = () => {
              const e = document.getElementById("strut");
              e instanceof HTMLAudioElement && e.load();
            },
            Di = () => {
              const { isReady: e, isMidiEnabled: t } = (0, di.P)(),
                { isNewsreaderApp: r } = (0, Za.vB)(),
                n = (0, a.v9)(Be),
                o = (0, a.v9)(Ge);
              return e && t && !r && (n || o);
            },
            Ni = () => (e, t) => {
              const r = t(),
                n = $e(r),
                o = Be(r),
                a = Ue(r);
              if (!z(n)) {
                const t = Ae(r),
                  l = a ? "midi-page" : o ? "mini-page" : "game-page";
                ((0, Zt.$)("click", t, l, "rebus"),
                  e(
                    ((i = (null == n ? void 0 : n.guess) || ""),
                      { type: Bt, payload: { initialValue: i } }),
                  ));
              }
              var i;
            },
            Li = (e) => (t, r) => {
              const n = r(),
                o = nn(n);
              if (e) {
                const e = (function () {
                  return (
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : ""
                  )
                    .toUpperCase()
                    .trim();
                })(o);
                t(Mi(e, !0));
              }
              t({ type: Ut });
            },
            zi = () => (e, t) => {
              const r = t();
              e(rn(r) ? Li(!0) : Ni());
            },
            Ii = [20, 40, 60, 80],
            Ai = () => (e, t) => {
              const r = t(),
                n = ze(r),
                { status: o } = r,
                { incorrectCells: a, blankCells: i, isFilled: l } = o;
              let s = "";
              const c = 0 === i,
                d = 0 === a,
                u = c && !d,
                m = !c,
                p = Boolean(null == n ? void 0 : n.afterSolve);
              if (d) {
                s = Q;
                const t = Be(r),
                  n = Ue(r),
                  a = !t && !n,
                  i = Rr(r),
                  l = i === Br.READ_STATE_DUAL_WRITE || i === Br.STATE_ONLY,
                  c = null !== o.serverStar,
                  d = ln(r);
                if ((Ti(), (a || (n && d)) && l && !c)) {
                  const t = Ae(r);
                  t
                    ? (e(ie(!0)),
                      e(_r.Nw.forceSave({ puzzleId: t.toString() })))
                    : e(P(p ? 2e3 : 0));
                } else e(p ? P(2e3) : P());
              } else u && !l ? ((s = ne), e(Ct(Pi.Rats))) : m && l && (s = oe);
              (e((e, t) => {
                const r = t(),
                  n = Ae(r),
                  o = kn(r),
                  a = Yr(r),
                  i = Hr(r);
                if (!n) return;
                const l = Be(r),
                  s = Ue(r) ? "midi-page" : l ? "mini-page" : "game-page",
                  c = Tn(r),
                  d = Math.floor(c / 0.2),
                  u = ye(a, i);
                if (d > o) {
                  for (let e = o; e < d && e < Ii.length; e += 1) {
                    (0, Zt.$)(
                      "click",
                      n,
                      s,
                      "".concat(Ii[e], "%-complete"),
                      "".concat(u),
                    );
                  }
                  e({ type: re, payload: { currentProgress: d } });
                }
              }),
                s && e({ type: s, payload: { now: he()().unix() } }));
            },
            Mi = (e, t) => (r, n) => {
              const o = n(),
                { isSolved: a, autocheckEnabled: i } = Sn(o),
                l = ke(o);
              if (a) return;
              const s = $e(o),
                { inPencilMode: c } = o.toolbar;
              (r({
                type: T,
                payload: {
                  blankDelta: s && Oi(s, e),
                  incorrectDelta: s && Si(s, e),
                  index: s && s.index,
                  inPencilMode: c,
                  autocheckEnabled: i,
                  value: e,
                  fromRebus: !!t,
                  now: he()().unix(),
                  cells: l,
                },
              }),
                r(Ai()));
            },
            Ri = (e, t) => (r, n) => {
              const o = n(),
                a = wi(o, t),
                i = _i(o, e, t),
                l = ((e, t) => {
                  switch (e) {
                    case J:
                      return (e) => (e.index >= t ? "" : e.answer);
                    case j:
                      return (e) => e.answer;
                    default:
                      return () => "";
                  }
                })(e, bi(o.cells, t)),
                s = e === J,
                c = ke(o),
                d = {
                  scope: null != t ? t : void 0,
                  cellsInScope: a.map((e) => e.index),
                  affectedCells: i.map((e) => e.index),
                  blankDeltas: i.map((e) => Oi(e, l(e), s)),
                  incorrectDeltas: i.map((e) => Si(e, l(e), s)),
                  now: he()().unix(),
                  cells: c,
                };
              (s && Object.assign(d, { index: bi(o.cells, t) }),
                r({ type: e, payload: d }),
                e === K && r(Jr()),
                r(Ai()));
            },
            Bi = function (e) {
              let t = arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
              return (r, n) => {
                const o = n(),
                  a = Dn(o),
                  { suppressDisqualificationWarnings: i } = de(o),
                  { isSolved: l } = Sn(o);
                if (l) return void (e === K && (r(Li(!1)), r(Ri(e, t))));
                const s = t === $t.Puzzle && e !== x,
                  c = [x, j, K, ee].includes(e) && a && !i;
                return r(
                  c || s
                    ? Ct(Pi.Confirmation, {
                      needToWarn: c,
                      actionType: e,
                      scope: t,
                    })
                    : Ri(e, t),
                );
              };
            },
            Ui = () => (e, t) => {
              const r = t(),
                n = Ae(r),
                o = Be(r),
                a = Ue(r) ? "midi-page" : o ? "mini-page" : "game-page";
              Cn(r)
                ? (e({ type: te }),
                  (0, Zt.$)("gameplay", n, a, "auto-check", "turn-off"))
                : (e(Bi(ee)),
                  (0, Zt.$)("gameplay", n, a, "auto-check", "turn-on"));
            },
            Gi = (e) => (t, r) => {
              const n = r(),
                o = Ae(n);
              if (!o) return;
              const a = ((e, t) => Bn().getItem(Gn(e.regiId, t)))(e, o).catch(
                  () => (Cr.debug("error fetching local progress"), null),
                ),
                i = ((e, t, r) => {
                  const n = e.isLoggedIn
                    ? ((e, t) => {
                      const r = "".concat(Ar, "/v6/game/").concat(t),
                        n = "".concat(r, ".json");
                      return Mr({ method: "GET", url: n }, e);
                    })(e, t).then((e) => r(e))
                    : Promise.resolve(null);
                  return n;
                })(e, o, so).catch(
                  () => (Cr.debug("error fetching remote progress"), null),
                );
              Promise.all([a, i]).then((r) => {
                var n;
                let [o, a] = r;
                const i = ((e, t) => {
                    var r;
                    return (
                      !t ||
                      !t.lastCommitID ||
                      (null == e || null === (r = e.status) || void 0 === r
                          ? void 0
                          : r.lastCommitID) === t.lastCommitID
                    );
                  })(o, a),
                  l = i ? o : a,
                  s = i
                    ? null == o || null === (n = o.status) || void 0 === n
                      ? void 0
                      : n.lastCommitID
                    : null == a
                    ? void 0
                    : a.lastCommitID;
                (l && (t(fn(l)), t(Qr(l))),
                  t(
                    ((e, t) => (r, n) => {
                      r(k(t));
                      const o = n(),
                        a = de(o);
                      if (si.tq) return;
                      const { status: i } = o;
                      (a.showTimer && !i.isSolved) || r(ki(e));
                    })(e, s),
                  ));
              });
            },
            Wi = () => (e, t) => {
              const { user: r } = t(),
                { settings: n } = r;
              return e("toggle" === n.spaceTriggers ? Z() : Mi(""));
            };
          function Yi(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function Hi(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Yi(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : Yi(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          var Fi,
            qi,
            Zi = r(71641),
            $i = r(4311);
          function Vi(e, t) {
            return (
              t || (t = e.slice(0)),
                Object.freeze(
                  Object.defineProperties(e, {
                    raw: { value: Object.freeze(t) },
                  }),
                )
            );
          }
          const Xi = (0, $i.Ps)(
              Fi ||
                (Fi = Vi([
                  "\n  query UserNewsletterSubscriptions {\n    user {\n      newsletterSubscriptions {\n        newsletters {\n          productCode\n          isFreeTrial\n          freeTrialSignupTime\n        }\n      }\n    }\n  }\n",
                ])),
            ),
            Ki = (0, $i.Ps)(
              qi ||
                (qi = Vi([
                  "\n  mutation SubscribeToNewsletters(\n    $input: CreateNoCaptchaNewsletterSubscriptionInput!\n  ) {\n    createNoCaptchaNewsletterSubscription(input: $input) {\n      message\n    }\n  }\n",
                ])),
            );
          function Ji(e, t) {
            var r;
            const {
                user: { isLoggedIn: n },
              } = (0, ii.aF)(),
              {
                data: o,
                loading: a,
                error: i,
              } = (0, Zi.a)(Xi, { skip: !n || t }),
              l = e.toUpperCase(),
              s = null == o ||
                  null === (r = o.user) ||
                  void 0 === r ||
                  null === (r = r.newsletterSubscriptions) ||
                  void 0 === r
                ? void 0
                : r.newsletters;
            return {
              isSubscribed: Boolean(
                null == s ? void 0 : s.some((e) => {
                  var t;
                  return (
                    (null === (t = e.productCode) || void 0 === t
                      ? void 0
                      : t.toUpperCase()) === l
                  );
                }),
              ),
              isLoadingQuery: a,
              queryError: i,
            };
          }
          const Qi = (e) => e.transient,
            el = (0, se.createSelector)(Qi, (e) => e.isReady),
            tl = (0, se.createSelector)(Qi, (e) => e.doEscape),
            rl = (0, se.createSelector)(Qi, (e) => e.autoOpenedCongrats),
            nl = (0, se.createSelector)(Qi, (e) => e.webSourceParam),
            ol = (0, se.createSelector)(nl, (e) => e === ui),
            al = (0, se.createSelector)(Qi, (e) => e.showCongrats),
            il = (0, se.createSelector)(Qi, (e) => e.isSynced),
            ll = (0, se.createSelector)(Qi, (e) => e.midiTitle);
          var sl = () => {
              const { client: e } = (0, ai.g_)(),
                { isStatsigReady: t } = (0, ai.of)(),
                r = (0, a.v9)(Rr),
                o = (0, a.I0)(),
                i = (0, n.useMemo)(
                  () =>
                    t
                      ? e
                        .getDynamicConfig("games_xwd_write_config")
                        .get("write_location") || "progress"
                      : null,
                  [t, e],
                ),
                l = (0, n.useMemo)(
                  () =>
                    t
                      ? e
                        .getDynamicConfig("games_xwd_read_config")
                        .get("read_location") || "progress"
                      : null,
                  [t, e],
                );
              return (
                (0, n.useEffect)(() => {
                  var e;
                  "midi" ===
                      (null === (e = window.gameData) || void 0 === e
                        ? void 0
                        : e.stream)
                    ? o(ta(Br.STATE_ONLY))
                    : r === Br.PENDING &&
                      t &&
                      i &&
                      l &&
                      o(
                        ta(
                          "state" === i
                            ? Br.STATE_ONLY
                            : "state" === l && "both" === i
                            ? Br.READ_STATE_DUAL_WRITE
                            : "both" === i
                            ? Br.LEGACY_WITH_STATE
                            : Br.LEGACY_ONLY,
                        ),
                      );
                }, [t, r, o, i, l]),
                  (0, n.useEffect)(() => {
                    r === Br.LEGACY_ONLY &&
                      (0, Zr.D)("xwd_on_state_legacy_only");
                  }, [r]),
                  {
                    phase: r,
                    writeEnabled: r === Br.LEGACY_WITH_STATE ||
                      r === Br.STATE_ONLY ||
                      r === Br.READ_STATE_DUAL_WRITE,
                    statsigConfig: { writeLocation: i, readLocation: l },
                  }
              );
            },
            cl = r(52200),
            dl = r(67374);
          const ul = () => {
              var e, t;
              const r = "mini" ===
                  (null === (e = window.gameData) || void 0 === e
                    ? void 0
                    : e.stream),
                n = "midi" ===
                  (null === (t = window.gameData) || void 0 === t
                    ? void 0
                    : t.stream);
              return r ? "mini" : n ? "midi" : "daily";
            },
            ml = function () {
              let e = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
              return "midi" === e
                ? "midi-page"
                : "mini" === e
                ? "mini-page"
                : "game-page";
            };
          var pl = r(99903),
            fl = r.n(pl),
            gl = r(1558),
            vl = r.n(gl),
            bl = r(26317);
          const hl = /Easy\sMode\sNo.\s+[0-9]\d*$/,
            yl = (e) =>
              e && e.length > 1 ? e[0].toUpperCase() + e.slice(1) : "",
            wl = (e) => "cell-id-".concat(e),
            _l = (e) =>
              e && 0 !== e.length
                ? 1 === e.length ? e[0].toString() : [e.slice(0, -1).join(", ")]
                  .concat(e.slice(-1).map((e) => e.toString()))
                  .join(" and ")
                : "",
            El = (e) => (void 0 === e ? "By" : hl.test(e) ? "Grid by" : "By"),
            Ol = (e) => {
              const t = "Edited by";
              return void 0 === e ? t : hl.test(e) ? "Clues by" : t;
            },
            Sl = (0, n.createContext)({
              isErsatzShortz: !1,
              inShortzMode: !1,
              setShortzMode: () => {},
            }),
            kl = (e) => {
              let { children: t } = e;
              const {
                  user: { inShortzMode: r },
                } = (0, ii.aF)(),
                [o, a] = (0, n.useState)(!1);
              (0, n.useEffect)(() => {
                r &&
                  Bn()
                    .getItem("shortz-toggle")
                    .then((e) => {
                      a(!!e);
                    });
              }, [r]);
              const i = (0, n.useCallback)(
                  (e) => {
                    (a(e),
                      ((e) => {
                        Bn()
                          .setItem("shortz-toggle", e)
                          .catch((e) => {
                            console.error(
                              "error setting shortz toggle state",
                              e,
                            );
                          });
                      })(e));
                  },
                  [a],
                ),
                l = (0, n.useMemo)(
                  () => ({
                    isErsatzShortz: r,
                    inShortzMode: r && o,
                    setShortzMode: i,
                  }),
                  [r, o, i],
                );
              return n.createElement(Sl.Provider, { value: l }, t);
            },
            Pl = () => (0, n.useContext)(Sl),
            xl = () => {
              var e;
              const t = null === (e = window.location) || void 0 === e
                ? void 0
                : e.pathname;
              return /tips-and-tricks/.test(t)
                ? "Tips & Tricks"
                : /special/.test(t)
                ? "Special Puzzle"
                : void 0;
            },
            Cl = (e) => {
              const t = e
                .replace(/^["'""''«»‹›„‚]+|["'""''«»‹›„‚]+$/g, "")
                .replace(/'/g, "’");
              return "“".concat(t, "”");
            },
            jl = function () {
              let e = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
              return ["mini", "midi"].includes(e)
                ? "The ".concat(yl(e))
                : "The Crossword";
            },
            Tl = function (e) {
              let t = arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "";
              return e ? Cl(e) : jl(t);
            },
            Dl = function (e) {
              if (
                "bonus" ===
                  (arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "")
              ) {
                return Oe(e, "MMMM YYYY");
              }
              const t = Oe(e, "dddd"),
                r = Oe(e, "MMMM D, YYYY");
              return "".concat(t, ", ").concat(r);
            };
          function Nl(e) {
            let {
              constructors: t,
              editor: r = "",
              publicationDate: o,
              title: i,
              id: l,
            } = e;
            const { inShortzMode: s } = Pl(),
              c = (0, a.v9)(Re),
              d = jl(c),
              u = _l(t),
              m = xl(),
              p = s &&
                n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(
                    "a",
                    {
                      className: "xwd__details--link",
                      href: "https://admin.games.prd.nyt.net/console/xwd/edit/"
                        .concat(
                          l,
                        ),
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    "Edit #".concat(l),
                  ),
                  " | ",
                  n.createElement(
                    "a",
                    {
                      className: "xwd__details--link",
                      href: "/svc/crosswords/v6/puzzle/".concat(l, ".json"),
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    "View JSON",
                  ),
                );
            return n.createElement(
              "div",
              { className: "xwd__details--container" },
              m
                ? n.createElement("div", { className: "xwd__details--date" }, m)
                : n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(
                    "div",
                    { className: "xwd__details--title" },
                    d,
                  ),
                  n.createElement(
                    "div",
                    { className: "xwd__details--date" },
                    Dl(o, c),
                  ),
                ),
              p,
              n.createElement(
                "div",
                { className: "xwd__details--byline" },
                i && n.createElement("span", null, Cl(i)),
                u &&
                  n.createElement(
                    "span",
                    null,
                    "".concat(El(i), " ").concat(u),
                  ),
                r &&
                  n.createElement(
                    "span",
                    null,
                    "".concat(Ol(i), " ").concat(r),
                  ),
              ),
            );
          }
          var Ll = r(94184),
            zl = r.n(Ll);
          function Il(e) {
            const {
                meta: {
                  constructors: t,
                  editor: r,
                  publishStream: o,
                  publicationDate: a,
                  title: i,
                },
                isInfo: l = !1,
                showDate: s = !0,
              } = e,
              c = _l(t);
            return n.createElement(
              n.Fragment,
              null,
              s &&
                n.createElement(
                  "div",
                  { className: "xwd__start-modal--date" },
                  Dl(a, o),
                ),
              n.createElement(
                "div",
                {
                  className: zl()("xwd__details--byline", {
                    "xwd__details--byline-info": l,
                  }),
                },
                c &&
                  n.createElement(
                    "span",
                    null,
                    "".concat(El(i), " ").concat(c),
                  ),
                r &&
                  n.createElement(
                    "span",
                    null,
                    "".concat(Ol(i), " ").concat(r),
                  ),
              ),
            );
          }
          var Al,
            Ml = r(52809),
            Rl = r(77242),
            Bl = r(33064),
            Ul = r(86128);
          const Gl = (Wl = {
            prod:
              "https://www.nytimes.com/subscription/games-offer?campaignId=8YUQL",
            stg:
              "https://www.stg.nytimes.com/subscription/games-offer?campaignId=8YUQL",
            dev:
              "https://www.stg.nytimes.com/subscription/games-offer?campaignId=8YUQL",
          })[
            (null === (Al = window.env) || void 0 === Al ? void 0 : Al.name) ||
            "dev"
          ] || Wl.dev;
          var Wl;
          const Yl = window.location.origin + window.location.pathname,
            Hl = "".concat(Gl, "&EXIT_URI=").concat(Yl),
            Fl = (0, Ul.f0)({
              redirect_uri: encodeURIComponent(Hl),
              response_type: "cookie",
              client_id: "games",
              application: "crosswords",
            }),
            ql = "".concat(l.env.account, "/auth/enter-email?").concat(Fl);
          let Zl = (function (e) {
            return ((e.REGISTRATION_SUCCESS = "registrationSuccess"), e);
          })({});
          const $l = (e) => {
            let {
              children: t,
              delayStep: r = 25,
              className: o,
              animateIn: a = !0,
            } = e;
            const i = n.useRef(null),
              [l, s] = n.useState(!1);
            return (
              n.useEffect(() => {
                (i.current &&
                  Array.from(i.current.children).forEach((e, t) => {
                    const n = "".concat(t * r, "ms");
                    e.style.transitionDelay = n;
                  }),
                  s(a));
              }, [a, r]),
                n.createElement(
                  "div",
                  {
                    ref: i,
                    className: zl()(o, {
                      "SequenceAnimation-module_in__QL6mR": l,
                      "SequenceAnimation-module_out__txXNu": !l,
                    }),
                  },
                  t,
                )
            );
          };
          function Vl() {
            return (
              (Vl = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) {
                    Object.prototype.hasOwnProperty.call(r, n) &&
                      (e[n] = r[n]);
                  }
                }
                return e;
              }), Vl.apply(this, arguments)
            );
          }
          var Xl = (e) => {
              let { game: t } = e;
              return n.createElement(
                dl.im,
                Vl(
                  { bgColor: t.bgColor },
                  t.wrapperClassName && { className: t.wrapperClassName },
                ),
                n.createElement(
                  "div",
                  { className: "pz-moment__container alternate" },
                  n.createElement(dl.Sx, {
                    trackData: t.game
                      ? { elementName: t.game, moduleLabel: "welcome" }
                      : void 0,
                  }),
                  n.createElement(
                    $l,
                    { className: "pz-moment__content" },
                    n.createElement(dl.JO, { icon: t.icon, size: "medium" }),
                    n.createElement(dl.Dx, {
                      text: t.title,
                      level: "2",
                      size: "large",
                    }),
                    t.promoteMeta &&
                      t.meta &&
                      n.createElement(dl.h_, {
                        text: t.meta,
                        className: "pz-moment__meta-large",
                      }),
                    n.createElement(
                      dl.dk,
                      Vl({}, t.description, { level: "3" }),
                    ),
                    !t.promoteMeta &&
                      t.meta &&
                      n.createElement(dl.h_, { text: t.meta }),
                    null !== (r = t.buttonGroups) && void 0 !== r && r.length
                      ? t.buttonGroups.map((e, t) => {
                        let {
                          buttons: r,
                          header: o,
                          desktopButtonOrder: a,
                        } = e;
                        return n.createElement(dl.hE, {
                          key: t,
                          buttons: r,
                          header: o,
                          order: a,
                        });
                      })
                      : null !== (o = t.customButtons) &&
                          void 0 !== o &&
                          o.length
                      ? n.createElement(dl.hE, {
                        key: "welcome-buttons",
                        buttons: t.customButtons,
                        order: "vertical",
                      })
                      : null,
                    n.createElement(
                      "p",
                      { className: "pz-moment__info" },
                      n.createElement(
                        "span",
                        { className: "visually-hidden" },
                        "Game information",
                      ),
                      n.createElement(dl.Ej, { date: t.date }),
                      n.createElement(dl.ML, { editor: t.editor }),
                      t.infoText && n.createElement(dl.XU, null, t.infoText),
                    ),
                    n.createElement(dl.FG, { promo: t.promo }),
                  ),
                ),
              );
              var r, o;
            },
            Kl = r(16839),
            Jl = r(63399),
            Ql = r(66946),
            es = r(595),
            ts = r(80378);
          function rs() {
            return (
              (rs = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) {
                    Object.prototype.hasOwnProperty.call(r, n) &&
                      (e[n] = r[n]);
                  }
                }
                return e;
              }), rs.apply(this, arguments)
            );
          }
          const ns = (e) => e.modal,
            os = (0, se.createSelector)(ns, (e) => e.name),
            as = (0, se.createSelector)(os, (e) => !!e),
            is = (0, se.createSelector)(
              ns,
              (e) =>
                e.config || { actionType: "", scope: null, needToWarn: !1 },
            ),
            ls = (0, se.createSelector)(ns, (e) => e.isClosing);
          var ss = r(88494);
          function cs(e) {
            let { notes: t } = e;
            const [r, o] = n.useState(!1),
              a = n.createElement(
                "p",
                { key: "revealer", className: "xwd__notes--revealer" },
                n.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => {
                      (o(!0), e.preventDefault());
                    },
                  },
                  "Reveal Answer",
                ),
              );
            return t && t.length
              ? n.createElement(
                "aside",
                { className: "xwd__notes--wrapper" },
                n.createElement(
                  "h3",
                  { className: "xwd__notes--title" },
                  "Note",
                ),
                n.createElement(
                  "div",
                  {
                    className: zl()({
                      "xwd__notes--content-container": !si.tq,
                    }),
                  },
                  t.map((e) => {
                    const t = zl()("xwd__notes--content", {
                        "xwd__notes--spoiler": e.spoiler,
                        "xwd__notes--spoiled": e.spoiler && r,
                      }),
                      o = n.createElement(
                        "div",
                        { key: e.text, className: t },
                        e.spoiler && n.createElement("div", null, "ANSWER"),
                        n.createElement("p", {
                          id: "note-text",
                          dangerouslySetInnerHTML: { __html: e.text },
                        }),
                      );
                    return e.spoiler && !r ? a : o;
                  }),
                ),
              )
              : null;
          }
          const ds = [
              "So close.",
              "Almost there.",
              "The end’s in sight.",
              "Nearly.",
              "Just about.",
              "Not far-off.",
              "Close, but not quite.",
            ],
            us = [
              "Confound it.",
              "Grrrr...",
              "Gee whiz!",
              "Fiddlesticks.",
              "Oh, crumbs!",
              "Horsefeathers.",
              "Aw, shucks!",
            ];
          function ms() {
            return (
              (ms = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) {
                    Object.prototype.hasOwnProperty.call(r, n) &&
                      (e[n] = r[n]);
                  }
                }
                return e;
              }), ms.apply(this, arguments)
            );
          }
          const ps = (e) => {
            let {
              type: t,
              id: r,
              name: o,
              value: a,
              label: i,
              checked: l,
              disabled: s,
              onChange: c,
              tabIndex: d = 0,
              showSubText: u = !1,
              subText: m,
              subTextClass: p,
            } = e;
            const f = c
              ? { defaultChecked: l, onChange: c }
              : { checked: l, readOnly: !0 };
            return n.createElement(
              "label",
              { htmlFor: r },
              n.createElement(
                "input",
                ms(
                  {
                    type: t,
                    id: r,
                    name: o,
                    value: a,
                    disabled: s,
                    tabIndex: d,
                  },
                  f,
                ),
              ),
              n.createElement("span", null, i),
              u && n.createElement("div", { className: p }, m),
            );
          };
          function fs() {
            return (
              (fs = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) {
                    Object.prototype.hasOwnProperty.call(r, n) &&
                      (e[n] = r[n]);
                  }
                }
                return e;
              }), fs.apply(this, arguments)
            );
          }
          const gs = (e) => n.createElement(ps, fs({}, e, { type: "radio" }));
          function vs(e) {
            let { heading: t, children: r } = e;
            return n.createElement(
              "section",
              { className: "xwd__settings-modal--section" },
              n.createElement(
                "header",
                { className: "xwd__settings-modal--heading" },
                t,
              ),
              r,
            );
          }
          function bs(e) {
            let { onSwitch: t, spaceTriggers: r } = e;
            return n.createElement(
              vs,
              { heading: "After changing direction with arrow keys" },
              n.createElement(
                "div",
                { className: "xwd__settings-modal--inset" },
                n.createElement(gs, {
                  id: "switchStay",
                  name: "onSwitch",
                  value: "stay",
                  label: "Stay in the same square",
                  checked: "stay" === t,
                }),
                n.createElement(gs, {
                  id: "switchMove",
                  name: "onSwitch",
                  value: "move",
                  label: "Move in the direction of the arrow",
                  checked: "move" === t,
                }),
              ),
              n.createElement(
                "header",
                { className: "xwd__settings-modal--heading" },
                "Pressing the spacebar should",
              ),
              n.createElement(
                "div",
                { className: "xwd__settings-modal--inset" },
                n.createElement(gs, {
                  id: "triggerClear",
                  name: "spaceTriggers",
                  value: "clear",
                  label: "Clear the current square and advance",
                  checked: "clear" === r,
                }),
                n.createElement(gs, {
                  id: "triggerToggle",
                  name: "spaceTriggers",
                  value: "toggle",
                  label: "Toggle between Across and Down",
                  checked: "toggle" === r,
                }),
              ),
            );
          }
          function hs() {
            return (
              (hs = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) {
                    Object.prototype.hasOwnProperty.call(r, n) &&
                      (e[n] = r[n]);
                  }
                }
                return e;
              }), hs.apply(this, arguments)
            );
          }
          const ys = (e) =>
            n.createElement(ps, hs({}, e, { type: "checkbox" }));
          function ws(e) {
            let { backspaceAcrossWords: t } = e;
            return n.createElement(
              vs,
              { heading: "At the start of a word" },
              n.createElement(
                "div",
                { className: "xwd__settings-modal--inset" },
                n.createElement(ys, {
                  name: "backspaceAcrossWords",
                  label: "Backspace into previous word",
                  checked: t,
                }),
              ),
            );
          }
          function _s(e) {
            let { subSettingsHandler: t, skipFilled: r, skipPenciled: o } = e;
            return (
              n.useEffect(() => {
                r || t("skipPenciled", !1);
              }, [r]),
                n.createElement(
                  vs,
                  { heading: "Within a word" },
                  n.createElement(
                    "div",
                    { className: "xwd__settings-modal--inset" },
                    n.createElement(ys, {
                      name: "skipFilled",
                      label: "Skip over filled squares",
                      checked: r,
                      id: "skipFilled",
                    }),
                    n.createElement(
                      "div",
                      { className: "xwd__settings-modal--indented" },
                      n.createElement(ys, {
                        name: "skipPenciled",
                        label: "Even penciled-in squares",
                        disabled: !r,
                        checked: o,
                        id: "skipPenciled",
                      }),
                    ),
                  ),
                )
            );
          }
          function Es(e) {
            let { jumpBack: t, autoAdvance: r } = e;
            return n.createElement(
              vs,
              { heading: "At the end of a word" },
              n.createElement(
                "div",
                { className: "xwd__settings-modal--inset" },
                n.createElement(ys, {
                  name: "jumpBack",
                  label: "Jump back to first blank in the word",
                  checked: t,
                }),
                n.createElement(ys, {
                  name: "autoAdvance",
                  label: "Jump to next clue (if not jumping back)",
                  checked: r,
                }),
              ),
            );
          }
          function Os(e) {
            let {
              soundOn: t,
              showTimer: r,
              suppressDq: o,
              showMilestones: a,
            } = e;
            return n.createElement(
              vs,
              { heading: "Interactions" },
              n.createElement(
                "div",
                { className: "xwd__settings-modal--inset" },
                n.createElement(ys, {
                  name: "soundOn",
                  label: "Play sound on solve",
                  checked: t,
                }),
                n.createElement(ys, {
                  name: "showTimer",
                  label: "Show timer",
                  checked: r,
                }),
                n.createElement(ys, {
                  checked: o,
                  name: "suppressDisqualificationWarnings",
                  label: "Suppress disqualification warnings",
                }),
                void 0 !== a &&
                  n.createElement(ys, {
                    checked: a,
                    name: "showMilestones",
                    label: "Show puzzle milestones",
                  }),
              ),
            );
          }
          function Ss(e) {
            var t;
            let {
              forceGoldStarEligibility: r,
              speedUpSyncInterval: o,
              suppressAutocheckNotice: a,
            } = e;
            const i = "midi" ===
                (null === (t = window.gameData) || void 0 === t
                  ? void 0
                  : t.stream),
              { statsigConfig: l } = sl(),
              s = i
                ? "State"
                : "state" === (d = l.writeLocation)
                ? "State"
                : "both" === d
                ? "State and Progress"
                : "Progress",
              c = i
                ? "State"
                : "state" === l.readLocation
                ? "State"
                : "Progress";
            var d;
            return n.createElement(
              vs,
              { heading: "Debug Settings" },
              n.createElement(
                "div",
                { className: "xwd__settings-modal--inset" },
                n.createElement(ys, {
                  name: "forceGoldStarEligibility",
                  label: "Force Gold Star eligibility",
                  checked: r,
                }),
                n.createElement(ys, {
                  name: "speedUpSyncInterval",
                  label: "Speed up sync interval (5m->5s)",
                  checked: o,
                }),
                n.createElement(ys, {
                  name: "suppressAutocheckNotice",
                  label: "Autocheck notice already seen",
                  checked: a,
                }),
                n.createElement(
                  "h3",
                  { className: "xwd__settings-modal--heading" },
                  "Progress Location (Statsig)",
                ),
                n.createElement(
                  "div",
                  {
                    className:
                      "xwd__settings-modal--inset xwd__settings-modal--readonly",
                  },
                  n.createElement(
                    "div",
                    { className: "xwd__settings-modal--readonly-row" },
                    n.createElement(
                      "span",
                      { className: "xwd__settings-modal--readonly-label" },
                      "Written to:",
                    ),
                    n.createElement(
                      "span",
                      { className: "xwd__settings-modal--readonly-value" },
                      s,
                    ),
                  ),
                  n.createElement(
                    "div",
                    { className: "xwd__settings-modal--readonly-row" },
                    n.createElement(
                      "span",
                      { className: "xwd__settings-modal--readonly-label" },
                      "Read from:",
                    ),
                    n.createElement(
                      "span",
                      { className: "xwd__settings-modal--readonly-value" },
                      c,
                    ),
                  ),
                ),
              ),
            );
          }
          const ks = (e) =>
            ""
              .concat(
                "https://static01.nytimes.com/games/web/imgs/mobile/packs/pack_icons_",
              )
              .concat(e ? "shortz_favorites_2.png" : "themeless_puzzles_2.png");
          function Ps() {
            const {
              inShortzMode: e,
              isErsatzShortz: t,
              setShortzMode: r,
            } = Pl();
            return t
              ? n.createElement(
                "span",
                {
                  role: "button",
                  className: "xwd__shortz-toggle",
                  title:
                    ((o = e), o ? "Exit Shortz Mode :(" : "Enter Shortz Mode!"),
                  onClick: () => r(!e),
                },
                n.createElement("img", { src: ks(e), alt: "Shortz Mode" }),
              )
              : null;
            var o;
          }
          const xs =
            "You can reveal or check a part of this puzzle, but this will exclude this puzzle from a streak.";
          const Cs = (e) => e.printOptions,
            js = (0, se.createSelector)(De, (e) => e && !e.category),
            Ts = ((0, se.createSelector)(Cs, (e) => e.version), (e) =>
              e.printOptions.version),
            Ds = (0, se.createSelector)(De, (e) => {
              if (!e) return !1;
              const { category: t, publicationDate: r } = e,
                n = he()(r)
                  .tz("America/New_York")
                  .add({ days: 4, hours: 22 })
                  .format(),
                o = he()().tz("America/New_York").isSameOrAfter(n);
              return 8 !== t || o;
            }),
            Ns = (0, se.createSelector)(De, (e) => {
              if (!e) return !1;
              const { category: t, publicationDate: r } = e;
              if (0 !== t) return !1;
              let n;
              return (
                "daily" === e.publishStream &&
                ((n = "2011-04-01"), he()(r).isSameOrAfter("2011-04-01"))
              );
            }),
            Ls = (0, se.createSelector)(
              js,
              Ts,
              (e, t) => !e || "newspaper" === t,
            ),
            zs = (0, se.createSelector)(
              js,
              Ts,
              (e, t) => !e || "newspaper" === t,
            ),
            Is = (0, se.createSelector)(De, Ts, (e, t) => {
              if (!e) return "";
              const r = "solution" === t ? ".ans.pdf" : ".pdf";
              return "".concat("/svc/crosswords/v2/puzzle/" + e.id + r);
            }),
            As = (0, se.createSelector)(De, (e) => {
              if (!e) return "";
              const t = he()(e.publicationDate).format("MMMM"),
                r = he()(e.publicationDate).format("YYYY"),
                n = he()(e.publicationDate).format("D");
              return "".concat(t, " ").concat(n, ", ").concat(r);
            }),
            Ms = (0, se.createSelector)(De, Ts, (e, t) => {
              if (!e) return "";
              const r = e.publishStream,
                n = he()(e.publicationDate).format("MMMDDYY");
              return "daily" !== r ? "" : "".concat(
                "/svc/crosswords/v2/puzzle/print/" +
                  n +
                  ("solution" === t ? ".ans.pdf" : ".pdf"),
              );
            }),
            Rs = (0, se.createSelector)(ue, zs, (e, t) => {
              const { opacity: r, layout: n } = e,
                o = {};
              return (
                !t && r < 100 && (o.block_opacity = r),
                  "southpaw" === n
                    ? (o.southpaw = !0)
                    : "large_print" === n && (o.large_print = !0),
                  Object.keys(o).length > 0
                    ? "?".concat(
                      ((a = o),
                        Object.entries(a)
                          .map((e) => e.join("="))
                          .join("&")),
                    )
                    : ""
              );
              var a;
            }),
            Bs = (0, se.createSelector)(Cs, js, Is, Ms, Rs, (e, t, r, n, o) => {
              const a = t ? r : n;
              switch (e.version) {
                case "puzzle":
                case "solution":
                  return "".concat(a).concat(o);
                case "newspaper":
                  return "".concat(n).concat(o);
                default:
                  return "".concat(r).concat(o);
              }
            });
          var Us = r(99560),
            Gs = r.n(Us);
          const Ws = {
              mini_new: {
                baseUrl: "https://www.nytimes.com/shared/v2/mini-xwd",
              },
              mini: { baseUrl: "https://www.nytimes.com/badges/games/mini" },
              midi: { baseUrl: "https://www.nytimes.com/shared/v1/midi-xwd" },
            },
            Ys = (e, t) => {
              if (!e || !t) return e;
              const r = -1 === e.indexOf("?") ? "?" : "&";
              return encodeURIComponent(
                "".concat(e).concat(r, "smid=").concat(t),
              );
            },
            Hs = function (e, t) {
              const r = Ws[
                  arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2]
                    ? "midi"
                    : arguments.length > 3 &&
                        void 0 !== arguments[3] &&
                        arguments[3]
                    ? "mini_new"
                    : "mini"
                ].baseUrl,
                n = "d=".concat(e, "&t=").concat(t),
                o = Gs()(n),
                a = "".concat(n, "&c=").concat(o);
              return {
                shareUrl: "".concat(r, ".html?").concat(a),
                shareImageSrc: "".concat(r, ".png?").concat(a),
              };
            },
            Fs = encodeURIComponent("https://www.facebook.com/");
          var qs = r(83910);
          const Zs = "midi_editor_welcome_note";
          var $s = r(13727),
            Vs = r.n($s);
          const Xs = () => Bi(C, $t.Letter),
            Ks = () => (e, t) => {
              const r = t(),
                n = _i(r, C, $t.Letter);
              (0 === (null == n ? void 0 : n.length) && e($("Backspace")),
                e(Xs()));
            },
            Js = [".", ",", "?", "!", "'", "backspace", "next"],
            Qs = ["rebus", "pencil", "switch"],
            ec = [
              ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
              ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
              [
                "prev",
                "secondary",
                "Z",
                "X",
                "C",
                "V",
                "B",
                "N",
                "M",
                "backspace",
                "next",
              ],
              Qs,
            ],
            tc = [
              ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
              ["-", "/", ":", ";", "(", ")", "$", "&", "@", '"'],
              ["prev", "tertiary", ...Js],
              Qs,
            ],
            rc = [
              ["[", "]", "{", "}", "#", "%", "^", "*", "+", "="],
              ["_", "\\", "|", "~", "<", ">", "€", "£", "¥", "•"],
              ["prev", "primary", ...Js],
              Qs,
            ],
            nc = {
              primary: ec.map((e) => e.join(" ")),
              secondary: tc.map((e) => e.join(" ")),
              tertiary: rc.map((e) => e.join(" ")),
            },
            oc = [
              "backspace",
              "rebus",
              "pencil",
              "primary",
              "secondary",
              "tertiary",
              "prev",
              "next",
              "switch",
            ],
            ac = ["backspace", "pencil", "prev", "next", "switch"],
            ic = ["prev", "next", "switch"],
            lc =
              '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="22" viewBox="0 0 11 22" fill="none"><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link"/><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-general-link"/><style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style"/><style xmlns="" lang="en" type="text/css" id="dark-mode-native-style"/><style xmlns="" lang="en" type="text/css" id="dark-mode-native-sheet"/>\n<path d="M10 1L2 11L10 21" stroke="black" stroke-width="1.75" stroke-linecap="round"/>\n</svg>',
            sc =
              '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="22" viewBox="0 0 11 22" fill="none"><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link"/><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-general-link"/><style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style"/><style xmlns="" lang="en" type="text/css" id="dark-mode-native-style"/><style xmlns="" lang="en" type="text/css" id="dark-mode-native-sheet"/>\n<path d="M1 1L9 11L1 21" stroke="black" stroke-width="1.75" stroke-linecap="round"/>\n</svg>',
            cc =
              '<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M2.66272 24.7502L4.36502 23.7288L3.34364 22.7074L2.32227 21.686L1.30089 23.3883L1.42005 24.631L2.66272 24.7502Z" fill="black"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M19.1127 0.995451C19.805 0.303159 20.9274 0.303157 21.6197 0.995451L25.0553 4.43099C25.7476 5.12328 25.7476 6.24571 25.0553 6.93801L8.72481 23.2685C8.5302 23.4631 8.29297 23.6097 8.03188 23.6967L2.87857 25.4145C1.49273 25.8764 0.174284 24.558 0.63623 23.1721L2.354 18.0188C2.44103 17.7577 2.58765 17.5205 2.78225 17.3259L19.1127 0.995451ZM20.784 1.83112C20.5533 1.60036 20.1791 1.60036 19.9484 1.83112L3.61792 18.1616C3.55306 18.2264 3.50418 18.3055 3.47517 18.3926L1.7574 23.5459C1.60342 24.0078 2.0429 24.4473 2.50485 24.2933L7.65816 22.5755C7.74519 22.5465 7.82427 22.4977 7.88913 22.4328L24.2196 6.10233C24.4504 5.87157 24.4504 5.49743 24.2196 5.26666L20.784 1.83112Z" fill="black"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M21.3874 9.76995L16.2805 4.66306L17.1162 3.82739L22.2231 8.93427L21.3874 9.76995Z" fill="black"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M8.11008 23.0478L3.0032 17.9409L3.83887 17.1052L8.94575 22.2121L8.11008 23.0478Z" fill="black"/>\n</svg>',
            dc =
              '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16.526 1.19563C16.9165 0.805108 17.5497 0.805108 17.9402 1.19563L20.8472 4.10263C21.2378 4.49315 21.2377 5.12632 20.8472 5.51684L7.02915 19.3349C6.91937 19.4447 6.78555 19.5274 6.63827 19.5765L2.27778 21.03C1.49602 21.2906 0.75228 20.5468 1.01287 19.7651L2.46636 15.4046C2.51546 15.2573 2.59817 15.1235 2.70794 15.0137L16.526 1.19563Z" stroke="white"/>\n<line x1="2.89454" y1="14.8271" x2="7.21575" y2="19.1483" stroke="white"/>\n<path d="M13.5434 4.8859L17.1575 8.5L7.21563 18.4417L3.60153 14.8276L13.5434 4.8859Z" fill="white"/>\n<path d="M16.8795 1.54952C17.0748 1.35426 17.3913 1.35426 17.5866 1.54952L20.4936 4.45652C20.6889 4.65178 20.6889 4.96836 20.4936 5.16362L18.6576 6.99976L15.0435 3.38565L16.8795 1.54952Z" fill="white"/>\n<path d="M2.35426 14.6604C2.1896 14.8251 2.06554 15.0258 1.9919 15.2467L0.5384 19.6072C0.147522 20.7798 1.26313 21.8955 2.43577 21.5046L6.79626 20.0511C7.01718 19.9774 7.21792 19.8534 7.38258 19.6887L6.46671 19.1068L3.65799 20.0431L1.9999 18.385L2.93614 15.5763L2.35426 14.6604Z" fill="white"/>\n</svg>\n',
            uc =
              '<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="7" height="7" rx="0.5" fill="black"/>\n<mask id="path-2-inside-1_1778_10736" fill="white">\n<rect y="9.5" width="7" height="7" rx="0.5"/>\n</mask>\n<rect y="9.5" width="7" height="7" rx="0.5" stroke="black" stroke-width="2" mask="url(#path-2-inside-1_1778_10736)"/>\n<mask id="path-3-inside-2_1778_10736" fill="white">\n<rect y="19" width="7" height="7" rx="0.5"/>\n</mask>\n<rect y="19" width="7" height="7" rx="0.5" stroke="black" stroke-width="2" mask="url(#path-3-inside-2_1778_10736)"/>\n<rect x="9.5" width="7" height="7" rx="0.5" fill="black"/>\n<rect x="19" width="7" height="7" rx="0.5" fill="black"/>\n</svg>',
            mc =
              '<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="7" height="7" rx="0.5" fill="black"/>\n<rect y="9.5" width="7" height="7" rx="0.5" fill="black"/>\n<rect y="19" width="7" height="7" rx="0.5" fill="black"/>\n<mask id="path-4-inside-1_1778_10696" fill="white">\n<rect x="9.5" width="7" height="7" rx="0.5"/>\n</mask>\n<rect x="9.5" width="7" height="7" rx="0.5" stroke="black" stroke-width="2" mask="url(#path-4-inside-1_1778_10696)"/>\n<mask id="path-5-inside-2_1778_10696" fill="white">\n<rect x="19" width="7" height="7" rx="0.5"/>\n</mask>\n<rect x="19" width="7" height="7" rx="0.5" stroke="black" stroke-width="2" mask="url(#path-5-inside-2_1778_10696)"/>\n</svg>',
            pc =
              '<svg width="28" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M10.2892 1.58579C10.6643 1.21071 11.173 1 11.7034 1H25.125C26.2296 1 27.125 1.89543 27.125 3V19C27.125 20.1046 26.2296 21 25.125 21H11.7034C11.173 21 10.6643 20.7893 10.2892 20.4142L1.58211 11.7071C1.19158 11.3166 1.19158 10.6834 1.58211 10.2929L10.2892 1.58579Z" stroke="black" stroke-width="1.25"/>\n<line x1="13.0089" y1="7.25" x2="20.9638" y2="15.205" stroke="black" stroke-width="1.25" stroke-linecap="round"/>\n<line x1="0.625" y1="-0.625" x2="11.875" y2="-0.625" transform="matrix(-0.707107 0.707107 0.707107 0.707107 22.2141 7.25)" stroke="black" stroke-width="1.25" stroke-linecap="round"/>\n</svg>\n';
          function fc() {
            const [e, t] = n.useState("primary"),
              r = (0, a.v9)(rn),
              o = (0, a.v9)(tn),
              i = (0, a.v9)(nn),
              l = "".concat(r && "rebus", " ").concat(o && "pencil"),
              s = (0, a.v9)(Ve),
              c = (0, a.I0)(),
              d = (e) => {
                (r && c(Li(!0)), c($(e)));
              },
              u = {
                backspace: pc,
                primary: "ABC",
                secondary: "123",
                tertiary: "#+=",
                rebus: "Rebus",
                pencil: o ? dc : cc,
                prev: lc,
                next: sc,
                switch: "Across" === (null == s ? void 0 : s.direction)
                  ? uc
                  : mc,
              };
            return n.createElement(Vs(), {
              baseClass: "xwd__keyboard",
              layout: nc,
              layoutName: e,
              display: u,
              buttonTheme: [
                { class: "icon", buttons: ac.join(" ") },
                { class: "custom", buttons: oc.join(" ") },
                { class: "selected", buttons: l },
                { class: "tablet-only", buttons: ic.join(" ") },
              ],
              preventDefault: !0,
              preventMouseDownDefault: !0,
              stopMouseDownPropagation: !0,
              onKeyPress: (e) =>
                "primary" === e
                  ? t("primary")
                  : "secondary" === e
                  ? t("secondary")
                  : "tertiary" === e
                  ? t("tertiary")
                  : "backspace" === e
                  ? c(r && i ? qt(i.slice(0, -1)) : Ks())
                  : "rebus" === e
                  ? c(zi())
                  : "pencil" === e
                  ? c(Ht())
                  : "prev" === e
                  ? d("PreviousClue")
                  : "next" === e
                  ? d("NextClue")
                  : "switch" === e
                  ? c(Z())
                  : "right" === e
                  ? d("Right")
                  : "left" === e
                  ? d("Left")
                  : void c(r ? qt(i + e) : Mi(e)),
              disableButtonHold: !0,
              autoUseTouchEvents: !0,
            });
          }
          function gc() {
            return (
              (gc = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) {
                    Object.prototype.hasOwnProperty.call(r, n) &&
                      (e[n] = r[n]);
                  }
                }
                return e;
              }), gc.apply(this, arguments)
            );
          }
          function vc(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function bc(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? vc(Object(r), !0).forEach(function (t) {
                  hc(e, t, r[t]);
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : vc(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          function hc(e, t, r) {
            var n;
            return (
              (t = "symbol" ==
                    typeof (n = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, "string");
                        if ("object" != typeof n) return n;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return String(e);
                    })(t))
                  ? n
                  : n + "") in e
                ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
                : (e[t] = r), e
            );
          }
          const yc = (e) => (null == e ? void 0 : e.text);
          class wc extends n.PureComponent {
            constructor(e) {
              (super(e),
                hc(this, "animate", void 0),
                hc(this, "canvas", void 0),
                hc(this, "timer", void 0),
                (this.state = { message: null }),
                (this.canvas = n.createRef()),
                (this.handleMessage = this.handleMessage.bind(this)));
            }
            componentDidMount() {
              const { emitter: e } = this.props;
              (this.setupCanvas(), e.on("milestone", this.handleMessage));
            }
            componentWillUnmount() {
              const { emitter: e } = this.props;
              (this.timer && clearTimeout(this.timer),
                e.off("milestone", this.handleMessage));
            }
            handleMessage(e) {
              const { message: t } = this.state;
              t ||
                (this.setState({ message: e }),
                  this.animate && this.animate(),
                  (this.timer = setTimeout(() => {
                    ((this.timer = null), this.setState({ message: null }));
                  }, 1470)));
            }
            setupCanvas() {
              this.animate = ((e, t) => {
                const r = null == e ? void 0 : e.getContext("2d");
                if (r) {
                  return (
                    r.scale(2, 2), () => {
                      let e = 0,
                        t = 15;
                      ((r.lineWidth = 4),
                        (r.lineCap = "round"),
                        (r.strokeStyle = "#4F85E5"));
                      const n = (e, t) => {
                          (r.moveTo(e, 0), r.lineTo(e + Math.max(t, 0), 0));
                        },
                        o = () => {
                          if (
                            (r.clearRect(0, 0, 70, 70),
                              r.save(),
                              r.translate(35, 35),
                              (t -= 1),
                              (e += 1.75),
                              t >= -4)
                          ) {
                            r.beginPath();
                            for (let o = 0; o < 8; o += 1) {
                              (n(e, t), r.rotate(Math.PI / 4));
                            }
                            (r.stroke(), r.restore(), requestAnimationFrame(o));
                          } else r.restore();
                        };
                      o();
                    }
                  );
                }
              })(this.canvas.current);
            }
            render() {
              const { boardId: e } = this.props,
                { message: t } = this.state,
                r = t &&
                  ((e, t) => {
                    var r, n;
                    const o =
                        null === (r = document.getElementById(wl(e.idx))) ||
                          void 0 === r
                          ? void 0
                          : r.getBoundingClientRect(),
                      a = null === (n = document.getElementById(t)) ||
                          void 0 === n
                        ? void 0
                        : n.getBoundingClientRect();
                    if (o && a) {
                      const e = o.left - a.left,
                        t = o.top - a.top;
                      return { left: e + o.width / 2, top: t + o.height / 2 };
                    }
                  })(t, e);
              return n.createElement(
                "div",
                {
                  className: zl()("xwd__milestone", { xwd__show: !!t }),
                  style: bc({}, r),
                  "data-testid": "milestone",
                },
                n.createElement(
                  "span",
                  { className: "xwd__pill" },
                  t && yc && yc(t),
                ),
                n.createElement("canvas", {
                  "data-testid": "milestone-canvas",
                  className: "xwd__canvas",
                  ref: this.canvas,
                  style: { width: 70, height: 70 },
                  width: 140,
                  height: 140,
                }),
              );
            }
          }
          var _c = (e) =>
              n.createElement(
                Or.Consumer,
                null,
                (t) => n.createElement(wc, gc({ emitter: t }, e)),
              ),
            Ec = r(50840),
            Oc = r.n(Ec);
          function Sc(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function kc(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Sc(Object(r), !0).forEach(function (t) {
                  Pc(e, t, r[t]);
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : Sc(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          function Pc(e, t, r) {
            var n;
            return (
              (t = "symbol" ==
                    typeof (n = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, "string");
                        if ("object" != typeof n) return n;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return String(e);
                    })(t))
                  ? n
                  : n + "") in e
                ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
                : (e[t] = r), e
            );
          }
          const xc = (e, t, r) => Math.min(r, Math.max(t, e));
          class Cc extends n.Component {
            constructor(e) {
              (super(e),
                Pc(this, "wrapperRef", void 0),
                (this.state = {
                  transitionTime: 0,
                  scale: 1,
                  x: 0,
                  y: 0,
                  prevScale: 1,
                  prevX: 0,
                  prevY: 0,
                  startDeltaX: 0,
                  startDeltaY: 0,
                }),
                (this.wrapperRef = n.createRef()),
                (this.handleStart = this.handleStart.bind(this)),
                (this.handleMove = this.handleMove.bind(this)),
                (this.handleEnd = this.handleEnd.bind(this)));
            }
            componentDidMount() {
              if (!this.wrapperRef.current) return;
              const e = new (Oc())(this.wrapperRef.current, {
                preventDefault: !0,
              });
              (e.get("pinch").set({ enable: !0 }),
                e.on("pinchstart panstart", this.handleStart),
                e.on("pinchmove panmove", this.handleMove),
                e.on("pinchend pinchcancel panend pancancel", this.handleEnd));
            }
            handleStart(e) {
              this.setState({
                transitionTime: 0,
                startDeltaX: e.deltaX,
                startDeltaY: e.deltaY,
              });
            }
            handleMove(e) {
              this.setState((t) => {
                const {
                    prevScale: r,
                    prevX: n,
                    prevY: o,
                    startDeltaX: a,
                    startDeltaY: i,
                  } = t,
                  { scale: l, deltaX: s, deltaY: c } = e,
                  d = r * l;
                return kc(
                  kc({}, t),
                  {},
                  1 === d && 1 === r
                    ? { scale: d }
                    : { scale: d, x: n + (s - a), y: o + (c - i) },
                );
              });
            }
            handleEnd() {
              this.setState((e) => {
                let { x: t, y: r, scale: n } = e;
                const o = this.wrapperRef.current;
                if (!o) return null;
                const a = xc(n, 1, 2),
                  i = Math.ceil((a - 1) * (o.clientWidth / 2)),
                  l = Math.ceil((a - 1) * (o.clientHeight / 2)),
                  s = xc(t, -i, i),
                  c = xc(r, -l, l);
                return {
                  transitionTime: 0.5,
                  scale: a,
                  x: s,
                  y: c,
                  prevScale: a,
                  prevX: s,
                  prevY: c,
                };
              });
            }
            createStyle() {
              const { scale: e, x: t, y: r, transitionTime: n } = this.state;
              return {
                transition: "transform ".concat(n, "s"),
                transform: "translate("
                  .concat(t, "px, ")
                  .concat(r, "px) scale(")
                  .concat(e, ")"),
              };
            }
            render() {
              const { children: e, className: t } = this.props;
              return n.createElement(
                "div",
                {
                  className: t,
                  ref: this.wrapperRef,
                  style: this.createStyle(),
                  "data-testid": "zoomable",
                },
                e,
              );
            }
          }
          function jc() {
            return (
              (jc = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) {
                    Object.prototype.hasOwnProperty.call(r, n) &&
                      (e[n] = r[n]);
                  }
                }
                return e;
              }), jc.apply(this, arguments)
            );
          }
          function Tc(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function Dc(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Tc(Object(r), !0).forEach(function (t) {
                  Nc(e, t, r[t]);
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : Tc(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          function Nc(e, t, r) {
            var n;
            return (
              (t = "symbol" ==
                    typeof (n = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, "string");
                        if ("object" != typeof n) return n;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return String(e);
                    })(t))
                  ? n
                  : n + "") in e
                ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
                : (e[t] = r), e
            );
          }
          class Lc extends n.PureComponent {
            constructor(e) {
              (super(e),
                Nc(this, "ref", void 0),
                Nc(this, "value", void 0),
                Nc(this, "handleClick", (e) => {
                  const { type: t, clickHandler: r, openRebus: n } = this.props;
                  (null == e || e.persist(),
                    "BLOCK" !== t &&
                    "EXTERNAL" !== t &&
                    (r(), 1 === (null == e ? void 0 : e.button) && n()));
                }),
                Nc(this, "renderChild", (e, t) => {
                  const { isSolved: r, answer: o, guess: a } = this.props,
                    { attributes: i, content: l, name: s } = e;
                  let c = i.fontSize;
                  const d = r ? o : a,
                    u = "middle" === i.textAnchor;
                  u && d.length > 1 && (c /= d.length / 2);
                  const m = Dc(Dc({}, i), {}, { fontSize: c });
                  return (
                    (this.value = u ? "".concat(d) : ""),
                      n.createElement(
                        s,
                        jc({ key: t }, m, { "data-testid": "cell-".concat(s) }),
                        n.createElement(
                          "text",
                          {
                            className: "xwd__cell--hidden",
                            "aria-live": "polite",
                          },
                          this.value,
                        ),
                        l || d,
                      )
                  );
                }),
                Nc(this, "renderAssistBadge", () => {
                  const {
                    isChecked: e,
                    isRevealed: t,
                    isModified: r,
                    isConfirmed: o,
                    dimensions: a,
                    index: i,
                  } = this.props;
                  if (!e && !t) return null;
                  let l;
                  l = t ? "revealed" : r || o ? "modified" : "checked";
                  const { cellSize: s, columnCount: c } = a,
                    d = Math.floor(i / c),
                    u = i % c;
                  return n.createElement("use", {
                    xlinkHref: "#".concat(l),
                    className: "xwd__assistance--".concat(l),
                    x: s * u,
                    y: s * d,
                    "data-testid": "assist-badge",
                  });
                }),
                (this.ref = n.createRef()),
                (this.value = ""));
            }
            componentDidUpdate() {
              const { isSelected: e, skipFocus: t } = this.props;
              e &&
                this.ref.current &&
                !t &&
                document.activeElement !== this.ref.current &&
                this.ref.current.focus();
            }
            render() {
              const {
                  ariaLabel: e,
                  isSelected: t,
                  isInSelectedClue: r,
                  isRelated: o,
                  isPenciled: a,
                  isConfirmed: i,
                  background: l,
                  innards: s,
                  type: c,
                  index: d,
                } = this.props,
                u = {
                  "xwd__cell--selected": t,
                  "xwd__cell--highlighted": r,
                  "xwd__cell--related": o,
                  "xwd__cell--cell": "BLOCK" !== c,
                  "xwd__cell--block": "BLOCK" === c,
                  "xwd__cell--shaded": "SHADED" === c,
                  "xwd__cell--penciled": a,
                  "xwd__assistance--confirmed": i,
                };
              return n.createElement(
                "g",
                {
                  className: "xwd__cell",
                  onClick: this.handleClick,
                  onContextMenu: this.handleClick,
                  "data-testid": "cell-g",
                },
                n.createElement(
                  "rect",
                  jc(
                    {
                      role: "cell",
                      tabIndex: t ? 0 : -1,
                      "aria-label": e,
                      ref: this.ref,
                      id: wl(d),
                      className: zl()(u, "xwd__cell--nested"),
                    },
                    l.attributes,
                  ),
                ),
                s.map(this.renderChild),
                this.renderAssistBadge(),
              );
            }
          }
          var zc = Lc;
          function Ic() {
            return (
              (Ic = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) {
                    Object.prototype.hasOwnProperty.call(r, n) &&
                      (e[n] = r[n]);
                  }
                }
                return e;
              }), Ic.apply(this, arguments)
            );
          }
          const Ac = (e) => {
              switch (e) {
                case 1:
                  return "EMPTY";
                case 2:
                  return "CIRCLED";
                case 3:
                  return "SHADED";
                case 4:
                  return "EXTERNAL";
                default:
                  return "BLOCK";
              }
            },
            Mc = { Across: "A", Down: "D", Heart: "Heart", Diagonal: "DG" };
          function Rc(e) {
            let { attributes: t, cellBoard: r, dimensions: o } = e;
            const i = (0, a.v9)(as),
              l = (0, a.v9)(rn),
              s = (0, a.v9)(on),
              c = (0, a.v9)(Pn),
              d = (0, a.v9)(ke),
              u = (0, a.v9)(Ve),
              m = (0, a.v9)(Ze),
              p = (0, a.v9)(Xe),
              f = (0, a.v9)(Ke),
              { notes: g } = (0, a.v9)(De) || {},
              v = (0, a.I0)(),
              b = (/iPad|iPhone/.test(navigator.userAgent),
                n.useCallback(
                  (e) => {
                    if (!u || !Object.keys(u).length) {
                      return g && g.length > 0
                        ? "No Clue, Notes: ".concat(
                          g[0].text,
                          ", Answer: 1 letter, Letter: 1",
                        )
                        : "No Clue, Answer: 1 letter, Letter: 1";
                    }
                    const {
                      label: t,
                      direction: r,
                      text: n,
                      alternativeAriaLabelText: o,
                    } = u;
                    if (t && r && n) {
                      const n = p.length,
                        a = p.indexOf(e);
                      return (
                        ""
                          .concat(t)
                          .concat(Mc[r] || r, ": ")
                          .concat(o, ", ") +
                        "Answer: ".concat(n, " letters, ") +
                        "Letter: ".concat(a + 1)
                      );
                    }
                    return "";
                  },
                  [u, p, g],
                ));
            return n.createElement(
              "g",
              Ic({}, t, { role: "table" }),
              r.map((e) => {
                let { children: t, index: r } = e;
                if ("number" != typeof r) return;
                const [a, ...u] = t,
                  g = d[r],
                  h = r === m;
                return n.createElement(zc, {
                  key: r,
                  index: r,
                  dimensions: o,
                  background: a,
                  innards: u,
                  isSolved: c,
                  skipFocus: i || l || !!s,
                  answer: g.answer || "",
                  guess: g.guess || "",
                  type: Ac(g.type),
                  isPenciled: g.penciled,
                  isChecked: g.checked,
                  isConfirmed: g.confirmed,
                  isModified: g.modified,
                  isRevealed: g.revealed,
                  isSelected: h,
                  isInSelectedClue: p.includes(r),
                  isRelated: f.includes(r),
                  ariaLabel: b(r),
                  clickHandler: () =>
                    v(
                      ((e, t) =>
                        t ? { type: q } : { type: H, payload: { index: e } })(
                          r,
                          h,
                        ),
                    ),
                  openRebus: () => v(zi()),
                });
              }),
            );
          }
          function Bc() {
            return (
              (Bc = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) {
                    Object.prototype.hasOwnProperty.call(r, n) &&
                      (e[n] = r[n]);
                  }
                }
                return e;
              }), Bc.apply(this, arguments)
            );
          }
          function Uc(e) {
            let {
              group: t,
              grid: r,
              frame: o,
              dimensions: a,
              externalCells: i,
            } = e;
            if (i.some((e) => e)) {
              const e = ((e, t) => {
                const { rowCount: r, columnCount: n, cellSize: o } = e,
                  a = (e) => e < n,
                  i = (e) => e >= n * (r - 1),
                  l = (e) => e % n == 0,
                  s = (e) => e % n == n - 1,
                  c = (e) => e - n,
                  d = (e) => e + n,
                  u = (e) => e - 1,
                  m = (e) => e + 1,
                  p = (e, t, r) => {
                    return "M"
                      .concat(((a = e), (a % n) * o + 3 + t), ",")
                      .concat(((e) => Math.floor(e / n) * o + 3)(e) + r);
                    var a;
                  },
                  f = () => "l".concat(o, ",0"),
                  g = () => "l0,".concat(o),
                  v = (e) => p(e, 0, 0) + f(),
                  b = (e) => p(e, 0, o) + f(),
                  h = (e) => p(e, 0, 0) + g(),
                  y = (e) => p(e, o, 0) + g();
                return t.reduce(
                  (e, r, n) => {
                    if (r) return e;
                    const o = (t) => {
                        e.lines += t(n);
                      },
                      p = (t) => {
                        e.frame += t(n);
                      },
                      f = (e, r) => e(n) || t[r(n)],
                      g = f(a, c),
                      w = f(s, m),
                      _ = f(i, d),
                      E = f(l, u);
                    return (
                      g && p(v), E && p(h), w ? p(y) : o(y), _ ? p(b) : o(b), e
                    );
                  },
                  { frame: "", lines: "" },
                );
              })(a, i);
              return n.createElement(
                "g",
                Bc({}, t, { "data-testid": "board-g-group" }),
                n.createElement("path", Bc({}, r, { d: e.lines })),
                n.createElement(
                  "path",
                  Bc({}, o, { d: e.frame, strokeLinecap: "round" }),
                ),
              );
            }
            return n.createElement(
              "g",
              Bc({}, t, { "data-testid": "board-g-group" }),
              n.createElement("path", r),
              n.createElement("rect", Bc({}, o, { fill: "none" })),
            );
          }
          const Gc = ["className"];
          function Wc() {
            return (
              (Wc = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) {
                    Object.prototype.hasOwnProperty.call(r, n) &&
                      (e[n] = r[n]);
                  }
                }
                return e;
              }), Wc.apply(this, arguments)
            );
          }
          function Yc(e) {
            let { assistShapes: t = [] } = e;
            return n.createElement(
              "defs",
              null,
              t.map((e) => {
                const {
                  attributes: { id: t },
                  children: r,
                } = e;
                return n.createElement(
                  "g",
                  {
                    id: "".concat(t),
                    key: t,
                    className: "xwd__assistance--".concat(t),
                    "data-testid": "defs-g",
                  },
                  r.map((e) => {
                    const {
                        attributes: { className: t },
                        name: r,
                      } = e,
                      o = (function (e, t) {
                        if (null == e) return {};
                        var r,
                          n,
                          o = (function (e, t) {
                            if (null == e) return {};
                            var r,
                              n,
                              o = {},
                              a = Object.keys(e);
                            for (n = 0; n < a.length; n++) {
                              ((r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]));
                            }
                            return o;
                          })(e, t);
                        if (Object.getOwnPropertySymbols) {
                          var a = Object.getOwnPropertySymbols(e);
                          for (n = 0; n < a.length; n++) {
                            ((r = a[n]),
                              t.indexOf(r) >= 0 ||
                              (Object.prototype.propertyIsEnumerable.call(
                                e,
                                r,
                              ) &&
                                (o[r] = e[r])));
                          }
                        }
                        return o;
                      })(e.attributes, Gc);
                    return n.createElement(
                      r,
                      Wc({ key: t }, o, {
                        className: "xwd__assistance--".concat(t),
                      }),
                    );
                  }),
                );
              }),
            );
          }
          function Hc() {
            return (
              (Hc = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) {
                    Object.prototype.hasOwnProperty.call(r, n) &&
                      (e[n] = r[n]);
                  }
                }
                return e;
              }), Hc.apply(this, arguments)
            );
          }
          const Fc = "xwd-board";
          var qc = (e) => {
              let { isMobile: t } = e;
              const r = (0, a.v9)(Pe),
                o = (0, a.v9)(Nn),
                i = (0, a.v9)(Ne),
                l = (0, a.v9)(Ie),
                s = (0, a.v9)(Be);
              if (!i || !l) return null;
              const { attributes: c, children: d } = i,
                [u, m, p] = d,
                {
                  attributes: f,
                  children: [g, v],
                } = p;
              return n.createElement(
                "section",
                {
                  className: zl()("xwd__board", {
                    xwd__mobile: t,
                    xwd__desktop: !t,
                  }),
                  "aria-label": "Game Board",
                },
                n.createElement(
                  Cc,
                  { className: "xwd__board--content" },
                  n.createElement(
                    "svg",
                    Hc(
                      {
                        id: Fc,
                        className: "xwd__svg",
                        preserveAspectRatio: "xMidYMin meet",
                        "aria-label": "Puzzle Board for the Crossword",
                      },
                      c,
                    ),
                    n.createElement("use", { xlinkHref: "#checked" }),
                    n.createElement(Yc, { assistShapes: u.children }),
                    n.createElement(Rc, {
                      attributes: m.attributes,
                      cellBoard: m.children,
                      dimensions: l,
                    }),
                    n.createElement(Uc, {
                      group: f,
                      grid: g.attributes,
                      frame: v.attributes,
                      externalCells: r,
                      dimensions: l,
                    }),
                    o &&
                      n.createElement("image", {
                        xlinkHref: "".concat(o),
                        width: "100%",
                        height: "100%",
                        className: "xwd__overlay",
                        "data-testid": "overlay",
                      }),
                  ),
                  !t && !s && n.createElement(_c, { boardId: Fc }),
                ),
              );
            },
            Zc = r(73935);
          function $c(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function Vc(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? $c(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : $c(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const Xc = (e) => {
              const t = e.trim().toUpperCase().replace(" AND ", " and ");
              return t.startsWith("BY ")
                ? t.replace("BY ", "By ")
                : "By ".concat(t);
            },
            Kc = (e) =>
              e.byline
                ? Vc(Vc({}, e), {}, { byline: Xc(e.byline) })
                : Vc({}, e);
          var Jc = (e, t) =>
            Mr(
              {
                method: "GET",
                url: ""
                  .concat(Ar, "/v6/editorial-content/puzzle/")
                  .concat(e, ".json"),
              },
              t,
            ).then(
              (e) => (
                (e.featuredArticle = Kc(e.featuredArticle)),
                  (e.secondaryArticles = e.secondaryArticles.map((e) => Kc(e))),
                  e
              ),
            );
          function Qc(e) {
            let { children: t } = e;
            const r = (0, a.v9)(as);
            return n.createElement(
              "div",
              {
                "aria-label": "Wordplay Section",
                className: "xwd__editorial-content--subGameplayGrid",
                tabIndex: r ? -1 : 0,
              },
              n.createElement(
                "div",
                { className: "xwd__editorial-content--header" },
                n.createElement(
                  "a",
                  {
                    href: "https://www.nytimes.com/column/wordplay",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  "WORDPLAY",
                ),
              ),
              n.createElement(
                "div",
                { className: "xwd__editorial-content--cardsContainer" },
                t,
              ),
            );
          }
          function ed(e) {
            let {
              kicker: t,
              headline: r,
              byline: o,
              summary: i,
              thumbURL: l,
              url: s = "https://www.nytimes.com/crosswords",
              type: c = "secondaryCard",
            } = e;
            const d = (0, a.v9)(Ae);
            return n.createElement(
              "a",
              {
                className: zl()(
                  "xwd__editorial-content--".concat(c),
                  "xwd__editorial-content--editorialCard",
                ),
                href: s,
                onClick: () =>
                  (0, Zt.$)(s, d, "game-page", "wordplay-content", s),
                target: "_blank",
                rel: "noopener noreferrer",
                tabIndex: 0,
              },
              l &&
                n.createElement(
                  "div",
                  { className: "xwd__editorial-content--imgContainer" },
                  n.createElement("img", { src: l, alt: r }),
                ),
              n.createElement(
                "div",
                { className: "xwd__editorial-content--meta" },
                t &&
                  n.createElement(
                    "p",
                    { className: "xwd__editorial-content--kicker" },
                    t,
                  ),
                r && n.createElement("h2", null, r),
                i &&
                  n.createElement(
                    "p",
                    { className: "xwd__editorial-content--summary" },
                    i,
                  ),
                o &&
                  n.createElement(
                    "p",
                    { className: "xwd__editorial-content--byline" },
                    o,
                  ),
              ),
            );
          }
          function td() {
            const [e, t] = (0, n.useState)(void 0),
              r = (0, a.v9)(We),
              { user: o } = (0, ii.aF)(),
              i = (0, a.v9)(Be);
            (0, n.useEffect)(() => {
              r &&
                Jc(r, o)
                  .then((e) => {
                    t(e);
                  })
                  .catch((e) => {
                    Cr.warn(e);
                  });
            }, [r]);
            const l = n.useRef(
              document.getElementById("portal-editorial-content"),
            );
            return i || si.tq || !l.current || null == e || !e.featuredArticle
              ? null
              : (0, Zc.createPortal)(
                n.createElement(
                  "div",
                  null,
                  n.createElement(
                    Qc,
                    null,
                    n.createElement(ed, {
                      type: "featuredCard",
                      kicker: e.featuredArticle.kicker,
                      headline: e.featuredArticle.headline,
                      byline: e.featuredArticle.byline,
                      summary: e.featuredArticle.summary,
                      thumbURL: e.featuredArticle.thumbURL,
                      url: e.featuredArticle.url,
                    }),
                    e.secondaryArticles &&
                      e.secondaryArticles.map((e) =>
                        n.createElement(ed, {
                          key: e.url,
                          type: "secondaryCard",
                          kicker: e.kicker,
                          headline: e.headline,
                          byline: e.byline,
                          summary: e.summary,
                          thumbURL: e.thumbURL,
                          url: e.url,
                        })
                      ),
                  ),
                ),
                l.current,
              );
          }
          function rd() {
            const e = (0, a.v9)(Ve),
              t = (null == e ? void 0 : e.text) || "",
              r = (0, a.I0)(),
              o = () => r(Z()),
              i = (e, t) =>
                n.createElement(
                  "div",
                  {
                    role: "button",
                    tabIndex: 0,
                    className: zl()("xwd__clue-bar-mobile--jump", t),
                    onClick: e,
                    onKeyDown: (t) => "Enter" === t.key && e(),
                  },
                  n.createElement("i", { className: "xwd__clue-bar--chevron" }),
                );
            return n.createElement(
              "div",
              { className: "xwd__clue-bar-mobile--bar" },
              i(() => r($("PreviousClue")), "left"),
              n.createElement("div", {
                role: "button",
                className: zl()("middle xwd__clue-format", {
                  "xwd__image-clue-format": null == e ? void 0 : e.isImageClue,
                }),
                tabIndex: 0,
                onClick: o,
                onKeyDown: (e) => "Enter" === e.key && o(),
                dangerouslySetInnerHTML: { __html: t },
                "aria-label": "switch direction",
              }),
              i(() => r($("NextClue"))),
            );
          }
          function nd() {
            const e = (0, a.v9)(Ve);
            if ((0, a.v9)(as)) {
              return n.createElement("div", {
                className: "xwd__clue-bar-desktop--bar obscured",
              });
            }
            const { label: t = "", direction: r, text: o = "" } = e || {},
              i = zl()("xwd__clue-bar-desktop--text", "xwd__clue-format", {
                long: o.length > 200,
              }),
              l = "".concat(t).concat(r ? r[0] : " ");
            return n.createElement(
              "div",
              { className: "xwd__clue-bar-desktop--bar" },
              n.createElement(
                "div",
                { className: "xwd__clue-bar-desktop--number" },
                l,
              ),
              n.createElement("div", {
                className: i,
                dangerouslySetInnerHTML: { __html: o },
              }),
            );
          }
          function od() {
            return si.tq
              ? n.createElement(rd, null)
              : n.createElement(nd, null);
          }
          function ad(e, t, r) {
            var n;
            return (
              (t = "symbol" ==
                    typeof (n = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, "string");
                        if ("object" != typeof n) return n;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return String(e);
                    })(t))
                  ? n
                  : n + "") in e
                ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
                : (e[t] = r), e
            );
          }
          class id extends n.Component {
            constructor(e) {
              (super(e),
                ad(this, "listRef", void 0),
                ad(this, "handleClick", () => {
                  const {
                    clickHandler: e,
                    index: t,
                    isSelected: r,
                  } = this.props;
                  "number" == typeof t && e && e(t, r);
                }),
                (this.listRef = (0, n.createRef)()));
            }
            componentDidUpdate() {
              const {
                isHighlighted: e,
                isSelected: t,
                isModalOpen: r,
              } = this.props;
              if ((!e && !t) || r) return;
              const n = this.listRef.current,
                o = null == n ? void 0 : n.parentElement;
              if (n && o) {
                const e = n.offsetTop,
                  t = o.offsetTop;
                o.scrollTo({ top: e - t, behavior: "smooth" });
              }
            }
            render() {
              const {
                  hasNoUnfilledCells: e,
                  isHighlighted: t,
                  isRelated: r,
                  isSelected: o,
                  label: a,
                  text: i = "",
                  isImageClue: l,
                } = this.props,
                s = zl()("xwd__clue--li", {
                  "xwd__clue--filled": e,
                  "xwd__clue--highlighted": t,
                  "xwd__clue--selected": o,
                  "xwd__clue--related": r,
                });
              return n.createElement(
                "li",
                {
                  className: s,
                  onClick: this.handleClick,
                  ref: this.listRef,
                  onKeyDown: (e) => {
                    "Enter" === e.key && this.handleClick();
                  },
                },
                n.createElement("span", { className: "xwd__clue--label" }, a),
                n.createElement("span", {
                  className: zl()("xwd__clue--text xwd__clue-format", {
                    "xwd__clue--label--has-image": l,
                  }),
                  dangerouslySetInnerHTML: { __html: i },
                }),
              );
            }
          }
          var ld = (0, a.$j)((e, t) => {
            const r = qe(e),
              n = xe(e),
              { index: o } = t;
            if ("number" == typeof o && n) {
              const e = n[o],
                t = r.cellClues.includes(o),
                a = e.list === r.clueList,
                i = t && a,
                l = r.relatedClues.includes(o);
              return {
                hasNoUnfilledCells: e.unfilledCount <= 0,
                isHighlighted: t && !i,
                isSelected: i,
                isRelated: l,
                isImageClue: e.isImageClue,
              };
            }
            return {
              hasNoUnfilledCells: !1,
              isHighlighted: !1,
              isSelected: !1,
              isRelated: !1,
              isImageClue: !1,
            };
          })(id);
          function sd(e) {
            let { list: t } = e;
            const r = (0, a.v9)(xe),
              o = (0, a.v9)(as),
              i = (0, a.I0)(),
              l = (e, t) => {
                i(V(e, t));
              },
              s = zl()("xwd__clue-list--list", {
                "xwd__clue-list--obscured": o,
              }),
              c = "xwd__clue-list--wrapper".concat(si.tq ? "-mobile" : "");
            return n.createElement(
              "div",
              { className: c },
              n.createElement(
                "h3",
                { className: "xwd__clue-list--title" },
                t.name,
              ),
              n.createElement(
                "ol",
                { className: s },
                t.clues.map((e) => {
                  const { label: t, text: a, index: i, direction: s } = r[e];
                  return n.createElement(ld, {
                    clickHandler: l,
                    index: i,
                    label: t,
                    text: a,
                    key: "".concat(t).concat(s),
                    isModalOpen: o,
                  });
                }),
              ),
            );
          }
          function cd(e) {
            let { lists: t } = e;
            return si.tq
              ? n.createElement(
                n.Fragment,
                null,
                t.map((e) => n.createElement(sd, { list: e, key: e.index })),
              )
              : n.createElement(
                "section",
                { className: zl()("xwd__layout--cluelists") },
                t.map((e) => n.createElement(sd, { list: e, key: e.index })),
              );
          }
          function dd(e, t, r) {
            var n;
            return (
              (t = "symbol" ==
                    typeof (n = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, "string");
                        if ("object" != typeof n) return n;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return String(e);
                    })(t))
                  ? n
                  : n + "") in e
                ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
                : (e[t] = r), e
            );
          }
          const ud = (e, t) => {
            var r, n;
            const o = (null === (r = document.getElementById(wl(e))) ||
                  void 0 === r
                ? void 0
                : r.getBoundingClientRect()) || {
                top: 0,
                left: 0,
                height: 0,
                width: 0,
              },
              { width: a } = (null === (n = t.current) || void 0 === n
                ? void 0
                : n.getBoundingClientRect()) || { width: 0 };
            return ((o.width = Math.max(a, o.width)), o);
          };
          class md extends n.Component {
            constructor(e) {
              var t;
              (super(e),
                (t = this),
                dd(this, "inputRef", void 0),
                dd(this, "invisibleRef", void 0),
                dd(this, "handleKeyDown", (e) => {
                  switch (e.key) {
                    case "Enter":
                    case "NumpadEnter":
                      (e.preventDefault(), this.saveAndExit());
                      break;
                    case "Escape":
                      this.saveAndExit(!1);
                      break;
                    case "Tab":
                      e.preventDefault();
                  }
                  e.stopPropagation();
                }),
                dd(this, "checkForExitMobile", (e) => {
                  const { key: t } = e;
                  "Tab" === t && e.preventDefault();
                  let r = 0;
                  (t &&
                    ["Escape", "Enter", "NumpadEnter"].includes(t) &&
                    (this.setState({ visible: !1 }),
                      e.preventDefault(),
                      (r = 300)),
                    setTimeout(() => this.handleKeyDown(e), r));
                }),
                dd(this, "shiftField", (e) => {
                  const t = e.target,
                    { index: r } = this.props;
                  if (r && t && !si.tq) {
                    const { left: e, width: n } = ud(r, this.invisibleRef);
                    let o = e + window.pageXOffset;
                    (t.offsetWidth > n && (o += n / 2 - t.offsetWidth / 2),
                      (t.style.left = "".concat(o, "px")));
                  }
                  e.stopPropagation();
                }),
                dd(this, "updateRebus", (e) => {
                  const t = e.target.value || "",
                    { onRebusChange: r } = this.props;
                  (r(t), this.shiftField(e));
                }),
                dd(this, "saveAndExit", function () {
                  let e = !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  const { exit: r } = t.props;
                  r(e);
                }),
                (this.inputRef = (0, n.createRef)()),
                (this.invisibleRef = (0, n.createRef)()),
                (this.state = {
                  width: 0,
                  height: 0,
                  left: 0,
                  top: 0,
                  visible: !1,
                }));
            }
            componentDidMount() {
              const { index: e } = this.props,
                { current: t } = this.inputRef;
              (si.tq && this.setState({ visible: !0 }),
                t && t.focus({ preventScroll: !0 }));
              const {
                height: r,
                left: n,
                top: o,
                width: a,
              } = ud(e, this.invisibleRef);
              this.setState({ width: a, height: r, left: n, top: o });
            }
            componentDidUpdate(e, t) {
              const { index: r } = this.props,
                { width: n } = ud(r, this.invisibleRef);
              n && t.width !== n && this.setState({ width: n });
            }
            render() {
              const { value: e = "", offset: t, isSolved: r } = this.props,
                {
                  height: o,
                  left: a,
                  top: i,
                  visible: l,
                  width: s,
                } = this.state,
                c = i - t,
                d = a + window.pageXOffset,
                u = si.tq
                  ? { width: s }
                  : { top: c, left: d, height: o, width: s };
              return n.createElement(
                "div",
                {
                  className: zl()("xwd__rebus", {
                    "xwd__rebus--mobile": si.tq,
                    "xwd__rebus--visible": l,
                  }),
                },
                si.tq && n.createElement("div", null, "Rebus"),
                n.createElement("input", {
                  id: "rebus-input",
                  name: "rebus",
                  inputMode: si.tq ? "none" : "text",
                  disabled: r,
                  ref: this.inputRef,
                  onChange: (e) =>
                    this.updateRebus(e),
                  onBlur: () => this.saveAndExit(!0),
                  onKeyDown: (e) => {
                    si.tq
                      ? (e.persist(),
                        this.checkForExitMobile(e),
                        e.stopPropagation())
                      : this.handleKeyDown(e);
                  },
                  onKeyPress: (e) => e.stopPropagation(),
                  className: "xwd__rebus--input",
                  style: u,
                  value: e,
                }),
                n.createElement("div", {
                  ref: this.invisibleRef,
                  className: "xwd__rebus--invisible",
                  dangerouslySetInnerHTML: { __html: e },
                }),
              );
            }
          }
          var pd = (0, a.$j)(
              (e) => {
                const t = $e(e);
                return {
                  index: t ? t.index : -1,
                  value: e.toolbar.rebusValue,
                  isSolved: e.status.isSolved,
                };
              },
              (e) => ({
                exit: (t) => e(Li(t)),
                onRebusChange: (t) => e(qt(t)),
              }),
            )(md),
            fd = r(34419);
          const gd = [
            "isClosing",
            "getOpenToastName",
            "toastMap",
            "onClose",
            "portalId",
            "onRemove",
          ];
          function vd() {
            return (
              (vd = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) {
                    Object.prototype.hasOwnProperty.call(r, n) &&
                      (e[n] = r[n]);
                  }
                }
                return e;
              }), vd.apply(this, arguments)
            );
          }
          function bd(e) {
            let {
                isClosing: t,
                getOpenToastName: r,
                toastMap: o,
                onClose: i,
                portalId: l,
                onRemove: s,
              } = e,
              c = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                      n,
                      o = {},
                      a = Object.keys(e);
                    for (n = 0; n < a.length; n++) {
                      ((r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]));
                    }
                    return o;
                  })(e, t);
                if (Object.getOwnPropertySymbols) {
                  var a = Object.getOwnPropertySymbols(e);
                  for (n = 0; n < a.length; n++) {
                    ((r = a[n]),
                      t.indexOf(r) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, r) &&
                        (o[r] = e[r])));
                  }
                }
                return o;
              })(e, gd);
            const d = n.useRef(document.getElementById(l)),
              u = (0, a.I0)(),
              m = (0, a.v9)(r);
            if (!m) return null;
            const p = o[m],
              f = n.createElement(
                p,
                vd(
                  {
                    close: function () {
                      return u(
                        i(
                          arguments.length > 0 &&
                            void 0 !== arguments[0] &&
                            arguments[0],
                        ),
                      );
                    },
                    isClosing: t,
                    onRemove: () => u(s()),
                  },
                  c,
                ),
              );
            return d.current ? (0, Zc.createPortal)(f, d.current) : f;
          }
          const hd = (e) => e.toast,
            yd = (0, se.createSelector)(hd, (e) => e.name),
            wd = (0, se.createSelector)(hd, (e) => e.isClosing);
          var _d = r(85171),
            Ed = (e) => {
              let { text: t, onRemove: r, durationVisible: o = 3e3 } = e;
              const [a, i] = (0, n.useState)(!1),
                [l, s] = (0, n.useState)(!1);
              return (
                (0, n.useEffect)(() => {
                  i(!0);
                }, []),
                  (0, _d.Z)(() => s(!0), o === 1 / 0 ? null : o),
                  n.createElement(
                    "div",
                    { className: "Toast-module_toastContainer__CgMC2" },
                    n.createElement(
                      "div",
                      { className: "Toast-module_toaster__HJPhs" },
                      n.createElement(
                        "div",
                        {
                          className: zl()("Toast-module_toast__q1i0d", {
                            "Toast-module_fadeIn__R1bI9": a,
                            "Toast-module_fadeOut__TEHmR": l,
                          }),
                          "aria-live": "polite",
                          onTransitionEnd: () => {
                            r && l && r();
                          },
                        },
                        n.createElement("h2", null, t),
                      ),
                    ),
                  )
              );
            };
          const Od = {
              [Zl.REGISTRATION_SUCCESS]: (e) => {
                let { onRemove: t } = e;
                return n.createElement(Ed, {
                  text: "You are now logged in to your Times account.",
                  onRemove: t,
                });
              },
            },
            Sd = {
              [Pi.Info]: function (e) {
                let { close: t, isClosing: r, onRemove: o } = e;
                const i = (0, a.v9)(De);
                if (!i) return null;
                const { notes: l, publishStream: s, title: c } = i;
                return n.createElement(
                  ss.Z,
                  {
                    bodyClassName: "xwd__info-modal--wrapper",
                    close: t,
                    isClosing: r,
                    onRemove: o,
                  },
                  n.createElement(
                    "div",
                    { className: "xwd__info-modal" },
                    n.createElement(dl.Dx, {
                      size: "medium",
                      text: "Puzzle Info",
                    }),
                    n.createElement(dl.Dx, { size: "large", text: Tl(c, s) }),
                    n.createElement(Il, { meta: i, isInfo: !0 }),
                  ),
                  l && n.createElement(cs, { notes: l }),
                );
              },
              [Pi.Settings]: function (e) {
                let { close: t, isClosing: r, onRemove: o } = e;
                const { isErsatzShortz: i, inShortzMode: l } = Pl(),
                  s = (0, a.v9)(de),
                  {
                    skipFilled: c,
                    backspaceAcrossWords: d,
                    skipPenciled: u,
                    autoAdvance: m,
                    jumpBack: p,
                    soundOn: f,
                    showTimer: g,
                    suppressDisqualificationWarnings: v,
                    showMilestones: b,
                    spaceTriggers: h,
                    onSwitch: y,
                    suppressAutocheckNotice: w,
                    speedUpSyncInterval: _,
                    forceGoldStarEligibility: E,
                  } = s,
                  O = (0, a.I0)(),
                  S = (e, t) => {
                    O(br({ [e]: t }));
                  },
                  k = [
                    n.createElement(dl.zx, {
                      key: "Save and close",
                      action: () => {
                        t();
                      },
                      text: "Save and close",
                    }),
                    n.createElement(dl.zx, {
                      key: "Restore defaults",
                      action: () => {
                        var e;
                        O(((e = si.tq), { type: dr, payload: e ? ar : ir }));
                      },
                      color: "secondary",
                      className: "pz-moment__button",
                      disabled: (() => {
                        const e = si.tq ? ar : ir,
                          t = Object.keys(e);
                        return Dr(e, s, t);
                      })(),
                      text: "Restore defaults",
                    }),
                  ];
                return n.createElement(
                  ss.Z,
                  {
                    bodyClassName: "xwd__settings-modal--wrapper",
                    close: t,
                    keyConfig: { Escape: () => t() },
                    buttons: k,
                    buttonsWrapperClassName: "xwd__settings-btns--wrapper",
                    isClosing: r,
                    onRemove: o,
                  },
                  n.createElement(
                    "div",
                    { className: "xwd__settings-modal--title-container" },
                    n.createElement(dl.Dx, {
                      size: "medium",
                      text: "Puzzle Settings",
                    }),
                    i && n.createElement(Ps, null),
                  ),
                  n.createElement(
                    "form",
                    {
                      id: "settings-panel",
                      className: "xwd__settings-modal--form",
                      onChange: (e) => {
                        const { target: t } = e,
                          { checked: r, name: n, type: o, value: a } = t;
                        S(n, "radio" === o ? a : r);
                      },
                    },
                    n.createElement(
                      "div",
                      { className: "xwd__settings-modal--column" },
                      !si.tq &&
                        n.createElement(bs, { onSwitch: y, spaceTriggers: h }),
                      n.createElement(ws, { backspaceAcrossWords: d }),
                      n.createElement(_s, {
                        subSettingsHandler: S,
                        skipFilled: c,
                        skipPenciled: u,
                      }),
                    ),
                    n.createElement(
                      "div",
                      { className: "xwd__settings-modal--column" },
                      n.createElement(Es, { jumpBack: p, autoAdvance: m }),
                      n.createElement(Os, {
                        soundOn: f,
                        showTimer: g,
                        suppressDq: v,
                        showMilestones: b,
                      }),
                      l &&
                        n.createElement(Ss, {
                          speedUpSyncInterval: _ || !1,
                          forceGoldStarEligibility: E || !1,
                          suppressAutocheckNotice: w || !1,
                        }),
                    ),
                  ),
                );
              },
              [Pi.Rats]: (e) => {
                let { close: t, isClosing: r, onRemove: o } = e;
                const a = n.useRef(le(ds)),
                  i = n.useRef(le(us));
                return n.createElement(
                  ss.Z,
                  {
                    buttons: [
                      n.createElement(dl.zx, {
                        key: "Keep trying",
                        action: () => {
                          t();
                        },
                        text: "Keep trying",
                      }),
                    ],
                    close: t,
                    bodyClassName: "xwd__rats-modal",
                    isClosing: r,
                    onRemove: o,
                  },
                  n.createElement(dl.Dx, { size: "large", text: a.current }),
                  n.createElement(dl.dk, {
                    text:
                      "The puzzle is filled, but at least one square’s amiss. "
                        .concat(
                          i.current,
                        ),
                    variant: "small",
                  }),
                );
              },
              [Pi.Confirmation]: function (e) {
                let { close: t, isClosing: r, onRemove: o } = e;
                const {
                    actionType: i,
                    scope: l,
                    needToWarn: s,
                  } = (0, a.v9)(is),
                  {
                    title: c,
                    text: d,
                    buttonLabel: u,
                  } = ((e, t) => {
                    switch (e) {
                      case x:
                        return {
                          title: "Feeling stuck?",
                          text: xs,
                          buttonLabel: "Check anyway",
                        };
                      case K:
                        return t
                          ? {
                            title:
                              "Resetting the timer will exclude this puzzle from a streak.",
                            text:
                              "Streaks are formed by solving The Crossword within a day of its publish date and without help.",
                            buttonLabel: "Reset timer",
                          }
                          : {
                            title: "",
                            text: "Are you sure you want to start over?",
                            buttonLabel: "Start over",
                          };
                      case j:
                        return t
                          ? {
                            title: "Feeling stuck?",
                            text: xs,
                            buttonLabel: "Reveal anyway",
                          }
                          : {
                            title: "",
                            text: "Are you sure you want to reveal the puzzle?",
                            buttonLabel: "Reveal",
                          };
                      case C:
                        return {
                          title: "",
                          text: "Are you sure you want to erase the puzzle?",
                          buttonLabel: "Erase",
                        };
                      case ee:
                        return {
                          title: "Feeling stuck?",
                          text: xs,
                          buttonLabel: "Use autocheck",
                        };
                      default:
                        return {
                          title: "",
                          text: "Are you sure you want to do that?",
                          buttonLabel: "Confirm",
                        };
                    }
                  })(i, s),
                  m = (0, a.I0)(),
                  p = (e) => {
                    m(br({ suppressDisqualificationWarnings: e }));
                  },
                  f = () => {
                    (t(!0), s && p(!1));
                  },
                  g = () => {
                    (t(), m(Ri(i, l)));
                  },
                  v = [
                    n.createElement(dl.zx, {
                      key: "Never mind",
                      action: f,
                      color: "secondary",
                      text: "Never mind",
                    }),
                    n.createElement(dl.zx, { key: u, action: g, text: u }),
                  ],
                  b = { Enter: g, NumpadEnter: g, Escape: f },
                  h = n.createElement(
                    "div",
                    { className: "xwd__modal-confirm--warning" },
                    n.createElement(dl.Dx, { size: "medium", text: c }),
                    n.createElement(dl.dk, { text: d, variant: "small" }),
                  ),
                  y = s
                    ? n.createElement(
                      "div",
                      { className: "xwd__modal-confirm--footer" },
                      n.createElement(ys, {
                        name: "suppressDisqualificationWarnings",
                        label: "Don’t show again",
                        onChange: (e) => p(e.target.checked),
                      }),
                    )
                    : null;
                return n.createElement(
                  ss.Z,
                  {
                    bodyClassName: "xwd__confirmation-modal--wrapper",
                    buttons: v,
                    keyConfig: b,
                    close: t,
                    footer: y,
                    isClosing: r,
                    onRemove: o,
                  },
                  s ? h : n.createElement(dl.dk, { text: d, variant: "small" }),
                );
              },
              [Pi.Print]: function (e) {
                let { close: t, isClosing: r, onRemove: o } = e;
                const i = (0, a.I0)(),
                  { version: l, showBlack: s, showSpoiler: c } = (0, a.v9)(Cs),
                  { opacity: d, layout: u } = (0, a.v9)(ue),
                  m = (0, a.v9)(De),
                  p = (0, a.v9)(Bs),
                  f = (0, a.v9)(As),
                  g = (0, a.v9)(Ls),
                  v = (0, a.v9)(zs),
                  b = (0, a.v9)(Ns),
                  h = (0, a.v9)(Ds),
                  y = 0 === (null == m ? void 0 : m.category),
                  w = (e) => {
                    const { target: t } = e,
                      { checked: r, name: n, type: o, value: a } = t;
                    i(
                      ((e) => ({ type: Go, payload: e }))({
                        [n]: "radio" === o ? a : r,
                      }),
                    );
                  },
                  _ = (e) => {
                    const t = e || tr.standard;
                    i(((e) => ({ type: pr, payload: { layout: e } }))(t));
                  },
                  E = () => window.open("https://www.nytimes.com".concat(p));
                return n.createElement(
                  ss.Z,
                  {
                    buttons: [
                      n.createElement(dl.zx, {
                        key: "Print",
                        action: E,
                        text: "Print",
                      }),
                    ],
                    keyConfig: { Enter: E, NumpadEnter: E },
                    ignoreBackgroundClick: !0,
                    close: t,
                    isClosing: r,
                    onRemove: o,
                    bodyClassName: "xwd__print-modal--body",
                  },
                  n.createElement(dl.Dx, { size: "medium", text: "Print" }),
                  n.createElement(
                    "div",
                    { className: "xwd__print-modal--printModalContent" },
                    (null == m ? void 0 : m.formatType) &&
                      n.createElement(
                        "div",
                        { className: "xwd__print-modal--puzzleDetails" },
                        n.createElement(
                          "div",
                          { className: "xwd__print-modal--puzzleTitle" },
                          m.title || "Daily Puzzle",
                        ),
                        n.createElement(
                          "div",
                          { className: "xwd__print-modal--puzzleDate" },
                          f,
                        ),
                      ),
                    n.createElement(
                      "div",
                      { className: "xwd__print-modal--printOptions" },
                      n.createElement(
                        "div",
                        { className: "xwd__print-modal--section" },
                        n.createElement(
                          "div",
                          { className: "xwd__print-modal--left" },
                          n.createElement(gs, {
                            type: "radio",
                            id: "puzzle",
                            name: "version",
                            value: "puzzle",
                            checked: "puzzle" === l,
                            onChange: w,
                            tabIndex: 0,
                            label: "Puzzle",
                          }),
                          y &&
                            n.createElement(
                              "div",
                              {
                                className: zl()("xwd__print-modal--inset", {
                                  "xwd__print-modal--disabled": g,
                                }),
                              },
                              n.createElement(gs, {
                                type: "radio",
                                id: "standard",
                                name: "layout",
                                value: "standard",
                                checked: "standard" === u,
                                onChange: () => _(tr.standard),
                                disabled: g,
                                label: "Standard Layout",
                              }),
                              n.createElement(gs, {
                                type: "radio",
                                id: "large_print",
                                name: "layout",
                                value: "large_print",
                                checked: "large_print" === u,
                                onChange: () => _(tr.large_print),
                                disabled: g,
                                label: "Large Print",
                              }),
                              n.createElement(gs, {
                                type: "radio",
                                id: "southpaw",
                                name: "layout",
                                value: "southpaw",
                                checked: "southpaw" === u,
                                onChange: () => _(tr.southpaw),
                                disabled: g,
                                label: "Left-handed",
                              }),
                            ),
                          n.createElement(gs, {
                            type: "radio",
                            id: "solution",
                            name: "version",
                            value: "solution",
                            checked: "solution" === l,
                            onChange: w,
                            disabled: !h,
                            label: "Solution",
                            subText: "(available Thursday 10 p.m. ET)",
                            showSubText: !h,
                            subTextClass: "xwd__print-modal--subscript",
                          }),
                        ),
                        n.createElement(
                          "div",
                          {
                            className: zl()("xwd__print-modal--cellDarkness", {
                              disabled: v,
                            }),
                          },
                          n.createElement(ys, {
                            onChange: (e) => {
                              return (
                                (t = e.target.checked),
                                  void i(
                                    ((e) => ({
                                      type: mr,
                                      payload: { opacity: e },
                                    }))(t ? 30 : 100),
                                  )
                              );
                              var t;
                            },
                            type: "checkbox",
                            id: "opacity",
                            name: "opacity",
                            checked: d < 100,
                            disabled: v,
                            "aria-disabled": v,
                            label: "Ink Saver",
                          }),
                          n.createElement(
                            "div",
                            null,
                            n.createElement(
                              "div",
                              { className: "xwd__print-modal--opacityIcon" },
                              n.createElement("div", {
                                className: "xwd__print-modal--opacityReference",
                              }),
                              n.createElement("div", {
                                className: "xwd__print-modal--userOpacity",
                                style: { opacity: d / 100 },
                              }),
                            ),
                          ),
                        ),
                      ),
                      b &&
                        n.createElement(
                          "div",
                          { className: "xwd__print-modal--section" },
                          n.createElement(gs, {
                            type: "radio",
                            id: "newspaper",
                            name: "version",
                            value: "newspaper",
                            checked: "newspaper" === l,
                            onChange: w,
                            label: "Newspaper Version",
                          }),
                        ),
                    ),
                  ),
                );
              },
              [Pi.Pause]: function (e) {
                let { close: t, isClosing: r, onRemove: o } = e;
                const i = (0, a.v9)(De);
                return i
                  ? n.createElement(
                    ss.Z,
                    {
                      buttons: [
                        n.createElement(dl.zx, {
                          key: "continue",
                          action: () => {
                            t();
                          },
                          text: "Continue",
                        }),
                      ],
                      ignoreBackgroundClick: !0,
                      hideCloseX: !0,
                      close: t,
                      isClosing: r,
                      onRemove: o,
                      footer: n.createElement(Il, { meta: i }),
                      containerClassName: "pause-modal",
                    },
                    n.createElement(dl.Dx, {
                      size: "large",
                      text: "Your game is paused.",
                    }),
                    n.createElement(dl.dk, { text: "Ready to play?" }),
                  )
                  : null;
              },
              [Pi.Share]: (e) => {
                let { close: t, isClosing: r, onRemove: o } = e;
                const [i, l] = (0, n.useState)(!1),
                  s = (0, n.useRef)(null),
                  c = n.useRef(null),
                  d = (0, a.v9)(Fr),
                  u = (0, a.v9)(We),
                  m = (0, a.v9)(Ue),
                  { isMidiEnabled: p } = (0, di.P)(),
                  { shareUrl: f, shareImageSrc: g } = Hs(u, d, m, p),
                  v = "I solved the daily ".concat(m ? "midi" : "mini", "!"),
                  b = encodeURIComponent(v);
                return (
                  (0, n.useEffect)(
                    () => () => {
                      clearTimeout(c.current);
                    },
                    [],
                  ),
                    n.createElement(
                      ss.Z,
                      {
                        close: t,
                        isClosing: r,
                        onRemove: o,
                        bodyClassName: "xwd__share-modal",
                      },
                      n.createElement(dl.Dx, {
                        size: "large",
                        text: "Share Your Victory",
                      }),
                      n.createElement(
                        "div",
                        { className: "xwd__share-modal_toutImageWrapper" },
                        n.createElement("img", {
                          src: g,
                          alt: "social media achievement",
                          className: "xwd__share-modal_toutImage",
                        }),
                      ),
                      n.createElement(
                        "ul",
                        { className: "xwd__share-modal_shareNetworks" },
                        n.createElement(
                          "li",
                          { className: "xwd__share-modal_shareItem" },
                          n.createElement(
                            "button",
                            {
                              ref: s,
                              type: "button",
                              "aria-label": "Copy Link",
                              id: "copyUrlId",
                              onClick: () => {
                                if (s.current) {
                                  const e = ""
                                      .concat(f, "&smid=")
                                      .concat("url-share"),
                                    t = document.createElement("input");
                                  ((t.type = "text"),
                                    (t.value = e),
                                    s.current.append(t),
                                    t.select(),
                                    document.execCommand("copy"),
                                    t.remove(),
                                    l(!0),
                                    (0, Zt.$)(
                                      "share-tools",
                                      void 0,
                                      "share-url",
                                      "Permalink",
                                    ),
                                    clearTimeout(c.current),
                                    (c.current = setTimeout(() => {
                                      l(!1);
                                    }, 5e3)));
                                }
                              },
                              className: zl()(
                                "xwd__share-modal_shareLinkButton",
                                { "xwd__share-modal_copiedLink": i },
                              ),
                            },
                            n.createElement("i", {
                              className: zl()(
                                "xwd__share-modal_shareIcon",
                                "link",
                              ),
                            }),
                            n.createElement(
                              "div",
                              { className: "xwd__share-modal_shareLink" },
                              i ? "Copied" : "Copy Link",
                            ),
                          ),
                        ),
                        n.createElement(
                          "li",
                          { className: "xwd__share-modal_shareItem" },
                          n.createElement(
                            "a",
                            {
                              href:
                                "https://www.facebook.com/dialog/feed?app_id=9869919170&link="
                                  .concat(Ys(f, "fb-share"), "&name=")
                                  .concat(b, "&redirect_uri=")
                                  .concat(Fs),
                              target: "_blank",
                              "aria-label": "Share on Facebook",
                              rel: "noopener noreferrer",
                              onClick: () => {
                                (0, Zt.$)(
                                  "share-tools",
                                  void 0,
                                  "share-facebook",
                                  "Facebook",
                                );
                              },
                            },
                            n.createElement("i", {
                              className: zl()(
                                "xwd__share-modal_shareIcon",
                                "facebook",
                              ),
                            }),
                            n.createElement(
                              "div",
                              { className: "xwd__share-modal_shareLink" },
                              "Facebook",
                            ),
                          ),
                        ),
                        n.createElement(
                          "li",
                          { className: "xwd__share-modal_shareItem" },
                          n.createElement(
                            "a",
                            {
                              href: "https://twitter.com/intent/tweet?url="
                                .concat(Ys(f, "tw-share"), "&text=")
                                .concat(b),
                              target: "_blank",
                              "aria-label": "Share on Twitter",
                              rel: "noopener noreferrer",
                              onClick: () => {
                                (0, Zt.$)(
                                  "share-tools",
                                  void 0,
                                  "share-twitter",
                                  "Twitter",
                                );
                              },
                            },
                            n.createElement("i", {
                              className: zl()(
                                "xwd__share-modal_shareIcon",
                                "twitter",
                              ),
                            }),
                            n.createElement(
                              "div",
                              { className: "xwd__share-modal_shareLink" },
                              "Twitter",
                            ),
                          ),
                        ),
                        n.createElement(
                          "li",
                          { className: "xwd__share-modal_shareItem" },
                          n.createElement(
                            "a",
                            {
                              href: "https://t.me/share/url?url="
                                .concat(Ys(f, "tel-share"), "&text=")
                                .concat(b, " via @nytimes"),
                              target: "_blank",
                              "aria-label": "Share on Telegram",
                              rel: "noopener noreferrer",
                              onClick: () => {
                                (0, Zt.$)(
                                  "share-tools",
                                  void 0,
                                  "share-telegram",
                                  "Telegram",
                                );
                              },
                            },
                            n.createElement("i", {
                              className: zl()(
                                "xwd__share-modal_shareIcon",
                                "telegram",
                              ),
                            }),
                            n.createElement(
                              "div",
                              { className: "xwd__share-modal_shareLink" },
                              "Telegram",
                            ),
                          ),
                        ),
                        n.createElement(
                          "li",
                          { className: "xwd__share-modal_shareItem" },
                          n.createElement(
                            "a",
                            {
                              href: "https://api.whatsapp.com/send?text="
                                .concat(b, "%20")
                                .concat(Ys(f, "wa-share")),
                              target: "_blank",
                              "aria-label": "Share on WhatsApp",
                              rel: "noopener noreferrer",
                              onClick: () => {
                                (0, Zt.$)(
                                  "share-tools",
                                  void 0,
                                  "share-whatsapp",
                                  "WhatsApp",
                                );
                              },
                            },
                            n.createElement("i", {
                              className: zl()(
                                "xwd__share-modal_shareIcon",
                                "whatsapp",
                              ),
                            }),
                            n.createElement(
                              "div",
                              { className: "xwd__share-modal_shareLink" },
                              "Whatsapp",
                            ),
                          ),
                        ),
                      ),
                    )
                );
              },
              [Pi.EditorWelcomeNote]: function (e) {
                let { close: t, isClosing: r, onRemove: o } = e;
                const i = (0, a.v9)(Ae);
                return (
                  (0, n.useEffect)(() => {
                    (0, l.hX)("welcome-modal", "midi-page", "editors-note");
                  }, []),
                    n.createElement(
                      ss.Z,
                      {
                        ignoreBackgroundClick: !0,
                        close: () => {
                          ((0, qs.rl)(Zs, 1),
                            (0, l.ob)({
                              region: "editors-note",
                              element: { name: "midi-page", label: "close" },
                              context: i,
                            }),
                            t());
                        },
                        isClosing: r,
                        onRemove: o,
                        bodyClassName:
                          "EditorWelcomeNoteModal-module_modalBody__iVgmT",
                      },
                      n.createElement(
                        "div",
                        {
                          className:
                            "EditorWelcomeNoteModal-module_contentWrapper__ViDqX",
                        },
                        n.createElement("h2", null, "What you need to know:"),
                        n.createElement(
                          "div",
                          {
                            className:
                              "EditorWelcomeNoteModal-module_body__kASxm",
                          },
                          "Here’s what I think makes the Midi Crossword special:",
                          n.createElement(
                            "ul",
                            null,
                            n.createElement(
                              "li",
                              null,
                              "It always has a theme and a puzzle title.",
                            ),
                            n.createElement(
                              "li",
                              null,
                              "The clues and answers are often straightforward and accessible.",
                            ),
                            n.createElement(
                              "li",
                              null,
                              "Flourishes like special colors, fun visuals and art will show up periodically. 💫👀🟣🎨🎉",
                            ),
                          ),
                          "Happy Solving!",
                          n.createElement(
                            "div",
                            {
                              className:
                                "EditorWelcomeNoteModal-module_editorInfo__W2pNT",
                            },
                            n.createElement("img", {
                              className:
                                "EditorWelcomeNoteModal-module_headshot__GHO0P",
                              src: "".concat(
                                l.env.assets,
                                "/assets/editor-welcome-note/editor-welcome-note-midi-ian.svg",
                              ),
                              alt: "Midi Editor, Ian",
                            }),
                            n.createElement(
                              "div",
                              {
                                className:
                                  "EditorWelcomeNoteModal-module_editorName__vjZbb",
                              },
                              n.createElement("span", null, "Ian Livengood,"),
                              n.createElement("span", null, "Midi Editor"),
                            ),
                          ),
                        ),
                        n.createElement(bl.default, {
                          text: "Let's play",
                          action: () => {
                            ((0, l.ob)({
                              region: "editors-note",
                              element: { name: "midi-page", label: "play" },
                              context: i,
                            }),
                              t(),
                              (0, qs.rl)(Zs, 1));
                          },
                        }),
                      ),
                    )
                );
              },
            };
          function kd(e) {
            let {
              clueLists: t,
              inRebusMode: r,
              doEscape: o,
              puzzleEscaped: i,
              isMobile: l,
            } = e;
            const s = (0, n.useRef)(null),
              c = !!window.newsreaderAppPlatform,
              d = "android" === window.newsreaderAppPlatform,
              u = (0, a.I0)();
            (0, n.useEffect)(() => {
              s.current && o && !l && (s.current.focus(), i && i());
            }, [o]);
            const m = (0, n.useRef)(null),
              [p, f] = (0, n.useState)(0);
            (0, n.useEffect)(() => {
              var e;
              const t = (null === (e = m.current) || void 0 === e
                ? void 0
                : e.getBoundingClientRect().top) || 0;
              f(t);
            }, [r]);
            const g = (0, a.v9)(as),
              v = (0, a.v9)(wd),
              { isSolved: b } = (0, a.v9)(Sn),
              h = Di();
            ((0, n.useEffect)(() => {
              h &&
                u(() =>
                  Fa("midi")
                    .then((e) => (200 === e.status && e.title ? e.title : null))
                    .catch(
                      (e) => (
                        console.error("Error fetching midi title:", e), null
                      ),
                    )
                ).then((e) => u({ type: S, payload: e }));
            }, [u, h]),
              (0, n.useEffect)(() => {
                b && u(Mt());
              }, [b]));
            const y = (() => {
              const { isStatsigReady: e } = (0, ai.of)(),
                { client: t } = (0, ai.g_)();
              return (0, n.useMemo)(
                () => !!e && t.checkGate("games_midi_gold_star_streak_web"),
                [e, t],
              );
            })();
            return (
              (0, n.useEffect)(() => {
                u(pa(y));
              }, [y]),
                (0, n.useEffect)(() => {
                  const e = document.getElementById("js-nav-burger"),
                    t = () => {
                      null == e ||
                        !e.classList.contains("active") ||
                        g ||
                        b ||
                        u(Ct(Pi.Pause));
                    };
                  null == e || e.addEventListener("click", t);
                  const r = document.getElementById(
                    "cache-safe-games-sale-banner-a",
                  );
                  return (
                    r && !g && r.classList.add("hide-game-sale-banner"), () => {
                      null == e || e.removeEventListener("click", t);
                    }
                  );
                }),
                n.createElement(
                  "div",
                  { className: "xwd__layout_container", ref: m },
                  n.createElement(fd.Z, {
                    getOpenModalName: os,
                    getIsClosing: ls,
                    modalMap: Sd,
                    onClose: jt,
                    onRemove: Tt,
                    portalId: "portal-game-modals",
                  }),
                  n.createElement(bd, {
                    portalId: "portal-toast-system",
                    toastMap: Od,
                    getOpenToastName: yd,
                    getIsClosing: wd,
                    isClosing: v,
                    onClose: ia,
                    onRemove: la,
                  }),
                  n.createElement(
                    "div",
                    {
                      className: zl()({
                        "xwd__layout_container--mobile": l,
                        "xwd__layout--rebusmode": r,
                        "xwd__layout_container--mobile-newsreader": c,
                        "xwd__news-android": d,
                      }),
                    },
                    n.createElement(
                      "article",
                      {
                        id: "puzzle",
                        "aria-label": "Main Puzzle Layout",
                        className: zl()({
                          "xwd__layout_puzzle--mobile": l,
                          "xwd__layout_puzzle--desktop": !l,
                        }),
                      },
                      n.createElement(
                        "section",
                        {
                          className: zl()({
                            xwd__layout_clueBarAndBoard: !l,
                            "xwd__mobile_layout--board_container": l,
                          }),
                          "aria-label": "Game Board with Clue Bar",
                        },
                        !l && n.createElement(od, null),
                        n.createElement(qc, { isMobile: l }),
                        l &&
                          n.createElement("span", {
                            key: "breaker",
                            className: "xwd__layout_breaker",
                            "data-testid": "breaker",
                          }),
                      ),
                      t && n.createElement(cd, { lists: t }),
                    ),
                    r && n.createElement(pd, { offset: p }),
                    l &&
                      n.createElement(
                        "div",
                        {
                          className: "xwd__layout_controls--mobile",
                          "data-testid": "mobile-controls",
                        },
                        n.createElement(od, null),
                        n.createElement(fc, null),
                      ),
                  ),
                  n.createElement(td, null),
                )
            );
          }
          const Pd = (e, t) => {
            let r;
            return function () {
              for (
                var n = arguments.length, o = new Array(n), a = 0;
                a < n;
                a++
              ) {
                o[a] = arguments[a];
              }
              const i = this;
              (clearTimeout(r), (r = setTimeout(() => e.apply(i, o), t)));
            };
          };
          var xd = () => {
            const [e, t] = (0, n.useState)({
              winHeight: window.innerHeight,
              winWidth: window.innerWidth,
            });
            return (
              (0, n.useEffect)(() => {
                const e = Pd(() => {
                  t({
                    winHeight: window.innerHeight,
                    winWidth: window.innerWidth,
                  });
                }, 50);
                return (
                  window.addEventListener("resize", e),
                    () => window.removeEventListener("resize", e)
                );
              }, []), e
            );
          };
          const Cd = () => Ct(Pi.Pause),
            jd = (e, t) =>
              t < 33 || (t > 126 && t < 161)
                ? null
                : e.length > 1
                ? String.fromCharCode(t).toUpperCase()
                : e.toUpperCase();
          var Td = r(32825);
          function Dd(e, t, r) {
            var n;
            return (
              (t = "symbol" ==
                    typeof (n = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, "string");
                        if ("object" != typeof n) return n;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return String(e);
                    })(t))
                  ? n
                  : n + "") in e
                ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
                : (e[t] = r), e
            );
          }
          class Nd extends n.PureComponent {
            constructor() {
              (super(...arguments),
                Dd(this, "interval", void 0),
                Dd(this, "pauseTimeout", void 0),
                Dd(this, "tick", void 0),
                Dd(this, "componentDidMount", () => {
                  const { pauseFailsafe: e } = this.props;
                  (window.addEventListener("visibilitychange", () => {
                    document.hidden || "hidden" === document.visibilityState
                      ? this.handleBlur()
                      : this.handleFocus();
                  }),
                    window.addEventListener("pagehide", () => {
                      e();
                    }),
                    window.addEventListener("blur", this.handleBlur),
                    window.addEventListener("focus", this.handleFocus));
                }),
                Dd(this, "componentDidUpdate", () => {
                  const { shouldBePaused: e } = this.props;
                  e !== this.isPaused() &&
                    (e ? this.stopTicking() : this.startTicking());
                }),
                Dd(this, "isPaused", () => !this.interval),
                Dd(this, "startTicking", () => {
                  const { clickHandler: e, start: t } = this.props;
                  ((this.tick = Date.now()),
                    (this.interval = window.setInterval(() => {
                      (this.tick && Date.now() - this.tick > 1e4
                        ? e()
                        : this.forceUpdate(),
                        (this.tick = Date.now()));
                    }, 1e3)),
                    t());
                }),
                Dd(this, "stopTicking", () => {
                  const { stop: e } = this.props;
                  this.isPaused() ||
                    (this.interval &&
                      (this.interval = window.clearInterval(this.interval)),
                      e());
                }),
                Dd(this, "handleFocus", () => {
                  this.pauseTimeout &&
                    (window.clearTimeout(this.pauseTimeout),
                      delete this.pauseTimeout);
                }),
                Dd(this, "handleBlur", () => {
                  const { clickHandler: e, timerIsVisible: t } = this.props;
                  t &&
                    !this.isPaused() &&
                    (si.tq && document.hidden && e(),
                      this.pauseTimeout ||
                      (this.pauseTimeout = window.setTimeout(e, 3e4)));
                }));
            }
            render() {
              const {
                  clickHandler: e,
                  totalElapsedTime: t,
                  shouldBePaused: r,
                  sessionStartTimestamp: o,
                  timerIsVisible: a,
                } = this.props,
                i = we(ye(t, o)),
                l = "Timer ".concat(r ? "Play" : "Pause", " Button"),
                s = n.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: () => !this.isPaused() && e(),
                    "aria-label": l,
                  },
                  n.createElement("div", { className: "timer-count" }, i),
                  !this.isPaused() && n.createElement(Td.Z, { icon: "pause" }),
                );
              return n.createElement(
                "li",
                { className: "xwd__tool--button xwd__timer--button" },
                a && s,
              );
            }
          }
          var Ld = (0, a.$j)(
              (e) => {
                const { transient: t, status: r, timer: n } = e,
                  { isReady: o } = t,
                  { showTimer: a } = de(e),
                  { isSolved: i } = r,
                  { totalElapsedTime: l, sessionStartTimestamp: s } = n,
                  c = as(e);
                return {
                  shouldBePaused: !o || c || i,
                  totalElapsedTime: l,
                  sessionStartTimestamp: s,
                  timerIsVisible: a,
                };
              },
              (e) => ({
                start: () => e(At()),
                stop: () => e(Mt()),
                pauseFailsafe: () => e(Mt(!0)),
              }),
            )(Nd),
            zd = r(22466);
          function Id(e) {
            const {
                clickHandler: t,
                icon: r,
                ariaLabel: o,
                label: a,
                active: i,
                open: l,
                isAutocheckOn: s,
                children: c,
              } = e,
              d = zl()("xwd__tool--button", {
                "xwd__tool--texty": !r,
                "xwd__tool--active": i,
                "xwd__tool--open": l,
                "xwd__tool--autocheck": s,
              });
            return n.createElement(
              "li",
              { className: d },
              n.createElement(
                "button",
                {
                  type: "button",
                  "aria-label": o || a,
                  onClick: (e) => {
                    (e.stopPropagation(), t(e));
                  },
                },
                !a &&
                  n.createElement("i", {
                    className: r,
                    "data-testid": "tool-icon",
                  }),
                a,
              ),
              c,
            );
          }
          function Ad(e) {
            const { itemHandler: t, items: r, isAutocheckOn: o } = e,
              [a, i] = (0, n.useState)(!1),
              { inShortzMode: l } = Pl();
            return n.createElement(
              "ul",
              { className: "xwd__menu--container", "data-testid": "help-menu" },
              r.map((e) => {
                if (e.shortzOnly && !l) return null;
                const r = !e.secondary,
                  s = a !== r,
                  c = o && e.disabledDuringAutocheck,
                  d = o && "Autocheck" === e.label;
                return n.createElement(
                  "li",
                  {
                    className: zl()("xwd__menu--item", {
                      "xwd__menu--item-disabled": c,
                      "xwd__menu--item-checked": d,
                      "xwd__menu--item-display": s,
                      "xwd__menu--item-hide": !s,
                    }),
                    key: e.label,
                    title: e.title,
                  },
                  n.createElement(
                    "button",
                    {
                      type: "button",
                      className: "xwd__menu--btnlink",
                      onClick: (r) => {
                        !(function (e, t, r) {
                          const { action: n, scope: o } = t;
                          (n ? r(n, o) : (i(!a), e.stopPropagation()),
                            e.preventDefault());
                        })(r, e, t);
                      },
                    },
                    e.label,
                  ),
                );
              }),
            );
          }
          function Md(e) {
            const {
              autoCheckEnabled: t,
              activeMenu: r,
              execute: o,
              toggleMenuAction: a,
              menuData: i,
            } = e;
            return n.createElement(
              "div",
              { className: "xwd__toolbar--expandedMenu" },
              i.map((e) => {
                let { label: i } = e;
                const { items: l } = e,
                  s = i.toUpperCase(),
                  c = "check" === i && t;
                return (
                  (i = c ? "autocheck" : i),
                    n.createElement(
                      Id,
                      {
                        open: r === s,
                        label: i,
                        clickHandler: () => a("MENU", e.label.toUpperCase()),
                        isAutocheckOn: c,
                        key: i,
                      },
                      n.createElement(Ad, {
                        items: l,
                        itemHandler: o,
                        isAutocheckOn: c,
                      }),
                    )
                );
              }),
            );
          }
          var Rd = r(44573),
            Bd = r(18479),
            Ud = r(99727);
          const Gd = { width: "24", height: "24", viewBox: "0 0 24 24" },
            Wd = { width: "28", height: "28", viewBox: "4 4 24 24" },
            Yd = "0 0 32 32",
            Hd = {
              mobile: {
                menu: { width: "21", height: "21", viewBox: "-1 -1 24 24" },
                forum: { width: "21", height: "21", viewBox: "0 0 24 24" },
                stats: { width: "20", height: "18", viewBox: "4 4 24 24" },
                help: { width: "22", height: "22", viewBox: "2 2 28 28" },
                settings: { width: "21", height: "21", viewBox: "2 2 28 28" },
                arrow: { width: "16", height: "16", viewBox: "0 0 16 16" },
                more: { width: "21", height: "21", viewBox: "0 0 24 24" },
                back: { width: "21", height: "21", viewBox: "4 4 24 24" },
              },
              desktop: {
                menu: { width: "32", height: "32", viewBox: "-4 -4 32 32" },
                forum: { width: "36", height: "36", viewBox: "-4 -4 32 32" },
                stats: { width: "28", height: "24", viewBox: "4 4 24 24" },
                help: { width: "32", height: "32", viewBox: Yd },
                settings: { width: "32", height: "32", viewBox: Yd },
                arrow: { width: "16", height: "16", viewBox: "0 0 16 16" },
                more: { width: "32", height: "32", viewBox: "0 0 24 24" },
                back: { width: "32", height: "32", viewBox: Yd },
              },
            };
          var Fd = (e) => {
              const [t, r] = (0, n.useState)(Gd);
              return (
                (0, n.useEffect)(() => {
                  function t() {
                    var t;
                    let n = Gd,
                      o = Hd.mobile;
                    (null !== (t = window) &&
                      void 0 !== t &&
                      null !== (t = t.matchMedia("(min-width: 768px)")) &&
                      void 0 !== t &&
                      t.matches &&
                      ((n = Wd), (o = Hd.desktop)),
                      o[e] && (n = o[e]),
                      r(n));
                  }
                  return (
                    t(), window.addEventListener("resize", t), () => {
                      window.removeEventListener("resize", t);
                    }
                  );
                }, []), t
              );
            },
            qd = {
              iconWrapper: "Icon-module_iconWrapper__ZfKPm",
              dotStyles: "Icon-module_dotStyles__UH2RU",
            };
          const Zd = {
            help:
              "M15 24H17.6667V21.3333H15V24ZM16.3333 2.66666C8.97333 2.66666 3 8.63999 3 16C3 23.36 8.97333 29.3333 16.3333 29.3333C23.6933 29.3333 29.6667 23.36 29.6667 16C29.6667 8.63999 23.6933 2.66666 16.3333 2.66666ZM16.3333 26.6667C10.4533 26.6667 5.66667 21.88 5.66667 16C5.66667 10.12 10.4533 5.33332 16.3333 5.33332C22.2133 5.33332 27 10.12 27 16C27 21.88 22.2133 26.6667 16.3333 26.6667ZM16.3333 7.99999C13.3867 7.99999 11 10.3867 11 13.3333H13.6667C13.6667 11.8667 14.8667 10.6667 16.3333 10.6667C17.8 10.6667 19 11.8667 19 13.3333C19 16 15 15.6667 15 20H17.6667C17.6667 17 21.6667 16.6667 21.6667 13.3333C21.6667 10.3867 19.28 7.99999 16.3333 7.99999Z",
            settings:
              "M26.8666 17.3372C26.918 16.9086 26.9523 16.4629 26.9523 16C26.9523 15.5371 26.918 15.0914 26.8494 14.6628L29.7466 12.3999C30.0038 12.1942 30.0724 11.8171 29.9181 11.5256L27.1752 6.77693C27.0037 6.46836 26.6437 6.3655 26.3351 6.46836L22.9236 7.83982C22.2036 7.29123 21.4493 6.84551 20.6093 6.50264L20.095 2.86827C20.0436 2.52541 19.7521 2.2854 19.4093 2.2854H13.9234C13.5806 2.2854 13.3063 2.52541 13.2548 2.86827L12.7405 6.50264C11.9005 6.84551 11.1291 7.30838 10.4262 7.83982L7.01469 6.46836C6.70611 6.34835 6.3461 6.46836 6.17467 6.77693L3.43175 11.5256C3.26031 11.8342 3.32889 12.1942 3.60318 12.3999L6.50039 14.6628C6.43182 15.0914 6.38039 15.5543 6.38039 16C6.38039 16.4457 6.41467 16.9086 6.48325 17.3372L3.58603 19.6001C3.32889 19.8058 3.26031 20.183 3.4146 20.4744L6.15752 25.2231C6.32896 25.5317 6.68896 25.6345 6.99754 25.5317L10.4091 24.1602C11.1291 24.7088 11.8834 25.1545 12.7234 25.4974L13.2377 29.1317C13.3063 29.4746 13.5806 29.7146 13.9234 29.7146H19.4093C19.7521 29.7146 20.0436 29.4746 20.0779 29.1317L20.5921 25.4974C21.4322 25.1545 22.2036 24.6916 22.9065 24.1602L26.318 25.5317C26.6266 25.6517 26.9866 25.5317 27.158 25.2231L29.9009 20.4744C30.0724 20.1658 30.0038 19.8058 29.7295 19.6001L26.8666 17.3372V17.3372ZM16.6663 21.143C13.8377 21.143 11.5234 18.8286 11.5234 16C11.5234 13.1714 13.8377 10.857 16.6663 10.857C19.495 10.857 21.8093 13.1714 21.8093 16C21.8093 18.8286 19.495 21.143 16.6663 21.143Z",
            stats:
              "M21.3332 14.6667V4H10.6665V12H2.6665V28H29.3332V14.6667H21.3332ZM13.3332 6.66667H18.6665V25.3333H13.3332V6.66667ZM5.33317 14.6667H10.6665V25.3333H5.33317V14.6667ZM26.6665 25.3333H21.3332V17.3333H26.6665V25.3333Z",
            forum:
              "M15.4538 15.0078C17.2881 13.8544 18.5 11.818 18.5 9.5C18.5 5.91015 15.5899 3 12 3C8.41015 3 5.5 5.91015 5.5 9.5C5.5 11.818 6.71194 13.8544 8.54624 15.0078C9.37338 15.5279 10 16.4687 10 17.6014V20H14V17.6014C14 16.4687 14.6266 15.5279 15.4538 15.0078ZM16.5184 16.7009C16.206 16.8974 16 17.2323 16 17.6014V20C16 21.1046 15.1046 22 14 22H10C8.89543 22 8 21.1046 8 20V17.6014C8 17.2323 7.79404 16.8974 7.48163 16.7009C5.08971 15.1969 3.5 12.5341 3.5 9.5C3.5 4.80558 7.30558 1 12 1C16.6944 1 20.5 4.80558 20.5 9.5C20.5 12.5341 18.9103 15.1969 16.5184 16.7009ZM8 17H16V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V17Z",
            menu:
              "M3.93428 18.2929C3.61506 18.2929 3.34567 18.1831 3.1261 17.9636C2.90654 17.744 2.79675 17.4746 2.79675 17.1554C2.79675 16.8362 2.90654 16.5668 3.1261 16.3473C3.34567 16.1277 3.61506 16.0179 3.93428 16.0179H20.0658C20.385 16.0179 20.6544 16.1277 20.874 16.3473C21.0935 16.5668 21.2033 16.8362 21.2033 17.1554C21.2033 17.4746 21.0935 17.744 20.874 17.9636C20.6544 18.1831 20.385 18.2929 20.0658 18.2929H3.93428ZM3.93428 13.1375C3.61506 13.1375 3.34567 13.0277 3.1261 12.8081C2.90654 12.5886 2.79675 12.3192 2.79675 12C2.79675 11.6808 2.90654 11.4114 3.1261 11.1918C3.34567 10.9723 3.61506 10.8625 3.93428 10.8625H20.0658C20.385 10.8625 20.6544 10.9723 20.874 11.1918C21.0935 11.4114 21.2033 11.6808 21.2033 12C21.2033 12.3192 21.0935 12.5886 20.874 12.8081C20.6544 13.0277 20.385 13.1375 20.0658 13.1375H3.93428ZM3.93428 7.98206C3.61506 7.98206 3.34567 7.87227 3.1261 7.65271C2.90654 7.43314 2.79675 7.16375 2.79675 6.84453C2.79675 6.52533 2.90654 6.25595 3.1261 6.03638C3.34567 5.81681 3.61506 5.70703 3.93428 5.70703H20.0658C20.385 5.70703 20.6544 5.81681 20.874 6.03638C21.0935 6.25595 21.2033 6.52533 21.2033 6.84453C21.2033 7.16375 21.0935 7.43314 20.874 7.65271C20.6544 7.87227 20.385 7.98206 20.0658 7.98206H3.93428Z",
            arrow:
              "M11.3301 4.06982H4.73006V5.26982H9.88006L3.81006 11.3398L4.66006 12.1898L10.7301 6.11982V11.2698H11.9301V4.66982C11.9301 4.33982 11.6601 4.06982 11.3301 4.06982Z",
            more:
              "M 17.5,12 a 2.5,2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0 M 9.5,12 a 2.5,2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0 M 1.5,12 a 2.5,2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0",
            back:
              "M19.3333 24.3199L20.9867 22.6666L14.32 15.9999L20.9867 9.33326L19.3333 7.67993L11.84 15.1733C11.3867 15.6266 11.3867 16.3733 11.84 16.8266L19.3333 24.3199Z",
          };
          function $d(e) {
            let {
              icon: t,
              onClick: r,
              disabled: o = !1,
              id: a,
              fillColor: i,
              isWordle: l = !1,
              showNotificationDot: s,
              iconClassName: c,
            } = e;
            const d = Fd(t);
            return n.createElement(
              "div",
              { className: zl()(qd.iconWrapper, c) },
              n.createElement(
                "svg",
                {
                  id: a,
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: d.height,
                  viewBox: d.viewBox,
                  width: d.width,
                  className: "game-icon",
                  onClick: r,
                  "data-testid": "icon-".concat(t),
                },
                n.createElement("path", {
                  fill: i ||
                    (o
                      ? "var(--icon-disabled)"
                      : l
                      ? "var(--color-tone-1)"
                      : "var(--text)"),
                  d: Zd[t],
                }),
              ),
              s &&
                n.createElement(Ud.Z, {
                  strokeColor: l ? "var(--color-tone-7)" : "var(--bg-toolbar)",
                }),
            );
          }
          function Vd(e) {
            let { puzzleData: t, activeMenu: r, toggleMenuAction: o } = e;
            const { puzzleId: a, publicationDate: i, isMini: l, isMidi: s } = t,
              c = new Date().toISOString().split("T")[0],
              d = !!i && i < c,
              u = {
                puzzleId: null == a ? void 0 : a.toString(),
                puzzleDate: i,
                isArchive: d,
              };
            return n.createElement(
              Id,
              {
                open: "SUPPORT" === r,
                icon: "xwd__toolbar_icon--support",
                ariaLabel: "Support Feedback Menu",
                clickHandler: () => o("MENU", "SUPPORT"),
              },
              n.createElement(
                "ul",
                {
                  className: zl()("xwd__menu--container", "xwd__support-menu"),
                  role: "menu",
                },
                n.createElement(
                  "li",
                  { className: "xwd__menu--item", role: "none" },
                  n.createElement(
                    "a",
                    {
                      href: s
                        ? "https://iteratehq.com/nytimes/69973703c4cac330500cd849"
                        : l
                        ? "https://iteratehq.com/nytimes/6776fdbf57ff0d28b15d6a04"
                        : "https://iteratehq.com/nytimes/677700fc30400c22acac0834",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "xwd__menu--btnlink",
                      onClick: () => (0, Bd.l)(u, "email-feedback"),
                    },
                    "Feedback",
                    n.createElement($d, { icon: "arrow" }),
                  ),
                ),
                n.createElement(
                  "li",
                  { className: "xwd__menu--item", role: "none" },
                  n.createElement(
                    Rd.Z,
                    {
                      subject: "".concat(
                        s ? "Midi" : l ? "Mini" : "Daily",
                        " Crossword Bug Report",
                      ),
                      useEnhancedHybridDebugInfo: !1,
                      type: Za.N1.CUSTOM,
                      tracking: () => (0, Bd.l)(u, "report-bug"),
                    },
                    "Report a Bug",
                    n.createElement($d, { icon: "arrow" }),
                  ),
                ),
                n.createElement(
                  "li",
                  { className: "xwd__menu--item", role: "none" },
                  n.createElement(
                    "a",
                    {
                      href: s
                        ? "https://help.nytimes.com/3697860/the-midi-crossword"
                        : l
                        ? "https://help.nytimes.com/360025912452-The-Mini-Crossword"
                        : "https://help.nytimes.com/360052406391-The-New-York-Times-Crossword-Puzzle",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "xwd__menu--btnlink",
                      onClick: () => (0, Bd.l)(u, "questions"),
                    },
                    "Questions?",
                    n.createElement($d, { icon: "arrow" }),
                  ),
                ),
              ),
            );
          }
          const Xd = [
              {
                label: "clear",
                items: [
                  {
                    action: C,
                    scope: $t.Unchecked,
                    label: "Incomplete",
                    title:
                      "Won’t clear letters that are part of completed crossing words",
                  },
                  { action: C, scope: $t.Word, label: "Word" },
                  { action: C, scope: $t.Puzzle, label: "Puzzle" },
                  { action: K, scope: $t.Puzzle, label: "Puzzle & Timer" },
                ],
              },
              {
                label: "reveal",
                items: [
                  { action: j, scope: $t.Letter, label: "Square" },
                  { action: j, scope: $t.Word, label: "Word" },
                  { action: j, scope: $t.Puzzle, label: "Puzzle" },
                  {
                    action: J,
                    scope: $t.Fifty,
                    label: "49.9%",
                    shortzOnly: !0,
                  },
                  {
                    action: J,
                    scope: $t.SeventyFive,
                    label: "74.9%",
                    shortzOnly: !0,
                  },
                  { action: J, label: "99.9%", shortzOnly: !0 },
                ],
              },
              {
                label: "check",
                items: [
                  { action: Ui, label: "Autocheck" },
                  {
                    action: x,
                    scope: $t.Letter,
                    label: "Square",
                    disabledDuringAutocheck: !0,
                  },
                  {
                    action: x,
                    scope: $t.Word,
                    label: "Word",
                    disabledDuringAutocheck: !0,
                  },
                  {
                    action: x,
                    scope: $t.Puzzle,
                    label: "Puzzle",
                    disabledDuringAutocheck: !0,
                  },
                ],
              },
            ],
            Kd = [
              { action: Ui, label: "Autocheck" },
              {
                action: x,
                scope: $t.Letter,
                label: "Check Square",
                disabledDuringAutocheck: !0,
              },
              {
                action: x,
                scope: $t.Word,
                label: "Check Word",
                disabledDuringAutocheck: !0,
              },
              {
                action: x,
                scope: $t.Puzzle,
                label: "Check Puzzle",
                disabledDuringAutocheck: !0,
              },
              { action: J, scope: $t.Fifty, label: "49.9%", shortzOnly: !0 },
              {
                action: J,
                scope: $t.SeventyFive,
                label: "74.9%",
                shortzOnly: !0,
              },
              { action: J, label: "99.9%", shortzOnly: !0 },
              { label: "More 〉" },
              {
                action: C,
                scope: $t.Unchecked,
                label: "Clear Incomplete",
                secondary: !0,
              },
              { action: C, scope: $t.Word, label: "Clear Word", secondary: !0 },
              {
                action: K,
                scope: $t.Puzzle,
                label: "Reset Puzzle",
                secondary: !0,
              },
              {
                action: j,
                scope: $t.Letter,
                label: "Reveal Square",
                secondary: !0,
              },
              {
                action: j,
                scope: $t.Word,
                label: "Reveal Word",
                secondary: !0,
              },
              {
                action: j,
                scope: $t.Puzzle,
                label: "Reveal Puzzle",
                secondary: !0,
              },
              { label: "〈 Back", secondary: !0 },
            ];
          function Jd() {
            const { isMobileDevice: e, isNewsreaderApp: t } = (0, Za.vB)(),
              {
                inRebusMode: r,
                activeMenu: o,
                inPencilMode: i,
              } = (0, a.v9)(en),
              l = (0, a.v9)(an),
              { isSolved: s, autocheckEnabled: c } = (0, a.v9)(Sn),
              { notes: d } = (0, a.v9)(De) || {},
              u = ((0, a.v9)(el), (0, a.v9)(Ae)),
              m = (0, a.v9)(We),
              p = (0, a.v9)(Be),
              f = (0, a.v9)(Ue),
              g = e && !t,
              v = (0, a.I0)(),
              b = (e, t) => {
                v("function" == typeof e ? e() : Bi(e, t));
              },
              h = (e, t) => {
                "PENCIL" === e
                  ? v(Ht())
                  : "REBUS" === e
                  ? v(zi())
                  : t && v(Ft(t));
              },
              y = n.createElement(
                "div",
                { className: zl()("xwd__toolbar--wrapper") },
                n.createElement(
                  "ul",
                  { className: "xwd__toolbar--tools" },
                  !g &&
                    n.createElement(
                      "div",
                      null,
                      n.createElement(Id, {
                        clickHandler: () => v(Ct(Pi.Settings)),
                        icon: "xwd__toolbar_icon--settings-gear",
                        ariaLabel: "Puzzle Settings Menu",
                      }),
                    ),
                  n.createElement(Ld, { clickHandler: () => v(Ct(Pi.Pause)) }),
                  !e &&
                    n.createElement(Id, {
                      clickHandler: () => h("REBUS"),
                      label: "Rebus",
                      active: r,
                    }),
                  s
                    ? n.createElement(
                      "div",
                      {
                        className: zl()("xwd__toolbar--mobileResetButton", e),
                      },
                      n.createElement(Id, {
                        clickHandler: () => b(K),
                        label: e ? "" : "Reset",
                        icon: e ? "xwd__toolbar_icon--reset-puzzle" : "",
                        ariaLabel: "Reset",
                      }),
                    )
                    : n.createElement(Md, {
                      autoCheckEnabled: c,
                      activeMenu: o,
                      execute: b,
                      toggleMenuAction: h,
                      menuData: Xd,
                    }),
                  e &&
                    n.createElement(Id, {
                      clickHandler: () => {
                        (d && v({ type: Yt, payload: !0 }), v(Ct(Pi.Info)));
                      },
                      icon: zl()("xwd__toolbar_icon--info", {
                        "xwd__toolbar_icon--info-animation": d &&
                          d.length > 0 && !l,
                      }),
                      ariaLabel: "Info",
                    }),
                  !e &&
                    n.createElement(Vd, {
                      activeMenu: o,
                      toggleMenuAction: h,
                      puzzleData: {
                        puzzleId: u,
                        publicationDate: m,
                        isMini: p,
                        isMidi: f,
                      },
                    }),
                  !e &&
                    n.createElement(Id, {
                      clickHandler: () => h("PENCIL"),
                      icon: "xwd__toolbar_icon--pencil".concat(
                        i ? "-active" : "",
                      ),
                      active: i,
                    }),
                  !s &&
                    n.createElement(
                      "div",
                      { className: "xwd__toolbar--condensedMenu" },
                      n.createElement(
                        Id,
                        {
                          active: "MOBILE" === o,
                          icon: "xwd__toolbar_icon--cheat-menu".concat(
                            "MOBILE" === o || c ? "-active" : "",
                          ),
                          clickHandler: () => h("MENU", "MOBILE"),
                          isAutocheckOn: c,
                          ariaLabel: "Cheat Menu",
                        },
                        n.createElement(Ad, {
                          items: Kd,
                          isAutocheckOn: c,
                          itemHandler: b,
                        }),
                      ),
                    ),
                  e &&
                    n.createElement(Vd, {
                      activeMenu: o,
                      toggleMenuAction: h,
                      puzzleData: {
                        puzzleId: u,
                        publicationDate: m,
                        isMini: p,
                        isMidi: f,
                      },
                    }),
                  g &&
                    n.createElement(
                      "div",
                      null,
                      n.createElement(Id, {
                        clickHandler: () => v(Ct(Pi.Settings)),
                        icon: "xwd__toolbar_icon--settings-gear",
                        ariaLabel: "Puzzle Settings Menu",
                      }),
                    ),
                ),
              );
            return n.createElement(
              zd.Z,
              { bypassPortalsUnlessMobileWeb: !0, isHidden: !1 },
              y,
            );
          }
          const Qd = (e) => e.stats,
            eu = (0, se.createSelector)(Qd, (e) => e.streaks),
            tu = (0, se.createSelector)(
              eu,
              (e) => (null == e ? void 0 : e.currentStreak) || 0,
            ),
            ru = (0, se.createSelector)(Qd, (e) => e.midiStreaks),
            nu = (0, se.createSelector)(
              ru,
              (e) => (null == e ? void 0 : e.currentStreak) || 0,
            );
          var ou = r(69202),
            au = r(50969),
            iu = r(62792),
            lu = r.n(iu),
            su = r(89064),
            cu = r(24303),
            du = r(79623),
            uu = (e) => {
              let { isMini: t, isMidi: r, isGold: o } = e;
              const { isWeb: a } = (0, Za.vB)(),
                i = (t || r) && a,
                l = !t && o ? "gold" : "blue",
                s = "xwd__"
                  .concat(
                    i && t ? "mini" : i && r ? "midi" : "puzzle",
                    "-progress--",
                  )
                  .concat(l, "-star"),
                c = t && a
                  ? "mini__puzzle-icon"
                  : r && a
                  ? "midi__puzzle-icon"
                  : "xwd__puzzle-icon";
              return n.createElement("div", {
                "data-star": o,
                "data-testid": "puzzle-icon",
                className: zl()(c, s),
              });
            };
          function mu(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function pu(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? mu(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : mu(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const fu = {
              label: "mini-page",
              icon: "mini",
              href: "/crosswords/game/mini",
              title: "The Mini",
              description: "Solve in seconds",
            },
            gu = {
              label: "game-page",
              icon: "crossword",
              href: "/crosswords/game/daily",
              title: "The Crossword",
              description: "Crack the clues",
            },
            vu = {
              label: "connections",
              context: "connections",
              icon: "connections",
              href: "/games/connections",
              title: "Connections",
              description: "Group words",
            },
            bu = {
              label: "sudoku",
              context: "sudoku",
              icon: "sudoku",
              href: "/puzzles/sudoku",
              title: "Sudoku",
              description: "Decode digits",
            },
            hu = {
              label: "strands",
              context: "strands",
              icon: "strands",
              href: "/games/strands",
              title: "Strands",
              description: "Find hidden words",
            },
            yu = {
              label: "spelling-bee",
              context: "spelling-bee",
              icon: "sb",
              href: "/puzzles/spelling-bee",
              title: "Spelling Bee",
              description: "Wrangle words",
            },
            wu = {
              label: "game-page",
              context: "daily-page",
              icon: "crossword",
              href: "/crosswords/game/daily",
              title: "The Crossword",
              description: "Crack clues",
            },
            _u = {
              label: "wordle",
              icon: "wa",
              href: "/games/wordle/index.html",
              title: "Wordle",
              description: "Untangle terms",
            },
            Eu = {
              label: "archive",
              icon: "wa",
              href: "/games/wordle/archive",
              title: "Wordle Archive",
              description: "",
            },
            Ou = {
              label: "mini-archive",
              icon: "mini",
              href: "/crosswords/archive/mini",
              title: "The Mini Archive",
              description: "",
            },
            Su = {
              label: "spelling-bee-hub",
              icon: "sb",
              href: "/puzzles/spelling-bee/hub",
              title: "Spelling Bee Past Puzzles",
              description: "",
            },
            ku = () => {
              const e = [];
              return (e.push(yu, wu, vu, hu, bu), e);
            };
          var Pu = "NewsletterOptIn-module_layeredElementsContainer__rLeeN",
            xu = "NewsletterOptIn-module_layeredElement__JsZte",
            Cu = "NewsletterOptIn-module_hidden__vwwso";
          const ju = "".concat(
              l.env.assets,
              "/assets/newsletters/newsletter-opt-in-plus.svg",
            ),
            Tu = "".concat(
              l.env.assets,
              "/assets/newsletters/newsletter-opt-in-checkmark.svg",
            ),
            Du = (e) => {
              let { handleOptIn: t, newOptInSuccess: r } = e;
              const o = (0, a.v9)(Ae);
              return (
                (0, n.useEffect)(() => {
                  (0, l.hX)(
                    "congrats-modal",
                    "midi-page",
                    "gameplay-newsletter",
                    o,
                  );
                }, []),
                  n.createElement(
                    "div",
                    { className: "NewsletterOptIn-module_container__rCRzy" },
                    n.createElement("img", {
                      src: "".concat(
                        l.env.assets,
                        "/assets/newsletters/gameplay-newsletter.svg",
                      ),
                      alt: "Gameplay Newsletter",
                      className: "NewsletterOptIn-module_newsletterIcon__olqps",
                    }),
                    n.createElement(
                      "div",
                      {
                        className: "NewsletterOptIn-module_textContent__us6EK",
                      },
                      n.createElement("span", null, "Newsletter"),
                      n.createElement(
                        "p",
                        { className: "NewsletterOptIn-module_title__FQ47q" },
                        "Gameplay",
                      ),
                      n.createElement(
                        "div",
                        {
                          className: zl()(
                            Pu,
                            "NewsletterOptIn-module_description__wYsbw",
                          ),
                        },
                        n.createElement(
                          "p",
                          {
                            className: zl()(xu, { [Cu]: r }),
                            "aria-hidden": r,
                          },
                          "Puzzles, brain teasers, solving tips and more, delivered to your inbox twice a week.",
                        ),
                        n.createElement(
                          "p",
                          {
                            className: zl()(xu, { [Cu]: !r }),
                            "aria-hidden": !r,
                          },
                          "Thanks for signing up. We’ve sent you a confirmation email.",
                        ),
                      ),
                    ),
                    n.createElement(
                      "button",
                      {
                        type: "button",
                        className: zl()(
                          Pu,
                          "NewsletterOptIn-module_optInButton__ZyXiq",
                        ),
                        onClick: () => {
                          ((0, l.ob)({
                            region: "gameplay-newsletter",
                            element: { name: "midi-page", label: "opt-in" },
                            context: o,
                          }),
                            t());
                        },
                        "aria-label": "".concat(
                          r
                            ? "Signed up for the Gameplay newsletter"
                            : "Sign up for the Gameplay newsletter",
                        ),
                        disabled: r,
                      },
                      n.createElement("img", {
                        className: zl()(xu, { [Cu]: r }),
                        src: ju,
                        "aria-hidden": "true",
                        alt: "",
                      }),
                      n.createElement("img", {
                        className: zl()(xu, { [Cu]: !r }),
                        src: Tu,
                        "aria-hidden": "true",
                        alt: "",
                      }),
                    ),
                  )
              );
            };
          var Nu = r(71646);
          function Lu(e, t, r, n, o, a, i) {
            try {
              var l = e[a](i),
                s = l.value;
            } catch (e) {
              return void r(e);
            }
            l.done ? t(s) : Promise.resolve(s).then(n, o);
          }
          function zu(e) {
            return function () {
              var t = this,
                r = arguments;
              return new Promise(function (n, o) {
                var a = e.apply(t, r);
                function i(e) {
                  Lu(a, n, o, i, l, "next", e);
                }
                function l(e) {
                  Lu(a, n, o, i, l, "throw", e);
                }
                i(void 0);
              });
            };
          }
          const Iu = (e) => {
            let { midiTitle: t, isMini: r } = e;
            const o = r ? "next-game" : "congrats-modal",
              a = r ? "mini-page" : "game-page";
            return (
              (0, n.useEffect)(() => {
                (0, l.hX)(o, a);
              }, [t]),
                n.createElement(
                  "a",
                  {
                    className: "midi-cta",
                    href: "/crosswords/game/midi",
                    onClick: () =>
                      (0, l.ob)({
                        element: { name: a, label: "next-game" },
                        context: "midi-page",
                      }),
                  },
                  n.createElement("img", {
                    src: "".concat(l.env.assets, "/assets/icons/midi.svg"),
                    alt: "The Midi",
                    className: "midi-icon",
                  }),
                  n.createElement(
                    "p",
                    null,
                    t
                      ? n.createElement(
                        n.Fragment,
                        null,
                        "Play ",
                        n.createElement("strong", null, "The Midi."),
                        " Today’s theme:",
                        n.createElement("br", null),
                        "“",
                        t,
                        "”",
                      )
                      : n.createElement(
                        n.Fragment,
                        null,
                        "Solve this themed ",
                        n.createElement("strong", null, "Midi"),
                        " puzzle",
                      ),
                  ),
                  n.createElement("img", {
                    src: "".concat(
                      l.env.assets,
                      "/assets/wordle/arrow-right.svg",
                    ),
                    "aria-hidden": "true",
                    className: "arrow",
                  }),
                  n.createElement("span", { className: "new-label" }, "New"),
                )
            );
          };
          var Au = r(82371),
            Mu = r.n(Au),
            Ru = r(20931);
          function Bu() {
            return (
              (Bu = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) {
                    Object.prototype.hasOwnProperty.call(r, n) &&
                      (e[n] = r[n]);
                  }
                }
                return e;
              }), Bu.apply(this, arguments)
            );
          }
          const Uu = (e) => {
            let { header: t, games: r, isMini: o } = e;
            const a = o ? "mini-page" : "midi-page";
            return n.createElement(
              "div",
              {
                className: "GamesCarousel-module_carousel__xzQQS",
                "data-testid": "games-carousel",
              },
              t &&
                n.createElement(
                  "div",
                  {
                    className:
                      "GamesCarousel-module_carousel__header-container__YP3cn",
                  },
                  n.createElement("hr", {
                    className: "GamesCarousel-module_carousel__line__bZUwe",
                  }),
                  n.createElement(
                    "p",
                    {
                      className: "GamesCarousel-module_carousel__header__awm5n",
                    },
                    t,
                  ),
                ),
              n.createElement(
                "div",
                {
                  className:
                    "GamesCarousel-module_carousel__games-container__JbI8O",
                },
                r.map((e) =>
                  n.createElement(
                    "div",
                    {
                      className:
                        "GamesCarousel-module_carousel__item-container__oo3OK",
                      key: e.label,
                    },
                    n.createElement(
                      Ru.I,
                      Bu(
                        {
                          impressionTracking: {
                            name: "next-game",
                            region: a,
                            label: e.label,
                          },
                          clickTracking: {
                            element: { name: a, label: "next-game" },
                            context: e.context,
                          },
                        },
                        e,
                      ),
                    ),
                  )
                ),
              ),
            );
          };
          var Gu = r(12547),
            Wu = r(80692);
          const Yu = "https://www.nytimes.com/subscription/games";
          var Hu = (e) => {
            let {
              message: t,
              subscribeLinkContext: r,
              subscribeButtonTxt: o,
              eventLabel: a,
              clickLabel: i,
            } = e;
            const l = {
                spellingBee: () => {
                  ((0, Zt.$)("click", "", a, "spelling-bee"),
                    (window.location.href = "/puzzles/spelling-bee"));
                },
                tiles: () => {
                  ((0, Zt.$)("click", "", a, "tiles"),
                    (window.location.href = "/puzzles/tiles"));
                },
                hub: () => {
                  window.location.href = Wu.t.hub;
                },
              },
              s = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : window;
                if (!t || !t.navigationLinks || !t.navigationLinks.subscribe) {
                  return Yu;
                }
                const r = t.navigationLinks.subscribe;
                return e && r[e] ? r[e] : r.default || Yu;
              })(r, window);
            return n.createElement(
              "div",
              { className: "xwd__promotional-content--subscriptionUpsell" },
              n.createElement(
                "div",
                { className: "xwd__promotional-content--minimodalMessage" },
                t,
              ),
              n.createElement(
                "a",
                {
                  href: s,
                  onClick: (e) => {
                    var t;
                    const r = (null === (t = e.currentTarget) || void 0 === t
                        ? void 0
                        : t.getAttribute("href")) || "",
                      n = (0, Ul.I3)(r);
                    i
                      ? (0, l[i])()
                      : r && n
                      ? ((0, Ul.Hu)(r), (0, Zt.$)("click", "", a, "subscribe"))
                      : r && !n && (window.location.href = r);
                  },
                  className: "xwd__promotional-content--link",
                },
                o || "Subscribe To Play",
              ),
            );
          };
          const Fu = () => (
            (0, n.useEffect)(() => {
              (0, Zt.h)("next-game", "mini-page", "spelling-bee");
            }, []),
              n.createElement(
                "a",
                {
                  href: "/puzzles/spelling-bee",
                  className:
                    "xwd__nextGameSuggestion--spellingBeeCardEmphasis xwd__nextGameSuggestion--spellingBeeBase",
                  onClick: () => {
                    (0, Zt.$)(
                      "",
                      "spelling-bee",
                      "mini-page",
                      "next-game",
                      "",
                      !0,
                    );
                  },
                },
                n.createElement(Td.Z, { icon: "spelling-bee" }),
                n.createElement(
                  "div",
                  null,
                  n.createElement(
                    "span",
                    { className: "xwd__nextGameSuggestion--gameTitle" },
                    "Spelling Bee",
                  ),
                  n.createElement(
                    "span",
                    null,
                    "Tackle ",
                    n.createElement("strong", null, "today's puzzle."),
                  ),
                ),
                n.createElement(Td.Z, { icon: "caret-right" }),
              )
          );
          var qu = () =>
            n.createElement(
              "div",
              { className: "xwd__nextGameSuggestion" },
              n.createElement(
                "p",
                { className: "xwd__nextGameSuggestion--text" },
                "Game for something new?",
                n.createElement("br", null),
                "Make as many words as you can with 7 letters.",
              ),
              n.createElement(Fu, null),
            );
          function Zu(e) {
            let {
              appCta: t,
              isMini: r,
              isMidi: o,
              hasXwd: i,
              registeredNonSub: s,
              didRenderGamesCarousel: c,
            } = e;
            const d = Ml.mz,
              {
                isWeb: u,
                isDesktop: m,
                isNewsreaderApp: p,
                isMobileWeb: f,
                isTablet: g,
              } = (0, Za.vB)(),
              v = r ? "mini-modal" : o ? "midi-modal" : "game-modal",
              b = r && u,
              h = o && u,
              y = b
                ? "mini-congrats-modal"
                : h
                ? "midi-congrats-modal"
                : "daily-congrats-modal",
              w = p && "Newsreader",
              _ = "".concat(r ? "mini" : "daily", "Congrats").concat(w),
              E = (0, a.v9)(Ae),
              O = !(b || h || i || s),
              S = ku(),
              k = f || (g && u);
            (0, n.useEffect)(() => {
              i || (0, Zt.h)("softpaywall", y, t);
            }, [i]);
            if (O && !c) {
              return n.createElement(qu, null);
            }
            if (k && !c) {
              return n.createElement(
                "div",
                { className: "leaderboard-deprecation" },
                n.createElement(
                  "div",
                  { className: "leaderboard-deprecation__banner-container" },
                  n.createElement(
                    "a",
                    {
                      href: d,
                      onClick: () => {
                        (0, l.LW)({
                          element: {
                            name: "mini-page",
                            label: "leaderboard-download-app",
                          },
                          region: "congrats",
                          label: d,
                          context: E,
                        });
                      },
                    },
                    n.createElement(Mu(), null),
                  ),
                ),
                !c &&
                  n.createElement(Uu, {
                    header: "PLAY TODAY’S GAMES",
                    games: S,
                    isMini: r,
                  }),
              );
            }
            if (u && m) {
              const e = r
                  ? "/crosswords/archive/mini"
                  : "/crosswords/archive/midi",
                t = r ? "mini-page" : "midi-page";
              return n.createElement(
                "div",
                null,
                !c &&
                  n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(Gu.Z, {
                      nextGame: r ? "archive-sb-mini" : "archive-sb-midi",
                      url: e,
                      fromGame: t,
                      puzzleId: E,
                    }),
                    n.createElement(Gu.Z, {
                      nextGame: "spelling-bee",
                      fromGame: t,
                      url: "/puzzles/spelling-bee",
                    }),
                  ),
              );
            }
            return s
              ? Hu({
                message:
                  "Have you played our new matching game? It’s mesmerizing.",
                eventLabel: v,
                clickLabel: "tiles",
                subscribeButtonTxt: "Try Tiles >>",
                subscribeLinkContext: _,
              })
              : !c &&
                Hu({
                  message:
                    "Want to be a better solver? Up your game with puzzles for every skill level.",
                  eventLabel: v,
                  clickLabel: "hub",
                  subscribeButtonTxt: "More Puzzles",
                  subscribeLinkContext: _,
                });
          }
          function $u(e) {
            let { streakLength: t, verticalStreakLength: r = 0 } = e;
            const o = (0, a.v9)(rl),
              i = (0, a.v9)(He),
              l = t + 1,
              s = r + 1;
            let c;
            return (
              (c = l >= s
                ? "YOU HAVE A ".concat(l, "-DAY STREAK")
                : "".concat(s, " ").concat(i, "s in a row")),
                o ? null : n.createElement(
                  "div",
                  { className: "xwd__congrats-modal--streakLength" },
                  n.createElement("i", {
                    className: "xwd__congrats-modal--starIcon",
                  }),
                  c,
                )
            );
          }
          const Vu = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : window.navigator.userAgent;
            return /Android/.test(e)
              ? "https://play.google.com/store/apps/details?id=com.nytimes.crossword&referrer=utm_source%3DAndroidReaderMini%26utm_medium%3DCongratsModule%26utm_term%3DgetTheApp%26utm_campaign%3DMiniUpsell&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
              : /|iPad|iPhone|/.test(e)
              ? "https://itunes.apple.com/us/app/nytimes-crossword-daily-word/id307569751?mt=8"
              : "";
          };
          function Xu(e) {
            let { appCta: t, HDTest: r } = e;
            const o = (0, a.v9)(Ae);
            return n.createElement(
              "button",
              {
                type: "button",
                onClick: r
                  ? () => {
                    const e = Vu();
                    (window.open(e, "_blank"),
                      (0, Zt.$)(
                        "congrats-modal",
                        "game-page",
                        "game-page",
                        "download-app",
                        "GUAC_HD_XWORD_UPSELL_TEST_245",
                        void 0,
                        void 0,
                      ),
                      localStorage.setItem("app-link-clicked", "true"));
                  }
                  : () => {
                    const e = Vu();
                    (window.open(e, "_blank"),
                      (0, Zt.$)("click", "".concat(o), "mini-page", t),
                      localStorage.setItem("app-link-clicked", "true"));
                  },
                className: "xwd__modal--subtle-button",
              },
              "Get the app",
            );
          }
          function Ku(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function Ju(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Ku(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : Ku(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const Qu = {
              label: "wordle",
              icon: "wordle",
              href: "/games/wordle/index.html",
              title: "Wordle",
              description: "Untangle terms",
            },
            em = {
              label: "connections",
              icon: "connections",
              href: "/games/connections",
              title: "Connections",
              description: "Group words",
            },
            tm = {
              label: "spelling-bee",
              icon: "sb",
              href: "/puzzles/spelling-bee",
              title: "Spelling Bee",
              description: "Wrangle words",
            },
            rm = {
              label: "archive",
              icon: "wordle",
              href: "/games/wordle/archive",
              title: "Wordle Archive",
              description: "",
            },
            nm = {
              label: "mini-archive",
              icon: "mini",
              href: "/crosswords/archive/mini",
              title: "The Mini Archive",
              description: "",
            },
            om = {
              label: "spelling-bee-hub",
              icon: "sb",
              href: "/puzzles/spelling-bee/hub",
              title: "Spelling Bee Past Puzzles",
              description: "",
            },
            am = {
              label: "game-page",
              icon: "crossword",
              href: "/crosswords/game/daily",
              title: "The Crossword",
              description: "Crack the clues",
            },
            im = {
              label: "mini-page",
              icon: "mini",
              href: "/crosswords/game/mini",
              title: "The Mini",
              description: "Solve in seconds",
            },
            lm = {
              label: "strands",
              icon: "strands",
              href: "/games/strands",
              title: "Strands",
              description: "Find hidden words",
            },
            sm = (e) =>
              Ju(Ju({}, e), {}, { showLock: !0 }),
            cm = [Qu, em, tm, sm(rm), sm(nm), sm(om)],
            dm = [Qu, em, tm, rm, nm, om],
            um = [am, im, om, sm(Qu), sm(em), sm(lm)],
            mm = [am, im, om, Qu, em, lm];
          function pm(e) {
            var t;
            let {
              displayAppLink: r,
              appCta: o,
              close: i,
              isMini: l,
              isMidi: s,
              isDaily: c,
              streamLabel: d,
              showTimer: u,
              registeredNonSub: m,
              hasXwd: p,
              isGoldStarEligible: f,
              formattedSolveTime: g,
              streakLength: v,
              verticalStreakLength: b = 0,
              isMobile: h,
              isNewsreader: y = !1,
              publicationDate: w,
              solveTime: _,
              navigateBack: E,
              isClosing: O,
              onRemove: S,
              midiTitle: k,
            } = e;
            const { isWeb: P, isMobileWeb: x } = (0, Za.vB)(),
              { reportExposure: C } = (0, ci.Z)(),
              j = (0, a.v9)(vi),
              {
                handleOptIn: T,
                newOptInSuccess: D,
                isAlreadySubscribed: N,
              } = (function (e, t) {
                const [r, o] = (0, n.useState)(!1),
                  [a, i] = (0, n.useState)(null),
                  l = "GP".toUpperCase(),
                  { isSubscribed: s, isLoadingQuery: c, queryError: d } = Ji(l),
                  [u, { loading: m, error: p }] = (0, Nu.D)(Ki),
                  f = (0, n.useCallback)(
                    zu(function* () {
                      if (!(c || d || s)) {
                        try {
                          var e;
                          (i(null),
                            null !==
                              (e = (yield u({
                                variables: {
                                  input: {
                                    newsletters: [{ productCode: l }],
                                    signupFormVersion: t,
                                  },
                                },
                              })).data) &&
                            void 0 !== e &&
                            e.createNoCaptchaNewsletterSubscription &&
                            o(!0));
                        } catch (e) {
                          (i(e),
                            console.error(
                              "Error subscribing to newsletter:",
                              e,
                            ));
                        }
                      }
                    }),
                    [s, c, d, l, t, u],
                  );
                return {
                  newOptInSuccess: r,
                  isLoading: c || m,
                  hasError: d || p || a,
                  handleOptIn: f,
                  isAlreadySubscribed: s,
                };
              })(0, "games_midi_congrats"),
              L = l ? ti.v : ri.v,
              { unit: z } = (0, ei.useUnit)(L),
              I = (() => {
                const { isStatsigReady: e } = (0, ai.of)(),
                  { client: t } = (0, ai.g_)();
                return (0, n.useMemo)(
                  () =>
                    !!e &&
                    t.checkGate("games_mini_midi_end_screen_chicklets_q2_2026"),
                  [e, t],
                );
              })(),
              A = (P || x) && l && (null == z ? void 0 : z.canShow),
              M = (null == z || null === (t = z.content) || void 0 === t
                ? void 0
                : t.familyPlanUpgradeRoute) || null,
              R = (0, a.v9)(Ae),
              B = (s || l) && P,
              U = !p || B,
              G = n.createElement(
                "span",
                null,
                "in ",
                n.createElement("span", { className: "xwd__bold" }, g),
                ".",
              ),
              [W, Y] = (0, n.useState)(!1),
              H = (0, a.I0)();
            (0, n.useEffect)(() => {
              navigator.canShare &&
                navigator.canShare({
                  title: "NYTimes",
                  text: "Test share",
                  url: "https://www.nytimes.com",
                }) &&
                Y(!0);
            }, []);
            const { isMidiEnabled: F } = (0, di.P)(),
              q = Di(),
              Z = () => {
                const e = /iPad|iPhone/.test(navigator.userAgent),
                  t = s ? "midi" : "mini",
                  r = s
                    ? "I solved the daily midi!"
                    : "I solved the daily mini!";
                if (W && e) {
                  const { shareUrl: e } = Hs(w, _, s, F);
                  (navigator
                    .share({ title: r, url: "".concat(e, "&smid=na-share") })
                    .then(() => {
                      (0, Zt.$)("share-tools", void 0, "native-share", "share");
                    })
                    .catch((e) =>
                      console.warn("Sharing ".concat(t, " time failed"), e)
                    ),
                    i());
                } else {
                  (i(),
                    (0, Zt.$)("congrats", R, "".concat(t, "-page"), "share"),
                    H(Ct(Pi.Share)));
                }
              },
              [$, V] = (0, n.useState)(!1),
              [X, K] = (0, n.useState)(!1),
              [J, Q] = (0, n.useState)([]),
              [ee, te] = (0, n.useState)(""),
              re = (0, su.Z)("hdUpsellTest"),
              ne = (0, su.Z)("hdUpsellTestControl");
            (0, n.useEffect)(() => {
              (C("CONV_GUAC_XWord_HDUpsell_Test_0624"),
                (!re && !ne) ||
                l ||
                (K(!0),
                  (0, Zt.h)(
                    "congrats-modal",
                    "",
                    "GUAC_HD_XWORD_UPSELL_TEST_245",
                    "game-page",
                  )),
                re && !l && V(!0));
            }, [re, $, ne]);
            const oe = [
                n.createElement(dl.zx, {
                  key: "share your results",
                  action: Z,
                  text: "Share your results",
                }),
              ],
              ae = B
                ? [
                  n.createElement(dl.zx, {
                    key: "share your results",
                    action: Z,
                    text: "Share your results",
                  }),
                ]
                : [
                  n.createElement(dl.zx, {
                    key: "share results",
                    action: Z,
                    text: "Share your results",
                    color: "secondary",
                    className: "xwd__congrats-modal--shareButton",
                  }),
                  ...(A ? [] : [
                    n.createElement(dl.zx, {
                      action: E,
                      text: "View all games",
                      key: "view all games",
                    }),
                  ]),
                ],
              ie = [
                n.createElement(dl.zx, {
                  action: () => {
                    X
                      ? ((0, Zt.$)(
                        "congrats-modal",
                        "game-page",
                        "game-page",
                        "admire-puzzle",
                        "GUAC_HD_XWORD_UPSELL_TEST_245",
                        void 0,
                        void 0,
                      ),
                        i())
                      : i();
                  },
                  key: "admire your puzzle",
                  color: "secondary",
                  text: "Admire your puzzle",
                }),
                n.createElement(dl.zx, {
                  key: "view all games",
                  action: () => {
                    X
                      ? ((0, Zt.$)(
                        "congrats-modal",
                        "game-page",
                        "game-page",
                        "view-games",
                        "GUAC_HD_XWORD_UPSELL_TEST_245",
                        void 0,
                        "https://www.nytimes.com/crosswords",
                      ),
                        E())
                      : E();
                  },
                  text: "View all games",
                }),
              ],
              le = c && q,
              se = n.createElement(
                "div",
                { className: "xwd__center" },
                "You solved the crossword",
                n.createElement("br", null),
                u && G,
              ),
              ce = l || !p || (h && !y),
              de = "ios" === window.newsreaderAppPlatform,
              ue = s ? (p ? mm : um) : p ? dm : cm;
            return (
              (0, n.useEffect)(() => {
                if (P) {
                  const e = ((e) =>
                      e
                        ? "INCLUDED IN YOUR SUBSCRIPTION"
                        : "PLAY TODAY’S GAMES")(p),
                    t = ((e) => {
                      const t = [];
                      return (
                        e
                          ? t.push(
                            _u,
                            vu,
                            yu,
                            pu(pu({}, Eu), {}, { description: "" }),
                            Ou,
                            Su,
                          )
                          : t.push(
                            _u,
                            vu,
                            yu,
                            pu(
                              pu({}, Eu),
                              {},
                              { showLock: !0, description: "" },
                            ),
                            pu(pu({}, Ou), {}, { showLock: !0 }),
                            pu(pu({}, Su), {}, { showLock: !0 }),
                          ), t
                      );
                    })(p),
                    r = ((e) => {
                      const t = [];
                      return (
                        e ? t.push(gu, fu, Su, _u, vu, hu) : t.push(
                          gu,
                          fu,
                          Su,
                          pu(pu({}, _u), {}, { showLock: !0 }),
                          pu(pu({}, vu), {}, { showLock: !0 }),
                          pu(pu({}, hu), {}, { showLock: !0 }),
                        ), t
                      );
                    })(p);
                  (te(e), Q(l ? t : r));
                }
              }, [P, p]),
                n.createElement(
                  ss.Z,
                  {
                    bodyClassName: "xwd__congrats-modal",
                    close: i,
                    closeLabel: "Back to puzzle",
                    footer: s ? null : ce
                      ? n.createElement(
                        n.Fragment,
                        null,
                        r && n.createElement(Xu, { appCta: o, HDTest: X }),
                        U &&
                          n.createElement(Zu, {
                            isMini: l,
                            isMidi: s,
                            didRenderGamesCarousel: A,
                            appCta: o,
                            registeredNonSub: m,
                            hasXwd: p,
                          }),
                      )
                      : null,
                    isClosing: O,
                    onRemove: S,
                    containerClassName: de
                      ? "container-with-inset"
                      : "xwd__congrats-container",
                  },
                  n.createElement(
                    "div",
                    {
                      className: B
                        ? "mini__congrats-modal--content"
                        : "xwd__congrats-modal--content",
                    },
                    n.createElement(uu, { isMini: l, isMidi: s, isGold: f }),
                    n.createElement(dl.Dx, {
                      size: "large",
                      text: j ? "See you tomorrow!" : "Congratulations!",
                    }),
                    d
                      ? j
                        ? n.createElement(
                          "div",
                          {
                            className:
                              "xwd__center xwd__congrats-modal--message midi-npe-congrats-copy",
                          },
                          "You solved",
                          " ",
                          n.createElement(
                            "span",
                            { className: "xwd__bold" },
                            "your first Midi",
                          ),
                          " Crossword",
                          u
                            ? n.createElement(
                              n.Fragment,
                              null,
                              " ",
                              "in",
                              " ",
                              n.createElement(
                                "span",
                                {
                                  className: zl()(
                                    "xwd__bold",
                                    "xwd__no-wrap",
                                  ),
                                },
                                g,
                              ),
                            )
                            : "",
                          ".",
                          n.createElement("br", null),
                          n.createElement(
                            "span",
                            { className: "community-stat" },
                            "Over 18.5 million Midi puzzles solved. Glad you joined the fun!",
                          ),
                        )
                        : d && "mini" === d.toLowerCase()
                        ? n.createElement(
                          "div",
                          {
                            className: B
                              ? "xwd__center mini__congrats-modal--message"
                              : "xwd__center xwd__congrats-modal--message",
                          },
                          "You solved",
                          " ",
                          n.createElement(
                            "span",
                            { className: "xwd__bold" },
                            "The ",
                            d,
                          ),
                          n.createElement("br", null),
                          " ",
                          u && G,
                        )
                        : n.createElement(
                          "div",
                          {
                            className:
                              "xwd__center xwd__congrats-modal--message",
                          },
                          "You solved a ",
                          n.createElement(
                            "span",
                            { className: "xwd__bold" },
                            d,
                          ),
                          n.createElement("br", null),
                          "Crossword ",
                          u && G,
                        )
                      : se,
                    f &&
                      (v > 0 || b > 0) &&
                      n.createElement($u, {
                        streakLength: v,
                        verticalStreakLength: b,
                      }),
                    n.createElement(du.Z, {
                      buttons: (() => {
                        if (le) {
                          return [
                            n.createElement(dl.zx, {
                              action: E,
                              text: "View all games",
                              key: "view all games",
                              className: "spacing-top",
                            }),
                          ];
                        }
                        let e;
                        return (
                          (e = s ? oe : l ? ae : ie), h ? [...e].reverse() : e
                        );
                      })(),
                      wrapperClassName: B
                        ? "mini__congrats-modal--buttons-wrapper"
                        : "xwd__congrats-modal--buttons-wrapper",
                    }),
                    j &&
                      !N &&
                      n.createElement(Du, {
                        handleOptIn: T,
                        newOptInSuccess: D,
                      }),
                  ),
                  $ &&
                    n.createElement(
                      "div",
                      {
                        className:
                          "xwd__congrats-modal--homeDelivery_container",
                      },
                      n.createElement("hr", {
                        className: "xwd__congrats-modal--homeDelivery_divider",
                      }),
                      n.createElement(
                        "a",
                        {
                          href:
                            "https://www.nytimes.com/subscription/home-delivery?source=crossword-complete",
                          onClick: () => {
                            (0, Zt.$)(
                              "congrats-modal",
                              "game-page",
                              "goto-subscribe",
                              "Solve in pencil, too. - Enjoy the Crossword in print.",
                              "GUAC_HD_XWORD_UPSELL_TEST_245",
                              void 0,
                              "https://www.nytimes.com/subscription/home-delivery?source=crossword-complete",
                            );
                          },
                        },
                        n.createElement(
                          "div",
                          {
                            className:
                              "xwd__congrats-modal--homeDelivery_testButton",
                          },
                          n.createElement("i", {
                            className:
                              "xwd__congrats-modal--homeDelivery_newspaper_icon",
                          }),
                          n.createElement(
                            "p",
                            {
                              className:
                                "xwd__congrats-modal--homeDelivery_main",
                            },
                            "Solve in pencil, too.",
                            n.createElement("br", null),
                            n.createElement(
                              "span",
                              {
                                className:
                                  "xwd__congrats-modal--homeDelivery_sub",
                              },
                              "Enjoy the Crossword in print.",
                            ),
                          ),
                          n.createElement("i", {
                            className:
                              "xwd__congrats-modal--homeDelivery_caret_icon",
                          }),
                        ),
                      ),
                    ),
                  q && n.createElement(Iu, { midiTitle: k, isMini: l }),
                  (l || c) &&
                    !q &&
                    M &&
                    n.createElement(
                      "div",
                      { className: "xwd_phoenix-congrats-end-screen" },
                      M &&
                        n.createElement(au.GamesEndScreenFamilyUpgradeBanner, {
                          familyPlanUpgradeRoute: M,
                          unit: z,
                          topDecorator: n.createElement(au.VerticalSpacer, {
                            space: 2,
                          }),
                        }),
                    ),
                  (A || s) &&
                    n.createElement(
                      n.Fragment,
                      null,
                      I
                        ? n.createElement(cu.L, {
                          title: ee,
                          gamesArray: J,
                          tracking: {
                            context: String(R),
                            event: "",
                            eventRegion: l ? "mini-page" : "midi-page",
                            eventDate: "",
                          },
                        })
                        : n.createElement(
                          "div",
                          { className: "xwd__congrats-modal--omaESAContent" },
                          n.createElement(lu(), {
                            gamesArray: ue,
                            hasSubAccess: p,
                            fromGame: l
                              ? "mini-page"
                              : s
                              ? "midi-page"
                              : "game-page",
                          }),
                        ),
                    ),
                )
            );
          }
          function fm(e) {
            let {
              displayAppLink: t,
              appCta: r,
              close: o,
              showTimer: a,
              puzzleId: i,
              puzzleTitle: l,
              formattedSolveTime: s,
              isClosing: c,
              onRemove: d,
            } = e;
            const u = n.createElement(
                "span",
                null,
                "in ",
                n.createElement("span", { className: "xwd__bold" }, s),
              ),
              m = "ios" === window.newsreaderAppPlatform;
            return n.createElement(
              ss.Z,
              {
                buttons: [
                  n.createElement(dl.zx, {
                    key: "Back to the guide",
                    action: () => {},
                    isLink: !0,
                    url:
                      "https://www.nytimes.com/guides/crosswords/how-to-solve-a-crossword-puzzle#"
                        .concat(
                          ji(i),
                        ),
                    text: "Back to the guide",
                  }),
                ],
                close: o,
                footer: t && n.createElement(Xu, { appCta: r }),
                isClosing: c,
                onRemove: d,
                containerClassName: m ? "container-with-inset" : "",
              },
              n.createElement(
                "div",
                { className: "xwd__congrats-modal--content" },
                n.createElement("div", { className: "xwd__illustration" }),
                n.createElement(dl.Dx, {
                  size: "large",
                  text: "Super Solving",
                }),
                n.createElement(
                  "div",
                  { className: "xwd__center" },
                  "You solved the",
                  " ",
                  n.createElement("span", { className: "xwd__bold" }, l),
                  " Mini",
                  " ",
                  a && u,
                  ".",
                ),
              ),
            );
          }
          var gm = r(29395);
          const vm = (e) => {
              let { isMini: t, isMidi: r } = e;
              return t
                ? "Continue to The Mini Crossword"
                : r
                ? "Continue to The Midi Crossword"
                : "Continue to The Crossword";
            },
            bm = {
              loading: {
                component: (e) => {
                  let { hasLoaded: t, transition: r, isActive: o } = e;
                  const a = ul();
                  return n.createElement(
                    dl.im,
                    { bgColor: "$".concat(a, "-crossword-blue") },
                    n.createElement(cl.E, {
                      hasLoaded: t,
                      isActive: o,
                      transition: () =>
                        r("welcome"),
                      transitionTo: "welcome",
                      barBgColor: "rgba(255, 255, 255, 0.6)",
                      barColor: "black",
                      containerClassName: "xwd__loading-container",
                    }),
                  );
                },
                background: "var(--bg-moment)",
              },
              welcome: {
                component: (e) => {
                  let { transition: t, isActive: r } = e;
                  const o = (0, a.v9)(De),
                    i = (0, a.v9)(Be),
                    s = (0, a.v9)(Ue),
                    c = (0, a.v9)(Ae),
                    d = null == c ? void 0 : c.toString(),
                    u = (0, a.v9)(ze),
                    m = Boolean(null == u ? void 0 : u.afterSolve),
                    { user: p } = (0, ii.aF)(),
                    f = (0, a.I0)(),
                    { shouldShowOmaSubscribeCTA: g } = (0, Ql.O)(ni.config),
                    { shouldShowOmaSubscribeCTA: v } = (0, Ql.O)(oi.config),
                    b = (0, a.v9)(Pn),
                    h = (0, a.v9)(vi),
                    w = (0, a.v9)(ol),
                    E = (() => {
                      const { isStatsigReady: e } = (0, ai.of)(),
                        { client: t } = (0, ai.g_)(),
                        { isWeb: r } = (0, Za.vB)(),
                        o = (0, a.v9)(Ae),
                        i = (0, a.v9)(Ge),
                        l = (0, a.v9)(Be);
                      return (0, n.useMemo)(() => {
                        if (!e || !r) return null;
                        if (!mi(o, i, l)) return null;
                        try {
                          return t.checkGate(
                              "games_freearchiveallusersxwd_0526",
                            )
                            ? {
                              isEligibleForFreeFromArchiveCopy: !0,
                              description:
                                "You have free access to this puzzle. Ready to solve it?",
                            }
                            : null;
                        } catch (e) {
                          return (
                            console.error(
                              "Failed to check FreeFromArchive start copy gate:",
                              e,
                            ), null
                          );
                        }
                      }, [e, t, r, o, i, l]);
                    })(),
                    O = (() => {
                      const { isStatsigReady: e } = (0, ai.of)(),
                        { client: t } = (0, ai.g_)(),
                        r = (0, a.v9)(Ue);
                      return (0, n.useMemo)(
                        () =>
                          !(!e || !r) &&
                          t.checkGate("games_midi_npe_phase3_dev"),
                        [e, t, r],
                      );
                    })(),
                    S = (0, a.v9)(Tn),
                    k = (0, a.v9)(gi),
                    x = O && k >= 1 && 0 === S,
                    {
                      isWeb: C,
                      isMobileWeb: j,
                      isTablet: T,
                      isNewsreaderApp: D,
                    } = (0, Za.vB)(),
                    N = C,
                    { shouldShow: L, isLoading: z } = (0, Jl.C)(),
                    { shouldShowCrossPlayCTA: I, crossPlayBannerProps: A } =
                      (0, Rl.D)({
                        gameName: ml(null == o ? void 0 : o.publishStream),
                        puzzleId: d,
                        region: "welcome",
                        hasGameProgress: !1,
                      }),
                    M = i && !(null != o && o.freePuzzle),
                    R = (i && g) || (s && v),
                    B = j || (T && C),
                    { shouldShow: U, bannerProps: G } = (0, es.A)({
                      gameName: ml(null == o ? void 0 : o.publishStream),
                      puzzleId: null == c ? void 0 : c.toString(),
                    });
                  n.useEffect(() => {
                    var e;
                    r &&
                      (w &&
                        (f(
                          ((e = Zl.REGISTRATION_SUCCESS),
                            { type: na, payload: { name: e } }),
                        ),
                          f({ type: _ })),
                        B &&
                        !U &&
                        (0, Zt.h)(
                          "welcome",
                          ml(null == o ? void 0 : o.publishStream),
                          "download-app",
                          d,
                        ),
                        M && (0, Zt.h)("welcome-modal", "mini-page", "", d),
                        s && (0, Zt.h)("welcome-modal", "midi-page", "", d));
                  }, [r, s, M, U, w, B]);
                  const W = () => {
                      if (b) {
                        return (
                          f(ki(p)),
                            f({ type: y }),
                            Ti(),
                            f(P(m ? 2e3 : 1e3)),
                            void t("game")
                        );
                      }
                      const e = (function () {
                        let { entitlement: e, isMobileWeb: t } =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : { entitlement: "anon", isMobileWeb: !1 };
                        return !e.includes("cr") && t;
                      })({ entitlement: p.entitlement, isMobileWeb: j });
                      e ? t("ad") : (f(ki(p)), t("game"));
                    },
                    Y = () => {
                      let e = window.navigationLinks.register;
                      (N && (e = window.navigationLinks.loginOffer),
                        window.navigationLinks.register &&
                        ((0, Zt.$)("", "", "mini-page", "register"),
                          (window.location.href = e)));
                    },
                    H = (e) => {
                      (0, l.LW)({
                        element: {
                          name: ml(null == o ? void 0 : o.publishStream),
                          label: "login-cta-paywall",
                        },
                        region: "paywall",
                        context: d,
                      });
                      let t = N
                        ? (function () {
                          var e;
                          let t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : window,
                            r = arguments.length > 1 ? arguments[1] : void 0;
                          const n = (null == t ||
                              null === (e = t.navigationLinks) ||
                              void 0 === e
                            ? void 0
                            : e.login) || "";
                          return (0, Ul.I3)(n) ? n : r ? (0, l.T0)(ql, r) : ql;
                        })(window || void 0)
                        : (0, Bl.Z)(window || void 0);
                      e && t && window.newsreaderAppPlatform
                        ? (function (e) {
                          let t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "",
                            r = arguments.length > 2 ? arguments[2] : void 0;
                          if (window.isHybridWebView && window.NativeBridge) {
                            (e.preventDefault(),
                              window.isHybridWebView &&
                              window.NativeBridge &&
                              window.NativeBridge.gamesAuthenticateUser(
                                "login",
                              ));
                          } else {
                            const e = r || (0, Bl.U)(window || void 0, t);
                            (0, Ul.I3)(e)
                              ? (0, Ul.Hu)(e)
                              : window.location.assign(e);
                          }
                        })(e, void 0, t)
                        : t
                        ? (window.location.href = t)
                        : console.error("Login link is undefined or empty");
                    };
                  if (!o) return null;
                  const { publishStream: F } = o,
                    q = !!(0, l.vl)("nl"),
                    Z = !p.isLoggedIn && !D && !q,
                    $ = window.location.pathname.includes(
                      "/crosswords/game/paid/",
                    ),
                    V = s
                      ? n.createElement(vl(), {
                        puzzleID: d,
                        color: "primary",
                        variant: "extraExtraWide",
                      })
                      : n.createElement(fl(), {
                        puzzleID: d,
                        color: "primary",
                        variant: "extraExtraWide",
                      }),
                    X = R ? V : null,
                    K = () => {
                      const e = s ? "midi-page" : i ? "mini-page" : "game-page";
                      (0, l.ob)({
                        name: e,
                        label: "welcome-download-app",
                        context: c,
                        region: "welcome",
                        moduleLabel: "https://nytimes.onelink.me/IM32/jna276xj",
                      });
                    },
                    J = ul(),
                    Q = !Z || $,
                    ee = {
                      game: {
                        game: jl(F),
                        icon: J,
                        title: h ? "Welcome to your first Midi puzzle." : jl(F),
                        description: s && !p.hasXwd
                          ? {
                            text: "Subscribe to play the Midi.",
                            variant: "small",
                          }
                          : M && !p.hasXwd
                          ? {
                            text: "Subscribe to play the Mini.",
                            variant: "small",
                          }
                          : null != E &&
                              E.isEligibleForFreeFromArchiveCopy &&
                              !b
                          ? { text: E.description, variant: "small" }
                          : Z
                          ? {
                            text:
                              "Save your progress across devices and compare times with friends.",
                            variant: "small",
                          }
                          : b
                          ? {
                            text: "You finished the puzzle. <br> Take a look.",
                          }
                          : x
                          ? {
                            text: "Go ahead, add another day to your <em>"
                              .concat(
                                k,
                                " day</em> streak.",
                              ),
                            variant: "crossword",
                          }
                          : {
                            text: h
                              ? "Can you solve this perfect-size puzzle?"
                              : "Ready to start solving?",
                          },
                        date: Q ? Dl(o.publicationDate, o.publishStream) : "",
                        infoText: (!s && !M) || p.hasXwd
                          ? Z
                            ? $
                              ? n.createElement(Il, { meta: o, showDate: !1 })
                              : null
                            : n.createElement(Il, { meta: o, showDate: !1 })
                          : null,
                        bgColor: "$".concat(J, "-crossword-blue"),
                        customButtons: (() => {
                          const e = n.createElement(bl.default, {
                              action: W,
                              text: b ? "View solved puzzle" : "Play",
                              key: b ? "View solved puzzle" : "Play",
                              variant: "extraExtraWide",
                            }),
                            t = n.createElement(bl.default, {
                              action: H,
                              text: "Log in",
                              key: "Log in",
                              variant: "extraExtraWide",
                              color: "secondary",
                            }),
                            r = n.createElement(bl.default, {
                              action: Y,
                              text: "Create a free account",
                              key: "Create a free account",
                              variant: "extraExtraWide",
                            }),
                            o = n.createElement(
                              "button",
                              {
                                type: "button",
                                onClick: W,
                                className:
                                  "xwd__modal--subtle-button welcome-button",
                              },
                              "Play without an account",
                            );
                          return (!M && !s) || p.hasXwd
                            ? Z ? [r, o] : [e]
                            : p.isLoggedIn
                            ? X ? [X] : []
                            : X
                            ? [X, t]
                            : [t];
                        })(),
                        meta: o.title ? Cl(o.title) : void 0,
                        promoteMeta: !0,
                        editor: "",
                        wrapperClassName: h ? "midi-npe-welcome" : void 0,
                      },
                    };
                  return n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(Xl, ee),
                    (() => {
                      if (!B || z) return null;
                      if (U) {
                        return n.createElement(ts.N, rs({ onClickLink: K }, G));
                      }
                      if (L) return n.createElement(Kl.c, { onClickLink: K });
                      if (I) {
                        return n.createElement(
                          Ml.jL,
                          rs({}, A, { position: "fixed" }),
                        );
                      }
                      if (i) {
                        return n.createElement(Ml.jL, {
                          title: "Mini Leaderboard",
                          message:
                            "Download the NYT Games app to\nadd friends and follow daily scores.",
                          icon: "mini_leaderboard_friends",
                          newTab: !0,
                          onClickLink: () => K(),
                          type: Ml.Zi.SINGLE,
                          position: "fixed",
                          dropShadow: !0,
                          isNew: !0,
                        });
                      }
                      const e = i
                        ? "The Mini"
                        : s
                        ? "The Midi"
                        : "The Crossword";
                      return n.createElement(Ml.jL, {
                        title: "Play ".concat(
                          e,
                          " and more in the NYT Games app.",
                        ),
                        icon: "crossword-app",
                        newTab: !0,
                        position: "fixed",
                        onClickLink: () => K(),
                        type: Ml.Zi.MULTI,
                      });
                    })(),
                  );
                },
                background: "var(--bg-moment)",
                animateOut: !0,
              },
              ad: {
                component: (e) => {
                  let { isActive: t, transition: r } = e;
                  const { user: o } = (0, ii.aF)(),
                    i = (0, a.I0)(),
                    l = (0, a.v9)(Be),
                    s = (0, a.v9)(Ue);
                  return t
                    ? n.createElement(gm.Z, {
                      id: "intsl",
                      position: "intsl",
                      isSpecialAdUnit: !0,
                      enableCountdown: !0,
                      onClose: () => {
                        (i(ki(o)), r("game"));
                      },
                      ctaCopy: vm({ isMini: Boolean(l), isMidi: Boolean(s) }),
                      className: zl()("xwd__ad-interstitial-container"),
                      skipButtonClassName: zl()(
                        "xwd__ad-interstitial-skip-button",
                      ),
                    })
                    : null;
                },
                background: "var(--bg-moment)",
              },
              game: {
                component: (e) => {
                  let { isActive: t, transition: r } = e;
                  const o = (0, n.useRef)(null),
                    i = (0, a.I0)(),
                    l = (0, a.v9)(Le),
                    s = (0, a.v9)(el),
                    c = (0, a.v9)(al),
                    d = (0, a.v9)(tl),
                    u = (0, a.v9)(Pn),
                    m = (0, a.v9)(as),
                    p = (0, a.v9)(rn),
                    f = (0, a.v9)(on),
                    g = (0, a.v9)(vi);
                  (((e) => {
                    const { winWidth: t } = xd();
                    (0, n.useEffect)(() => {
                      if (!e) return;
                      const r = document.getElementById("js-nav-burger"),
                        n = document.getElementById("js-global-nav"),
                        o = () =>
                          ((e, t, r, n) => {
                            (null == e
                                ? void 0
                                : e.classList.contains("active")) &&
                              (null == t ? void 0 : t.classList.contains(
                                "show-mobile-toolbar",
                              )) &&
                              si.tq &&
                              n <= 375
                              ? null == t ||
                                t.classList.remove("show-mobile-toolbar")
                              : null == t ||
                                t.classList.add("show-mobile-toolbar");
                          })(r, n, 0, t);
                      return (
                        null == r || r.addEventListener("click", o), () => {
                          null == r || r.removeEventListener("click", o);
                        }
                      );
                    }, [t, e]);
                  })(t),
                    (0, n.useEffect)(() => {
                      ((e) => {
                        let {
                          isReady: t,
                          modalIsOpen: r,
                          inRebusMode: n,
                          ref: o,
                          isGameMomentActive: a,
                        } = e;
                        const i = a && t && !(r || n);
                        if (
                          (o &&
                            (o.classList.add("xwd__franklin"),
                              o.classList.toggle("xwd__focused", i)),
                            i && o)
                        ) {
                          const e = document.activeElement;
                          if (e && e !== document.body && e !== o) return;
                          o.focus({ preventScroll: !0 });
                        }
                      })({
                        isReady: s,
                        modalIsOpen: m,
                        inRebusMode: p,
                        ref: o.current,
                        isGameMomentActive: t,
                      });
                    }, [s, u, m, p, t]),
                    (0, n.useEffect)(() => {
                      t &&
                        g &&
                        !(0, qs.fp)(Zs) &&
                        i(Ct(Pi.EditorWelcomeNote, void 0, 1e3));
                    }, [t, g]),
                    (0, n.useEffect)(() => {
                      t && c && (i({ type: O }), r("congrats"));
                    }, [c, t]));
                  const v = (e) =>
                      e instanceof Element && !!e.closest("button, a[href]"),
                    b = (0, n.useCallback)(
                      (e) => {
                        if (v(e.target)) return;
                        if ("Escape" === e.key && !e.shiftKey && !p) {
                          const t = document.querySelector(
                            ".xwd__toolbar--tools button",
                          );
                          return (
                            null == t || t.focus(),
                              e.preventDefault(),
                              void e.stopPropagation()
                          );
                        }
                        const { action: t, payload: r } = ((e) => {
                          let t,
                            r,
                            { key: n, shiftKey: o } = e;
                          switch (n) {
                            case "Escape":
                              t = o ? Cd : Ni;
                              break;
                            case "Insert":
                              t = Ni;
                              break;
                            case "Tab":
                            case "Enter":
                            case "NumpadEnter":
                              ((t = $), (r = o ? "PreviousClue" : "NextClue"));
                              break;
                            case " ":
                              t = Wi;
                              break;
                            case "End":
                              ((t = $), (r = "ClueEnd"));
                              break;
                            case "Home":
                              ((t = $), (r = "ClueStart"));
                              break;
                            case "ArrowLeft":
                            case "ArrowRight":
                            case "ArrowUp":
                            case "ArrowDown":
                              ((t = $), (r = o ? "Shift".concat(n) : n));
                              break;
                            case "Backspace":
                              t = Ks;
                              break;
                            case "Delete":
                              ((t = Xs), (r = "Cell"));
                              break;
                            default:
                              return {};
                          }
                          return { action: t, payload: r };
                        })(e);
                        t && (i(t(r)), e.preventDefault(), e.stopPropagation());
                      },
                      [i, p],
                    ),
                    y = (0, n.useCallback)((e) => {
                      if (v(e.target)) return;
                      const {
                        action: t,
                        payload: r,
                        shiftKey: n,
                      } = ((e) => {
                        const { key: t, which: r, shiftKey: n } = e;
                        return ((e) => {
                            let { altKey: t, ctrlKey: r, metaKey: n } = e;
                            return t || r || n;
                          })(e)
                          ? {}
                          : (e.preventDefault(),
                            { action: Mi, payload: jd(t, r), shiftKey: n });
                      })(e);
                      t && r && i(t(r, n));
                    }, []);
                  return n.createElement(
                    "main",
                    {
                      tabIndex: 0,
                      ref: o,
                      onKeyDown: (e) => {
                        m || b(e);
                      },
                      onKeyPress: (e) => {
                        m || y(e);
                      },
                      onClick: () => {
                        f && i(Ft(null));
                      },
                      className: "GameMoment-module_xwd__main__WCTtf",
                    },
                    n.createElement(Jd, null),
                    n.createElement(kd, {
                      clueLists: l,
                      doEscape: d,
                      puzzleEscaped: () => i({ type: h, payload: !1 }),
                      inRebusMode: p,
                      isMobile: si.tq,
                    }),
                  );
                },
                background: "var(--bg-moment)",
                animateOut: !0,
              },
              congrats: {
                component: (e) => {
                  let { transition: t, isActive: r } = e;
                  const { user: o } = (0, ii.aF)(),
                    i = (0, a.v9)(De),
                    s = (0, a.v9)(Be),
                    c = (0, a.v9)(Ue),
                    d = (0, a.v9)(de),
                    { showTimer: u, soundOn: m } = d,
                    p = (0, a.v9)(Ln),
                    f = (0, a.v9)(Fr),
                    g = (0, a.v9)(ln),
                    v = (0, a.v9)(nu) - 1,
                    b = (0, a.v9)(tu),
                    h = c ? (g ? v : 0) : b,
                    y = (0, a.v9)(eu),
                    w = (0, a.v9)(ll),
                    { isWeb: _ } = (0, Za.vB)(),
                    E = (0, a.v9)(Fe),
                    [O, S] = (0, n.useState)(!1);
                  if (
                    ((0, n.useEffect)(() => {
                      if (!i) return;
                      const e =
                        "true" === localStorage.getItem("app-link-clicked");
                      S(e);
                      const t = document.getElementById("strut");
                      r && m && t instanceof HTMLAudioElement && t.play();
                      const n = i.publishStream,
                        a = "mini" === n,
                        l = "midi" === n,
                        s = a ? "mini-page" : l ? "midi-page" : "game-page";
                      (0, Zt.$)(
                        "click",
                        i.id,
                        s,
                        "100%-complete",
                        "".concat(f),
                      );
                      const c = si.tq && (null == o ? void 0 : o.hasXwd),
                        d = !!window.newsreaderAppPlatform,
                        u = c && !e && !d;
                      (r &&
                        a &&
                        (0, Zt.h)(
                          "congrats-modal",
                          "mini-page",
                          u ? "download-app" : void 0,
                        ),
                        r &&
                        l &&
                        (0, Zt.h)(
                          "congrats-modal",
                          "midi-page",
                          u ? "download-app" : void 0,
                        ));
                    }, [r]),
                      !i)
                  ) {
                    return null;
                  }
                  const {
                      publicationDate: k,
                      publishStream: P,
                      title: x,
                      id: C,
                    } = i,
                    { hasXwd: j, isLoggedIn: T } = o,
                    D = ((e, t) =>
                      ["daily", "mini", "bonus", "midi"].includes(t)
                        ? "daily" === t ? Oe(e, "dddd") : yl(t)
                        : "")(k, P),
                    N = ((e) => {
                      return e < 60
                        ? "".concat(t = e, 1 === t ? " second" : " seconds")
                        : we(e);
                      var t;
                    })(f),
                    L = "daily" === P,
                    z = (L || (c && g)) && p === bn.Gold,
                    I = Ci.includes(C),
                    A = !!window.newsreaderAppPlatform,
                    M = l.Fi.getVariant("GAMES_BackToPlayTab_1222"),
                    R = si.tq && j,
                    B = ((!c && !s) || !_) && R && !O && !A,
                    U = si.tq && !A ? "congrats-download-app" : "",
                    G = T && !j,
                    W = (() => {
                      if (c) {
                        return 0;
                      }
                      const e = (null == y ? void 0 : y.verticalStreaks) || [];
                      return (e.length && E && e[E].length) || 0;
                    })(),
                    Y = () =>
                      t("game"),
                    H = I
                      ? n.createElement(fm, {
                        displayAppLink: B,
                        appCta: U,
                        close: Y,
                        showTimer: u,
                        puzzleId: C,
                        puzzleTitle: x || "",
                        formattedSolveTime: N,
                        isClosing: !1,
                        onRemove: () => {},
                      })
                      : n.createElement(pm, {
                        displayAppLink: B,
                        appCta: U,
                        close: Y,
                        dayIdx: E,
                        isMidi: c,
                        isMini: s,
                        isDaily: L,
                        streamLabel: D,
                        showTimer: u,
                        formattedSolveTime: N,
                        solveTime: f,
                        publicationDate: k,
                        registeredNonSub: G,
                        hasXwd: j,
                        isMobile: si.tq,
                        isNewsreader: A,
                        isGoldStarEligible: z,
                        streakLength: h,
                        verticalStreakLength: W,
                        navigateBack: () => (0, ou.n)(M),
                        isClosing: !1,
                        onRemove: () => {},
                        midiTitle: w,
                      });
                  return n.createElement(
                    dl.im,
                    {
                      bgColor: "$white",
                      className: zl()(
                        "xwd__congrats-moment",
                        "CongratsMoment-module_wrapper__GMYHg",
                      ),
                    },
                    H,
                  );
                },
                background: "var(--bg-moment)",
                animateIn: !0,
                animateOut: !0,
              },
            };
          var hm = r(77294);
          function ym() {
            const e = (0, a.v9)(Ae),
              t = (0, a.I0)();
            return n.createElement(
              "button",
              {
                type: "button",
                className: "xwd__printtools--button",
                onClick: () => {
                  (t(Ct(Pi.Print)),
                    (0, Zt.$)("daily-page", e, "game-page", "print-puzzle"));
                },
              },
              n.createElement(Td.Z, { icon: "print-black" }),
              n.createElement(
                "span",
                { className: "xwd__printtools--text" },
                "Print",
              ),
            );
          }
          const wm = ["notes", "publishStream"];
          function _m() {
            const e = (0, a.v9)(De),
              t = n.useRef(document.getElementById("portal-game-header")),
              r = (0, a.v9)(Be),
              o = (0, a.v9)(Ue),
              i = (0, a.v9)(We),
              { activeMoment: l } = (0, hm.o)(),
              s = !!window.newsreaderAppPlatform,
              c = window.location.pathname.includes("/paid") &&
                [
                  "2026-05-04",
                  "2026-05-05",
                  "2026-05-06",
                  "2026-05-07",
                ].includes(null != i ? i : ""),
              d = !(r || o || s || c),
              u = d && "game" === l;
            if (!t.current || !e) return null;
            const { notes: m, publishStream: p } = e,
              f = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                      n,
                      o = {},
                      a = Object.keys(e);
                    for (n = 0; n < a.length; n++) {
                      ((r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]));
                    }
                    return o;
                  })(e, t);
                if (Object.getOwnPropertySymbols) {
                  var a = Object.getOwnPropertySymbols(e);
                  for (n = 0; n < a.length; n++) {
                    ((r = a[n]),
                      t.indexOf(r) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, r) &&
                        (o[r] = e[r])));
                  }
                }
                return o;
              })(e, wm);
            return (0, Zc.createPortal)(
              n.createElement(
                "header",
                { className: "xwd__header--wrapper" },
                n.createElement(
                  "div",
                  {
                    className: zl()("xwd__header--row", {
                      "xwd__header--fullwidth": r || o,
                    }),
                  },
                  n.createElement(
                    "div",
                    { className: "xwd__header--puzzle-details-container" },
                    n.createElement(Nl, f),
                    m && n.createElement(cs, { notes: m }),
                  ),
                  d &&
                    n.createElement(
                      "div",
                      {
                        className: "xwd__header--tools-container",
                        style: { visibility: u ? "visible" : "hidden" },
                        "aria-hidden": !u,
                      },
                      n.createElement(ym, null),
                    ),
                ),
              ),
              t.current,
            );
          }
          const Em = (e) => {
            let { winHeight: t, winWidth: r } = e;
            const n = r / t;
            return (t <= 650 && n > 1.8) || (t < 400 && n > 1);
          };
          var Om = (e) => {
              let { inRebusMode: t = !1 } = e;
              const r = ((e) => {
                  const { winHeight: t, winWidth: r } = xd();
                  return e({ winHeight: t, winWidth: r });
                })(Em),
                o = (0, a.I0)();
              return (
                (0, n.useEffect)(() => {
                  o(r ? Mt() : At());
                }, [r]),
                  !r || t ? null : n.createElement(
                    "div",
                    { className: "xwd__landscape-warning" },
                    n.createElement(Td.Z, { icon: "rotate" }),
                    n.createElement(
                      "p",
                      null,
                      "Oh no! We can’t fit everything on your screen.",
                      n.createElement("br", null),
                      n.createElement(
                        "span",
                        null,
                        "Please rotate your device.",
                      ),
                    ),
                  )
              );
            },
            Sm = r(45697),
            km = r.n(Sm);
          const Pm = ["nytimes://login", "nytimes://createAccount"];
          var xm = r(54988),
            Cm = r(19164);
          const jm = (e) => {
            let t,
              {
                error: r,
                navigationLinks: o,
                subscriptionCampaign: a,
                iconError: i,
                iconSubscribe: l,
                liraAsset: s,
                userType: c,
                documentTitle: d,
              } = e;
            const { newsreaderAppPlatform: u } = (0, Za.vB)(),
              { isGamesSaleActive: m } = (0, Cm.Z)(),
              p = ((f = o.login),
                (g = "&asset=".concat(s)),
                Pm.some((e) => f.startsWith(e))
                  ? f
                  : "".concat(f).concat(g));
            var f, g;
            switch ((d && (document.title = d), r.status)) {
              case 401:
              case 403:
                t = n.createElement(
                  "div",
                  { className: "pz-error__message" },
                  l &&
                    n.createElement("i", {
                      className: zl()("pz-error__icon", l),
                    }),
                  n.createElement("h1", null, "Subscribe to play."),
                  n.createElement(
                    "p",
                    null,
                    "Get full access to The Crossword, created daily by Times experts, with a New York Times Games subscription.",
                  ),
                  n.createElement(
                    "a",
                    {
                      className: "pz-error__button default",
                      href: o.subscribe[a],
                    },
                    "Subscribe",
                  ),
                  m &&
                    n.createElement(
                      "a",
                      {
                        className: "pz-error__button default sale",
                        href: o.subscribe[a],
                      },
                      xm.sN.getAcquisitionMessage(u),
                    ),
                  n.createElement("br", null),
                  null != c && c.isLoggedIn ? null : n.createElement(
                    "p",
                    null,
                    n.createElement(
                      "a",
                      { className: "pz-error__link", href: p },
                      "Log in",
                    ),
                  ),
                );
                break;
              case 404:
                t = n.createElement(
                  "div",
                  { className: "pz-error__message" },
                  i &&
                    n.createElement("i", {
                      className: zl()("pz-error__icon", i),
                    }),
                  n.createElement("h1", null, "This page no longer exists."),
                  n.createElement(
                    "a",
                    { className: "pz-error__button", href: "/crosswords" },
                    "Explore Our Games",
                  ),
                );
                break;
              default:
                t = n.createElement(
                  "div",
                  { className: "pz-error__message" },
                  i &&
                    n.createElement("i", {
                      className: zl()("pz-error__icon", i),
                    }),
                  n.createElement(
                    "h1",
                    null,
                    "Our site is ",
                    n.createElement("br", null),
                    "playing games with us.",
                    " ",
                  ),
                  n.createElement(
                    "p",
                    null,
                    "We’re working to solve an issue with our server. Try refreshing the page or check back soon. In the meantime, explore the Mini Crossword and more.",
                  ),
                  n.createElement(
                    "a",
                    { className: "pz-error__button", href: "/crosswords" },
                    "Play Games",
                  ),
                );
            }
            return n.createElement(
              "div",
              { className: "pz-error" },
              t,
              404 === r.status
                ? n.createElement("div", {
                  className: "pz-error-img-1",
                  alt: "",
                })
                : n.createElement("div", {
                  className: "pz-error-img",
                  alt: "",
                }),
            );
          };
          ((jm.propTypes = {
            error: km().shape({ status: km().number, stack: km().string })
              .isRequired,
            navigationLinks: km().shape({
              login: km().string,
              subscribe: km().shape({}),
            }),
            liraAsset: km().string,
            subscriptionCampaign: km().string,
            iconError: km().string,
            iconSubscribe: km().string,
            userType: km().shape({
              isLoggedIn: km().bool,
              entitlement: km().string,
            }),
            documentTitle: km().string,
          }),
            (jm.defaultProps = {
              liraAsset: "puzzle-paywall",
              subscriptionCampaign: "default",
            }));
          var Tm = jm;
          const Dm = (e, t) => {
              e && e.classList.add(t);
            },
            Nm = (e, t) => {
              e && e.classList.remove(t);
            },
            Lm = (e) => document.getElementsByClassName(e)[0];
          function zm(e) {
            var t;
            let { error: r, userType: o } = e;
            return (
              (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "xwd__hide-when-no-data";
                (0, n.useEffect)(() => {
                  const t = Lm("pz-game-title-bar"),
                    r = Lm("pz-game-toolbar");
                  return (
                    Dm(t, e), Dm(r, e), () => {
                      (Nm(t, e), Nm(r, e));
                    }
                  );
                }, []);
              })(),
                n.createElement(Tm, {
                  error: r,
                  navigationLinks: window.navigationLinks,
                  userType: o,
                  subscriptionCampaign: "midi" ===
                      (null === (t = window.gameData) || void 0 === t
                        ? void 0
                        : t.stream)
                    ? "midi"
                    : void 0,
                })
            );
          }
          var Im = () => {
            var e, t;
            const r = (0, a.I0)(),
              { user: o, hasLoaded: i } = (0, ii.aF)(),
              { isStatsigReady: l } = (0, ai.of)(),
              {
                reportExposure: s,
                getVariant: c,
                hasAbraLoaded: d,
              } = (0, ci.Z)(),
              { isWeb: u, isHybridWebView: m } = (0, Za.vB)(),
              p = (0, a.v9)(je),
              f = (0, a.v9)(Jt),
              g = (0, a.v9)(pe),
              v = (0, a.v9)(fe),
              b = (0, a.v9)(Ge),
              h = (0, a.v9)(Be),
              y = (0, a.v9)(Ye),
              _ = (0, a.v9)(Ae),
              E = (0, a.v9)(rn),
              { phase: O, writeEnabled: S } = sl(),
              k = (() => {
                const e = (0, a.v9)(Rr),
                  t = (0, a.v9)((e) => e.moogle.hasLoaded),
                  r = (0, a.v9)(il);
                if ((0, a.v9)(Te)) return !0;
                switch (e) {
                  case Br.PENDING:
                    return !1;
                  case Br.LEGACY_ONLY:
                    return r;
                  case Br.LEGACY_WITH_STATE:
                    return t && r;
                  case Br.READ_STATE_DUAL_WRITE:
                  case Br.STATE_ONLY:
                    return t;
                }
              })();
            (() => {
              const { isStatsigReady: e } = (0, ai.of)(),
                { client: t } = (0, ai.g_)(),
                r = va(Rr),
                o = va(il),
                { user: a } = (0, ii.aF)(),
                i = va((e) => e.moogle.hasLoaded),
                l = va((e) => e.tempLogging.progressData),
                s = va((e) => e.tempLogging.stateData),
                c = va(We);
              (0, n.useEffect)(() => {
                var n, d, u, m, p, f;
                if (!e || !t.checkGate("games_xwd_state_web_logging")) return;
                if (
                  r !== Br.LEGACY_WITH_STATE ||
                  (c && c < "2026-04-23") ||
                  !i ||
                  !o
                ) {
                  return;
                }
                const g = (null == l || null === (n = l.timer) || void 0 === n
                    ? void 0
                    : n.totalElapsedTime) || 0,
                  v = (null == s || null === (d = s.timer) || void 0 === d
                    ? void 0
                    : d.totalElapsedTime) || 0,
                  b = Math.abs(g - v);
                b > 2 &&
                  (0, Zr.D)("xwd_load_mismatch_timer", {
                    progressTime: g,
                    stateTime: v,
                    timerDiff: b,
                    regiId: a.regiId,
                  });
                const h = (null == l || null === (u = l.cells) || void 0 === u
                    ? void 0
                    : u.filter((e) => e.guess).length) || 0,
                  y = (null == s || null === (m = s.cells) || void 0 === m
                    ? void 0
                    : m.filter((e) =>
                      e.guess
                    ).length) || 0,
                  w = Math.abs(h - y);
                w > 3 &&
                  (0, Zr.D)("xwd_load_mismatch_cells_filled", {
                    progressCellsFilled: h,
                    stateCellsFilled: y,
                    cellsFilledDiff: w,
                    regiId: a.regiId,
                  });
                const _ = !(
                    null == l ||
                    null === (p = l.status) ||
                    void 0 === p ||
                    null === (p = p.firsts) ||
                    void 0 === p ||
                    !p.timerReset
                  ),
                  E = !(
                    null == s ||
                    null === (f = s.status) ||
                    void 0 === f ||
                    null === (f = f.firsts) ||
                    void 0 === f ||
                    !f.timerReset
                  );
                _ !== E &&
                  (0, Zr.D)("xwd_load_mismatch_timer_reset", {
                    progressIsReset: _,
                    stateIsReset: E,
                    regiId: a.regiId,
                  });
              }, [r, i, o, l, s, c]);
            })();
            const P = (0, a.v9)(Te),
              [x, C] = (0, n.useState)(null),
              { isMidiEnabled: j, isReady: T } = (0, di.P)(),
              D = "mini" ===
                (null === (e = window.gameData) || void 0 === e
                  ? void 0
                  : e.stream),
              N = "midi" ===
                (null === (t = window.gameData) || void 0 === t
                  ? void 0
                  : t.stream),
              L = D ? ti.v : ri.v,
              z = N ? oi.config : ni.config,
              { unit: I } = (0, ei.useUnit)(L),
              { unit: A } = (0, ei.useUnit)(z);
            ((0, ii.lP)(I.refetch),
              (0, ii.lP)(A.refetch),
              ((e) => {
                const t = (0, a.I0)();
                (0, n.useEffect)(() => {
                  if (!e) return;
                  const { hash: r } = window.location;
                  if (!r) {
                    return;
                  }
                  const [, n] = r.substring(1).split("=");
                  if (n === ui) {
                    t({ type: w, payload: { webSourceParam: n } });
                    const e = window.location.origin + window.location.pathname;
                    window.history.replaceState(window.history.state, "", e);
                  }
                }, [e, t]);
              })(u));
            const M = (() => {
              const { isStatsigReady: e } = (0, ai.of)(),
                { client: t } = (0, ai.g_)(),
                r = (0, a.v9)(Ue),
                o = (0, a.v9)(fi);
              return (0, n.useMemo)(
                () =>
                  !!(e && r && o) &&
                  "onboarding" ===
                    t
                      .getExperiment("games_midi_firstsolve_0326")
                      .get("variant_type"),
                [e, t, o, r],
              );
            })();
            (Ji("GP", (0, a.v9)(vi)),
              (0, n.useEffect)(() => {
                M && r(da(!0));
              }, [M]));
            const R = !N || j,
              B = c("GAMES_omaWelcomeCTA_1125");
            ((0, n.useEffect)(() => {
              d && B && s("GAMES_omaWelcomeCTA_1125");
            }, [d, B]),
              (0, n.useEffect)(() => {
                var e;
                o.regiId &&
                  ((e = o.regiId),
                    Bn()
                      .removeItem(((e) => "".concat(e, "#pendingCommits"))(e))
                      .catch((e) => {
                        console.error("error clearing pending commits", e);
                      }));
              }, [o.regiId]),
              (0, n.useEffect)(() => {
                s(
                  D
                    ? "OMA_ENDSCREENACTIONS_MINI"
                    : "OMA_ENDSCREENACTIONS_DAILY",
                );
              }),
              (0, n.useEffect)(() => {
                i &&
                  f &&
                  p &&
                  (r({ type: fr, payload: o }),
                    v || r({ type: vr, payload: !0 }),
                    S && r(En()));
              }, [O, i, p, f, p]),
              (0, n.useEffect)(() => {
                (!1 !== g || N || C({ status: 403 }), P && C(P));
              }, [g, P, N]),
              (0, n.useEffect)(() => {
                var e, t;
                i &&
                  p &&
                  (r(
                    ((e = si.tq), (t = o), (r) => {
                      const n = e ? ar : ir,
                        o = t.regiId || "anon";
                      return Hn("".concat(o))
                        .then((e) => {
                          const t = Hi(Hi({}, n), e ? e.settings : {});
                          r({ type: cr, payload: t });
                        })
                        .catch((e) => {
                          (Cr.error(e), r({ type: cr, payload: n }));
                        });
                    }),
                  ),
                    r(
                      ((e) => (t) => {
                        Hn("".concat(e.regiId))
                          .then((e) => {
                            t({ type: ur, payload: (e && e.printPrefs) || lr });
                          })
                          .catch((e) => {
                            (Cr.error(e), t({ type: ur, payload: lr }));
                          });
                      })(o),
                    ),
                    (O === Br.LEGACY_ONLY || O === Br.LEGACY_WITH_STATE) &&
                    r(Gi(o)));
              }, [i, p, _, O]),
              (0, n.useEffect)(() => {
                p && (document.title = y);
              }, [p, y]));
            const U = u && mi(_, b, h),
              G = !(!v || !k) && (!N || T) && (!U || l),
              W = (N && T && !R) || x;
            return n.createElement(
              n.Fragment,
              null,
              si.tq && n.createElement(Om, { inRebusMode: E }),
              W
                ? n.createElement(zm, {
                  error: null != x ? x : { status: 404 },
                  userType: o,
                })
                : n.createElement(
                  li.Z,
                  {
                    config: bm,
                    containerClassName: "xwd-moment-container",
                    initialMoment: "loading",
                    hasLoaded: G,
                    onBackgroundChange: (e) => {
                      m &&
                        document.body.style.setProperty(
                          "background-color",
                          e || "var(--bg-page, white)",
                        );
                    },
                  },
                  !si.tq && G && n.createElement(_m, null),
                ),
            );
          };
          try {
            (() => {
              const e = /(localforage\/)?([0-9]|anon)+@[0-9]+$/;
              Bn()
                .keys()
                .then((t) => {
                  t.forEach((t) => {
                    t.match(e) && Wn(t);
                  });
                });
            })();
          } catch (e) {
          }
          const Am = document.getElementById("pz-game-root");
          (() => {
            if ("ios" === window.newsreaderAppPlatform) {
              var e, t;
              const r = null ===
                      (e = document.querySelector('meta[name="viewport"]')) ||
                    void 0 === e
                  ? void 0
                  : e.getAttribute("content"),
                n = "".concat(
                  r,
                  ", viewport-fit=cover, maximum-scale=1, user-scalable=no",
                );
              null === (t = document.querySelector('meta[name="viewport"]')) ||
                void 0 === t ||
                t.setAttribute("content", n);
            }
          })();
          const Mm = (function (e) {
              let { filename: t, stream: r } = e;
              const n = [Qa, go, po, Ot, Mn, Xt, wr, On],
                o = (0, m.configureStore)({
                  reducer: ga,
                  middleware: (e) =>
                    e().concat(n),
                });
              return (
                o.dispatch(qa(t, r)),
                  o.dispatch((e, t) => {
                    var r;
                    const n = Jt(t()),
                      o = !!window.newsreaderAppPlatform,
                      a = "daily" ===
                        (null === (r = window.gameData) || void 0 === r
                          ? void 0
                          : r.stream);
                    if (n || o || !a) return e(Xo(0));
                    Ja()
                      .then((t) => {
                        t.isOffline
                          ? e(Xo(0))
                          : e({ type: $o, payload: { meterResponse: t } });
                      })
                      .catch((t) => {
                        (console.error(t), e(Xo(t.status)));
                      });
                  }),
                  o
              );
            })((0, l.kw)()),
            Rm = (0, s.ND)();
          function Bm() {
            var e, t, r, o;
            const a = "mini" ===
                (null === (e = window.gameData) || void 0 === e
                  ? void 0
                  : e.stream),
              s = "midi" ===
                (null === (t = window.gameData) || void 0 === t
                  ? void 0
                  : t.stream),
              c = a
                ? "gamesMiniCrossword"
                : s
                ? "gamesMidiCrossword"
                : "gamesDailyCrossword";
            return n.createElement(
              i.GamesMessagingContextProvider,
              {
                client: c,
                env: l.env.name,
                pageViewID: null === (r = window.nyt_et) ||
                    void 0 === r ||
                    null === (o = r.get_pageview_id) ||
                    void 0 === o
                  ? void 0
                  : o.call(r),
                performanceMeasureCallback: () => {},
                appType: l.env.samizdat.appType,
                appVersion: l.env.samizdat.appVersion,
                samizdatToken: l.env.samizdat.token,
                abra: window.abra,
                sentry: { captureException: () => {}, withScope: () => {} },
                gamesSourceApp: Rm,
              },
              n.createElement(Im, null),
              n.createElement(d.Z, null),
            );
          }
          const Um = () =>
            n.createElement(
              n.Fragment,
              null,
              n.createElement(c.Z, null),
              n.createElement(
                u.E,
                null,
                n.createElement(
                  kl,
                  null,
                  n.createElement(
                    a.zt,
                    { store: Mm },
                    n.createElement(Bm, null),
                  ),
                ),
              ),
            );
          (0, o.s)(Am).render(n.createElement(Um, null));
        },
        73435: function (e, t, r) {
          "use strict";
          r.d(t, {
            $: function () {
              return i;
            },
            h: function () {
              return l;
            },
          });
          var n = r(65489);
          function o(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function a(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? o(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : o(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const i = (e, t, r, o, i, l, s) => {
              const c = {
                module: a(
                  {
                    name: e,
                    context: t,
                    element: {
                      name: r || "",
                      label: "string" == typeof o ? o : JSON.stringify(o),
                      url: s || void 0,
                    },
                  },
                  i && { label: i },
                ),
                eventData: {
                  pageType: "game",
                  type: l ? "ob_click" : "click",
                  trigger: "module",
                  status: "",
                },
              };
              (0, n.j)("moduleInteraction", c);
            },
            l = (e, t, r, o) => {
              (0, n.j)("impression", {
                module: {
                  name: e,
                  context: o,
                  region: t || "",
                  label: r || void 0,
                },
              });
            };
        },
        31270: function (e, t, r) {
          "use strict";
          (r.d(t, {
            D: function () {
              return n;
            },
          }),
            r(80569));
          const n = {
            cx1: {
              badge_type: "milestone",
              games: ["connections"],
              levels: [3, 5, 10, 15, 25, 50, 75, 100, 150, 200, 250, 350, 500],
            },
            cx2: {
              badge_type: "milestone",
              games: ["connections"],
              levels: [3, 5, 10, 15, 25, 50, 75, 100, 150, 200, 250, 350, 500],
            },
            cx3: {
              badge_type: "streak",
              games: ["connections"],
              levels: [7, 14, 30, 60, 100, 150, 250, 365],
              checkpoints: [
                2,
                3,
                5,
                8,
                10,
                12,
                18,
                21,
                25,
                35,
                45,
                50,
                70,
                80,
                90,
                110,
                125,
                140,
                175,
                200,
                225,
                275,
                300,
                330,
                350,
              ],
            },
            cx4: {
              badge_type: "milestone",
              games: ["connections"],
              levels: [1],
            },
            cx5: {
              badge_type: "milestone",
              games: ["connections"],
              levels: [1],
            },
            cx6: { badge_type: "challenge", games: ["connections"] },
            cx7: { badge_type: "progress", games: ["connections"] },
            cx8: { badge_type: "challenge", games: ["connections"] },
            cx9: {
              badge_type: "milestone",
              games: ["connections"],
              levels: [1e3],
            },
            sb1: {
              badge_type: "milestone",
              games: ["spelling_bee"],
              levels: [1],
            },
            sb2: {
              badge_type: "milestone",
              games: ["spelling_bee"],
              levels: [1],
            },
            sb3: {
              badge_type: "milestone",
              games: ["spelling_bee"],
              levels: [1],
            },
            sb4: {
              badge_type: "milestone",
              games: ["spelling_bee"],
              levels: [
                5,
                10,
                15,
                25,
                50,
                75,
                100,
                150,
                200,
                300,
                500,
                750,
                1e3,
              ],
            },
            sb5: {
              badge_type: "milestone",
              games: ["spelling_bee"],
              levels: [
                5,
                10,
                15,
                25,
                50,
                75,
                100,
                150,
                200,
                300,
                500,
                750,
                1e3,
              ],
            },
            sb6: {
              badge_type: "milestone",
              games: ["spelling_bee"],
              levels: [3, 5, 10, 15, 25, 40, 60, 90, 150, 300, 500, 750, 1e3],
            },
            sb7: {
              badge_type: "milestone",
              games: ["spelling_bee"],
              levels: [1, 5, 10, 15, 20, 25, 35, 50, 75, 100, 125, 150, 200],
            },
            sb8: {
              badge_type: "milestone",
              games: ["spelling_bee"],
              levels: [
                1,
                10,
                25,
                50,
                100,
                150,
                200,
                300,
                400,
                500,
                650,
                800,
                1e3,
              ],
            },
            sb9: {
              badge_type: "holiday",
              games: ["spelling_bee"],
              levels: [2026],
            },
            sb10: {
              badge_type: "holiday",
              games: ["spelling_bee"],
              levels: [2025, 2026],
            },
            sb11: {
              badge_type: "holiday",
              games: ["spelling_bee"],
              levels: [2026],
            },
            wr1: { badge_type: "challenge", games: ["wordleV2"] },
            wr2: { badge_type: "progress", games: ["wordleV2"] },
            wr3: { badge_type: "progress", games: ["wordleV2"] },
            wr4: {
              badge_type: "milestone",
              games: ["wordleV2"],
              levels: [1e3],
            },
            wr5: {
              badge_type: "milestone",
              games: ["wordleV2"],
              levels: [1500],
            },
            wr6: {
              badge_type: "streak",
              games: ["wordleV2"],
              levels: [7, 14, 30, 60, 100, 150, 250, 365, 500, 750, 1e3],
              checkpoints: [
                2,
                3,
                5,
                8,
                10,
                12,
                18,
                21,
                25,
                35,
                45,
                50,
                70,
                80,
                90,
                110,
                125,
                140,
                175,
                200,
                225,
                275,
                300,
                330,
                350,
                400,
                425,
                450,
                475,
                550,
                600,
                650,
                700,
                800,
                850,
                900,
                950,
                975,
              ],
            },
            wr7: { badge_type: "progress", games: ["wordleV2"] },
            wr8: {
              badge_type: "milestone",
              games: ["wordleV2"],
              levels: [5],
              checkpoints: [1, 2, 3, 4],
            },
            wr9: { badge_type: "challenge", games: ["wordleV2"] },
            wr10: { badge_type: "progress", games: ["wordleV2"] },
            st1: {
              badge_type: "milestone",
              games: ["strands"],
              levels: [1, 5, 10, 15, 25, 50, 75, 100, 150, 200, 250, 350, 500],
            },
            st2: {
              badge_type: "streak",
              games: ["strands"],
              levels: [7, 14, 30, 60, 100, 150, 250, 365, 500, 750, 1e3],
              checkpoints: [
                2,
                3,
                5,
                8,
                10,
                12,
                18,
                21,
                25,
                35,
                45,
                50,
                70,
                80,
                90,
                110,
                125,
                140,
                175,
                200,
                225,
                275,
                300,
                330,
                350,
              ],
            },
            st3: {
              badge_type: "milestone",
              games: ["strands"],
              levels: [1, 5, 10, 15, 20, 25, 35, 50, 75, 100, 125, 150, 200],
            },
            st4: {
              badge_type: "milestone",
              games: ["strands"],
              levels: [
                25,
                50,
                75,
                100,
                250,
                500,
                750,
                1e3,
                1250,
                1500,
                2e3,
                2500,
                5e3,
              ],
            },
          };
        },
        64576: function (e, t, r) {
          "use strict";
          r.d(t, {
            Xp: function () {
              return m;
            },
            qs: function () {
              return d;
            },
            ux: function () {
              return u;
            },
            zb: function () {
              return p;
            },
          });
          var n = r(65489),
            o = r(83910),
            a = r(31270),
            i = r(89200);
          function l(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function s(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? l(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : l(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const c = { mockMode: "off", badges: {}, shelf: {}, checkpoints: {} },
            d = () => {
              if ("prod" === n.env.name) return null;
              const e = (0, o.fp)("badges-alpha-mock", c);
              return "off" !== e.mockMode ? e : null;
            },
            u = function (e, t) {
              let r = arguments.length > 2 && void 0 !== arguments[2] &&
                arguments[2];
              return "off" === e.mockMode ? [] : Object.keys(e.badges)
                .filter((n) => {
                  const o = a.D[n];
                  if (!o) return !1;
                  const { earned_at: i, notify: l } = e.badges[n];
                  return (
                    o.games.includes(t) &&
                    i &&
                    (l || r) &&
                    (i[i.length - 1] > 0 || r)
                  );
                })
                .map((t) => {
                  const { badge_type: r, games: n, levels: o } = a.D[t],
                    {
                      earned_at: l = [],
                      progress: s = 0,
                      earnedYears: c,
                    } = e.badges[t],
                    d = l.length;
                  return {
                    id: t,
                    badge_type: r,
                    games: n,
                    levels: o,
                    earned_at: l,
                    progress: s,
                    earned_level: "holiday" === r
                      ? (null == c ? void 0 : c[c.length - 1]) || 0
                      : o && o[d - 1],
                    earned_years: c,
                    puzzle_id: i._,
                    earned: !0,
                  };
                });
            },
            m = (e, t) =>
              "off" === e.mockMode ? [] : Object.keys(e.checkpoints)
                .filter((e) => {
                  const r = a.D[e];
                  return !!r && r.games.includes(t);
                })
                .map((t) => {
                  const {
                      levels: r,
                      badge_type: n,
                      games: o,
                    } = a.D[t] || {},
                    { progress: l } = e.checkpoints[t],
                    s = r || [],
                    c = l || 0;
                  let d = -1,
                    u = 0;
                  for (let e = 0; e < s.length; e++) {
                    const t = s[e];
                    if (t > c) break;
                    ((u = t), d++);
                  }
                  return {
                    id: t,
                    earned_level: u || 0,
                    badge_type: n,
                    games: o,
                    levels: r,
                    earned: u > 0,
                    earned_at: d >= 1 ? new Array(d).fill(-1) : [],
                    progress: c,
                    puzzle_id: i._,
                  };
                }),
            p = (e, t) => {
              const r = u(e, t, !0)
                  .filter((t) => !!e.shelf[t.id])
                  .map((e) => s(s({}, e), {}, { earned: !0 })),
                n = ((e, t) =>
                  "off" === e.mockMode ? [] : Object.keys(e.shelf)
                    .filter((e) => {
                      const r = a.D[e];
                      return !!r && r.games.includes(t);
                    })
                    .map((t) => {
                      const { badge_type: r, games: n, levels: o } = a.D[t],
                        { progress: l = 0 } = e.shelf[t],
                        s = o ? o[o.findIndex((e) => e === l) - 1] : l;
                      return {
                        id: t,
                        badge_type: r,
                        games: n,
                        levels: o,
                        progress: l,
                        earned_at: [0],
                        puzzle_id: i._,
                        earned_level: s,
                        notify: !1,
                      };
                    }))(e, t).filter((e) => !r.some((t) => t.id === e.id));
              return [...r, ...n].map((t) => {
                var r;
                return s(
                  s({}, t),
                  {},
                  {
                    earned_at: t.earned_at || [],
                    earned_years: (null === (r = e.badges[t.id]) || void 0 === r
                      ? void 0
                      : r.earnedYears) || [],
                    last_earned_level: t.earned_level,
                  },
                );
              });
            };
        },
        47011: function (e, t, r) {
          "use strict";
          r.d(t, {
            G: function () {
              return o;
            },
          });
          let n = null;
          function o() {
            const e = n;
            return ((n = null), e);
          }
        },
        40245: function (e, t, r) {
          "use strict";
          var n = r(67294),
            o = r(94184),
            a = r.n(o),
            i = r(32825),
            l = r(1856);
          t.Z = (e) => {
            let {
              text: t = "New",
              position: r = "default",
              className: o = "",
            } = e;
            return n.createElement(
              "span",
              {
                className: a()(l.Z.pill, l.Z[r], o),
                "data-testid": "pill-blue",
              },
              n.createElement(i.Z, { icon: "sparkle", "aria-hidden": "true" }),
              t,
            );
          };
        },
        13969: function (e, t, r) {
          "use strict";
          r.d(t, {
            Z: function () {
              return l;
            },
          });
          var n = r(67294),
            o = r(94184),
            a = r.n(o),
            i = {
              flexContainer: "PillGrey-module_flexContainer__ODUKN",
              expandToRow:
                "PillGrey-module_expandToRow__aTomr PillGrey-module_flexContainer__ODUKN",
              mobileColumn: "PillGrey-module_mobileColumn__YpIYL",
              "visually-hidden": "PillGrey-module_visually-hidden__Hz7ml",
              "skip-link": "PillGrey-module_skip-link__FFbSP",
              pill: "PillGrey-module_pill__fJN18",
              default: "PillGrey-module_default__YL9K9",
              "top-right-edge": "PillGrey-module_top-right-edge__LLm7D",
              "top-right-edge-outer":
                "PillGrey-module_top-right-edge-outer__kIzlB",
              "top-right-edge-inner":
                "PillGrey-module_top-right-edge-inner__xGxjg",
              "tab-inline": "PillGrey-module_tab-inline__vttJK",
              slideDown: "PillGrey-module_slideDown__wH1hZ",
              flyIn: "PillGrey-module_flyIn__MdsDx",
              flyOut: "PillGrey-module_flyOut__LQtPF",
              fadeIn: "PillGrey-module_fadeIn___mLnx",
            },
            l = (e) => {
              let {
                text: t = "New",
                position: r = "default",
                className: o = "",
              } = e;
              return n.createElement(
                "span",
                { className: a()(i.pill, i[r], o) },
                t,
              );
            };
        },
        80802: function (e, t, r) {
          "use strict";
          r.d(t, {
            Z: function () {
              return i;
            },
          });
          var n = r(67294),
            o = r(25889),
            a = r(7665);
          function i(e) {
            let {
              src: t,
              aria: r,
              fit: i = a.Fit.Contain,
              stateMachines: l,
            } = e;
            const { RiveComponent: s } = (0, o.useRive)({
              src: t,
              autoplay: !0,
              stateMachines: l,
              layout: new a.Layout({ fit: i }),
            });
            return n.createElement(s, { role: "img", "aria-label": r });
          }
        },
        1342: function (e, t) {
          "use strict";
          t.Z = {
            $black: "#000",
            $white: "#fff",
            $blue1: "#083aaa",
            $blue2: "#2860d8",
            $blue3: "#4f85e5",
            $blue35: "#5aa0d5",
            $blue4: "#a7d8ff",
            $blue5: "#dcefff",
            $blue7: "#477aaa",
            $blue8: "#346eb7",
            $purple1: "#5960ec",
            "$error-red": "#ce2424",
            $gray1: "#333",
            $gray2: "#959595",
            $gray3: "#ccc",
            $gray4: "#dcdcdc",
            $gray5: "#e6e6e6",
            $gray6: "#f4f4f4",
            $gray7: "#fafafa",
            $gray8: "#c4c4c4",
            $gray9: "#c2c2c2",
            $gray10: "#d9d9d9",
            $gray11: "#eee",
            $gray22: "#e3e3e1",
            $newsGray10: "#dfdfdf",
            $newsGray25: "#c7c7c7",
            $newsGray50: "#8b8b8b",
            $newsGray60: "#727272",
            $newsGray85: "#363636",
            $newsGray100: "#121212",
            $blueGray1: "#787886",
            $gold1: "#c4a200",
            $gold2: "#e2c32f",
            $yellow1: "#ffda00",
            $green1: "#6dc3a1",
            $statsPink: "#f93aa7",
            $statsYellow: "#ffc600",
            "$spelling-bee-yellow": "#f8cd05",
            "$letter-boxed-pink": "#faa6a4",
            $bannerBlue: "#4d88f9",
            "$daily-crossword-blue": "#6493e6",
            "$mini-crossword-blue": "#95befa",
            "$midi-crossword-blue": "#7ca8f0",
            "$spelling-bee-gold": "#f7da21",
            "$tiles-green": "#b5e352",
            "lb-red": "var(--lb-red)",
            "$sudoku-orange": "#fb9b00",
            "$connections-periwinkle": "#B3A7FE",
            "$trivia-orange": "#FF945C",
            "$strands-seafoam": "#C0DDD9",
            "$pips-pink": "#DAA8D0",
            "bg-moment": "var(--bg-moment)",
            "sb-yellow": "var(--sb-yellow)",
          };
        },
        67374: function (e, t, r) {
          "use strict";
          r.d(t, {
            Dx: function () {
              return m;
            },
            Ej: function () {
              return h;
            },
            FG: function () {
              return _;
            },
            JO: function () {
              return u;
            },
            ML: function () {
              return y;
            },
            Sx: function () {
              return d;
            },
            XU: function () {
              return g;
            },
            dk: function () {
              return p;
            },
            hE: function () {
              return b;
            },
            h_: function () {
              return f;
            },
            im: function () {
              return w;
            },
            zx: function () {
              return v;
            },
          });
          var n = r(67294),
            o = r(94184),
            a = r.n(o),
            i = r(65489),
            l = r(40245),
            s = (r(32825), r(8194)),
            c = r(1342);
          const d = (e) => {
              let { trackData: t, override: r } = e;
              return window.isHybridWebView && window.NativeBridge
                ? "ios" === window.newsreaderAppPlatform
                  ? null
                  : n.createElement(s.Z, {
                    onClick: () => {
                      var e;
                      if (r) r();
                      else {
                        if (t) {
                          const {
                              elementName: e,
                              context: r,
                              moduleLabel: n,
                            } = t,
                            o = "back";
                          (0, i.$g)("click", r, e, o, n);
                        }
                        null === (e = window.NativeBridge) ||
                          void 0 === e ||
                          e.gamesBackToHub();
                      }
                    },
                  })
                : null;
            },
            u = (e) => {
              let { icon: t, size: r = "large" } = e;
              return n.createElement("div", {
                className: a()("pz-moment__icon", r, t),
                "data-testid": "moment-icon",
              });
            },
            m = (e) => {
              let {
                text: t,
                size: r = "large",
                font: o = "karnak",
                level: i = "1",
                className: l,
              } = e;
              const s = "h".concat(i),
                c = a()("pz-moment__title", r, o, l);
              return n.createElement(s, { className: c }, t);
            },
            p = (e) => {
              let {
                text: t,
                variant: r = "default",
                font: o = "karnak",
                level: i = "1",
                className: l,
              } = e;
              const s = "h".concat(i),
                c = a()("pz-moment__description", r, o, l);
              return n.createElement(s, {
                className: c,
                dangerouslySetInnerHTML: { __html: t },
              });
            },
            f = (e) => {
              let { text: t, className: r } = e;
              return n.createElement(
                "span",
                { className: a()("pz-moment__meta", r) },
                t,
              );
            },
            g = (e) => {
              let { children: t } = e;
              return n.createElement(
                "span",
                { className: "pz-moment__info-text " },
                t,
              );
            },
            v = (e) => {
              let {
                text: t,
                children: r,
                dataTestId: o,
                action: i,
                icon: s = "none",
                color: c = "primary",
                variant: d = "default",
                isEmphasizedNew: u = !1,
                className: m = [],
                isLink: p = !1,
                newTab: f = !1,
                disabled: g = !1,
                url: v = "",
              } = e;
              const b = t || r,
                h = Array.isArray(m) ? m : [m],
                y = a()("pz-moment__button", c, d, ...h);
              if (p) {
                const e = {
                  className: y,
                  href: v,
                  onClick: i,
                  target: f ? "_blank" : void 0,
                  rel: f ? "noopener noreferrer" : void 0,
                };
                return n.createElement(
                  "a",
                  e,
                  u &&
                    n.createElement(l.Z, {
                      text: "new",
                      position: "top-right-outside",
                    }),
                  "checked" === s &&
                    n.createElement("div", {
                      className: "pz-moment__button--checked",
                    }),
                  "locked" === s &&
                    n.createElement("div", {
                      className: "pz-moment__button--padlock",
                    }),
                  b,
                );
              }
              return n.createElement(
                "button",
                {
                  "data-testid": o,
                  type: "button",
                  disabled: !!g,
                  "aria-disabled": !!g,
                  className: y,
                  onClick: i,
                },
                u &&
                  n.createElement(l.Z, {
                    text: "new",
                    position: "top-right-outside",
                  }),
                "checked" === s &&
                  n.createElement("div", {
                    className: "pz-moment__button--checked",
                  }),
                "locked" === s &&
                  n.createElement("div", {
                    className: "pz-moment__button--padlock",
                  }),
                b,
              );
            },
            b = (e) => {
              let { buttons: t, header: r = null, order: o = "default" } = e;
              return n.createElement(
                "div",
                { className: "pz-moment__button-group" },
                r &&
                  n.createElement(
                    "div",
                    { className: "header" },
                    n.createElement("h3", null, r),
                  ),
                n.createElement(
                  "div",
                  { className: a()("pz-moment__button-wrapper", { [o]: o }) },
                  (t || []).map((e, t) =>
                    n.cloneElement(e, {
                      key: "button-group-button-".concat(t),
                    })
                  ),
                ),
              );
            },
            h = (e) => {
              let { date: t } = e;
              return n.createElement(
                "span",
                {
                  "data-testid": "pz-moment__date",
                  className: "pz-moment__info-date",
                },
                t,
              );
            },
            y = (e) => {
              let { editor: t } = e;
              return t
                ? n.createElement(
                  "span",
                  {
                    "data-testid": "pz-moment__editor",
                    className: "pz-moment__info-editor",
                  },
                  "Edited by ".concat(t),
                )
                : null;
            },
            w = (e) => {
              let { bgColor: t = "$gray3", children: r, className: o } = e;
              return n.createElement(
                "div",
                {
                  className: a()("pz-moment", o),
                  style: { backgroundColor: c.Z[t] },
                  "data-testid": "moment-wrapper",
                },
                r,
              );
            },
            _ = (e) => {
              let { promo: t } = e;
              return "oxford" === t
                ? n.createElement(
                  "p",
                  null,
                  n.createElement("a", {
                    href: "https://www.oxforddictionaries.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "pz-moment__promo",
                  }),
                )
                : null;
            };
        },
        8194: function (e, t, r) {
          "use strict";
          var n = r(67294);
          function o() {
            return (
              (o = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) {
                    Object.prototype.hasOwnProperty.call(r, n) &&
                      (e[n] = r[n]);
                  }
                }
                return e;
              }), o.apply(this, arguments)
            );
          }
          t.Z = (e) =>
            n.createElement(
              "button",
              o(
                {
                  "data-testid": "hybrid-back",
                  type: "button",
                  className:
                    "pz-hybrid-back pz-hide-web pz-hide-play-tab pz-hide-newsreader-ios-hybrid",
                },
                e,
              ),
              n.createElement(
                "span",
                { className: "pz-hybrid-back__text" },
                "Back",
              ),
            );
        },
        65489: function (e, t, r) {
          "use strict";
          r.d(t, {
            $g: function () {
              return d.$g;
            },
            Be: function () {
              return w.B;
            },
            Fg: function () {
              return p.Fg;
            },
            Fi: function () {
              return f.abra;
            },
            LW: function () {
              return d.LW;
            },
            Mk: function () {
              return s.Mk;
            },
            T0: function () {
              return a.T0;
            },
            Tv: function () {
              return p.Tv;
            },
            ec: function () {
              return s.ec;
            },
            env: function () {
              return a.OB;
            },
            hX: function () {
              return d.hX;
            },
            iU: function () {
              return a.iU;
            },
            j: function () {
              return d.j;
            },
            j0: function () {
              return a.j0;
            },
            kh: function () {
              return a.kh;
            },
            kw: function () {
              return E;
            },
            lY: function () {
              return p.lY;
            },
            ob: function () {
              return d.ob;
            },
            vl: function () {
              return a.vl;
            },
            wC: function () {
              return l.wC;
            },
            xD: function () {
              return s.xD;
            },
          });
          var n = r(93600),
            o = r(74395),
            a = r(22042),
            i = r(96303),
            l = r(31069),
            s = r(73649),
            c = r(67719),
            d = r(41586),
            u = r(48198),
            m = r(59234),
            p = r(81239),
            f = r(42714),
            g = r(6756),
            v = r(49808),
            b = r(72811),
            h = r(73972),
            y = r(53212),
            w = r(93251);
          const _ = "prod" === u.win.env.name ? "prd" : "dev";
          if (
            ((0, d.U9)(),
              (0, p.ZP)(u.win.sentryConfig),
              (0, b.Z)(u.win.datadogRumConfig),
              (0, o.Z)(),
              f.abra.init(),
              (0, n.IT)({ env: _ }).catch((e) => {
                console.error("Error refreshing Purr cache:", e);
              }),
              "connections" === u.win.pageName &&
              "prod" !== u.win.env.name &&
              (0, y.Z)(),
              (0, s.t6)(),
              (0, c.q)(),
              a.G7)
          ) {
            u.win.dataLayer = [];
          } else {
            const e = (0, i.pg)();
            (e ||
              ((0, i.He)(),
                (0, g.Z)((0, i.Qx)()),
                (0, h.YU)(),
                (0, h.J5)(),
                (0, i.I5)(f.abra.getTests())),
              u.win.addEventListener("load", () => {
                ((0, l.IX)(),
                  (0, m.Z)(),
                  e || (0, i.YY)((0, v.Z)(u.win), f.abra.getTests()),
                  (0, d.Sv)());
              }));
          }
          const E = () => u.win.gameData;
        },
        72811: function (e, t, r) {
          "use strict";
          r.d(t, {
            D: function () {
              return n;
            },
          });
          const n = (e, t) => {
            if ("undefined" != typeof DD_RUM) {
              try {
                DD_RUM.addAction(e, t);
              } catch (e) {
                console.error("Error adding RUM action:", e);
              }
            }
          };
          t.Z = (e) => {
            const {
                applicationId: t,
                clientToken: r,
                environment: n,
                release: o,
              } = e,
              a = ((e) => {
                if ("prod" !== e) return 100;
                const { pathname: t } = window.location;
                return t.includes("/wordle") ? 0.5 : 1;
              })(n);
            "dev" !== n &&
              t &&
              r &&
              "undefined" != typeof DD_RUM &&
              (DD_RUM.init({
                applicationId: t,
                clientToken: r,
                site: "datadoghq.com",
                service: "games-phoenix",
                env: n,
                version: o,
                sessionSampleRate: a,
                sessionReplaySampleRate: 1,
                trackUserInteractions: !0,
                trackResources: !0,
                trackLongTasks: !0,
                defaultPrivacyLevel: "mask-user-input",
                useSecureSessionCookie: !0,
              }),
                DD_RUM.setGlobalContextProperty("nyt", {
                  billing: {
                    environment: n,
                    deployment: { id: "gcp-nyt-dv-shared-prd" },
                  },
                }));
          };
        },
        73649: function (e, t, r) {
          "use strict";
          r.d(t, {
            Mk: function () {
              return d;
            },
            ec: function () {
              return u;
            },
            ku: function () {
              return s;
            },
            t6: function () {
              return l;
            },
            xD: function () {
              return c;
            },
          });
          var n = r(37226),
            o = r(22042),
            a = r(10431),
            i = r(41586);
          const l = () => {
              ((() => {
                const e = (0, a.rI)((0, o.iU)("hybrid-back"));
                e &&
                  window.isHybridWebView &&
                  window.NativeBridge &&
                  (0, a.Oo)(e, "click", () => {
                    var e;
                    "sudoku" !== (0, o.j0)() &&
                      (null === (e = window.NativeBridge) ||
                        void 0 === e ||
                        e.gamesBackToHub());
                  });
              })(),
                (() => {
                  if (window.isHybridWebView && window.NativeBridge) {
                    const e = document.querySelectorAll(
                        ".".concat((0, o.iU)("nav-login")),
                      ),
                      t = document.querySelectorAll(
                        ".".concat((0, o.iU)("nav-logout")),
                      ),
                      r = document.querySelectorAll(
                        ".".concat((0, o.iU)("nav-subscribe")),
                      ),
                      n = document.querySelectorAll(
                        ".".concat((0, o.iU)("nav-account-details")),
                      ),
                      i = (e) =>
                        e.forEach((e) => {
                          (0, a.cn)(e, "hybrid-hidden");
                        }),
                      l = (o) => {
                        const a = null == o ? void 0 : o.isUserLoggedIn,
                          l = null == o ? void 0 : o.isSubscribed;
                        (a ? i(e) : (i(t), i(n)), l && i(r));
                      };
                    (window.NativeBridge.gamesGetUserDetails()
                      .then((e) => {
                        if (!e.success) throw new Error(e.error);
                        l(e.values.gamesGetUserDetails);
                      })
                      .catch((e) => {
                        (console.error("Getting user details failed", e),
                          i(t),
                          i(n));
                      }),
                      (0, a.Oo)(window, "gamesUserCredentialChanged", (e) => {
                        var t;
                        l(
                          null == e ||
                            null === (t = e.detail) ||
                            void 0 === t ||
                            null === (t = t.values) ||
                            void 0 === t
                            ? void 0
                            : t.gamesAuthenticateUser,
                        );
                      }));
                    const s = (e, t) => {
                      e.forEach((e) => {
                        (0, a.Oo)(e, "click", (e) => {
                          var r;
                          (e.preventDefault(),
                            null === (r = window.NativeBridge) ||
                            void 0 === r ||
                            r.gamesAuthenticateUser(t).then((e) => {
                              if (!e.success) throw new Error(e.error);
                              window.dispatchEvent(
                                new CustomEvent(
                                  "gamesUserCredentialChanged",
                                  { detail: e },
                                ),
                              );
                            }));
                        });
                      });
                    };
                    (s(r, "subscribe"), s(e, "login"));
                  }
                })(),
                (window.onload = () => {
                  [...document.querySelectorAll(".js-hub-tracker")].forEach(
                    (e) => {
                      let t = e.dataset.trackHub;
                      if (!t) {
                        const r = e.querySelector("[data-track-hub]");
                        r && (t = r.dataset.trackHub);
                      }
                      e.addEventListener(
                        "click",
                        () => {
                          t && (0, n.d)(t, null);
                        },
                        !0,
                      );
                    },
                  );
                }));
            },
            s = () => {
              let e = !1,
                t = -1;
              const r = (0, a.rI)((0, o.iU)("nav-burger")),
                n = (0, a.rI)((0, o.iU)("nav-drawer"));
              if (!r || !n) return;
              const l = [...n.querySelectorAll(".customNavLink")];
              function s() {
                ((e = !0),
                  r &&
                  n &&
                  ((0, a.cn)(n, "open"),
                    (0, a.cn)(r, "active"),
                    (0, i.ob)({
                      name: (0, o.j0)(),
                      label: "click-nav",
                      context: null,
                    }),
                    (0, a.P$)(r, "aria-expanded", e.toString()),
                    (0, a.P$)(n, "aria-hidden", (!e).toString())));
              }
              function c() {
                ((e = !1),
                  r &&
                  n &&
                  ((0, a.IV)(n, "open"),
                    (0, a.cn)(n, "closing"),
                    setTimeout(() => {
                      (0, a.IV)(n, "closing");
                    }, 500),
                    (0, a.IV)(r, "active"),
                    (0, a.P$)(r, "aria-expanded", e.toString()),
                    (0, a.P$)(n, "aria-hidden", (!e).toString())));
              }
              ((0, a.Oo)(r, "click", () => {
                (e ? c() : s(), r.blur());
              }),
                (0, a.Oo)(r, "keydown", (r) => {
                  const { key: n, keyCode: o } = r;
                  if ("Escape" !== n && "Esc" !== n) {
                    if ("Enter" !== n && "Space" !== n && 32 !== o) {
                      return "ArrowDown" === n
                        ? (r.preventDefault(), s(), (t = 0), void l[t].focus())
                        : "ArrowUp" === n
                        ? (r.preventDefault(),
                          s(),
                          (t = l.length - 1),
                          void l[t].focus())
                        : void 0;
                    }
                    e ? c() : (s(), (t = 0), l[t].focus());
                  } else c();
                }),
                (0, a.Oo)(n, "keydown", (e) => {
                  const { key: t } = e;
                  ("Escape" !== t && "Esc" !== t) || (c(), r.focus());
                }),
                (0, a.rI)((0, o.iU)("logo-nav")).addEventListener(
                  "click",
                  () => {
                    var e;
                    const t = {
                      eventData: {
                        pagetype: "game",
                        trigger: "module",
                        type: "click",
                      },
                      module: {
                        name: "click",
                        context: "",
                        element: {
                          name: null !== (e = window) &&
                              void 0 !== e &&
                              null !== (e = e.location) &&
                              void 0 !== e &&
                              e.pathname.startsWith("/puzzles/leaderboards")
                            ? "your-leaderboard"
                            : (0, o.j0)(),
                          label: "games-logo",
                        },
                      },
                    };
                    (0, i.j)("moduleInteraction", t);
                  },
                ));
              const d = document.querySelector("#js-nav-actions"),
                u = null == d
                  ? void 0
                  : d.querySelectorAll("a.js-nav-subscribe")[0],
                m = null == d
                  ? void 0
                  : d.querySelectorAll("a.js-nav-login")[0];
              (null == u ||
                u.addEventListener("click", () => {
                  const e = (0, o.j0)();
                  (0, i.j)("moduleInteraction", {
                    eventData: {
                      pagetype: "game",
                      trigger: "module",
                      type: "ob_click",
                    },
                    module: { element: { name: e, label: "subscribe-header" } },
                  });
                }),
                null == m ||
                m.addEventListener("click", () => {
                  const e = (0, o.j0)();
                  (0, i.j)("moduleInteraction", {
                    eventData: {
                      pagetype: "game",
                      trigger: "module",
                      type: "ob_click",
                    },
                    module: { element: { name: e, label: "log-in-header" } },
                  });
                }));
            },
            c = (0, o.iU)("global-nav"),
            d = (0, o.iU)("mobile-toolbar"),
            u = "show-mobile-toolbar";
          (document.querySelector(".pz-header"), (0, a.rI)(c), (0, a.rI)(d));
        },
        41586: function (e, t, r) {
          "use strict";
          r.d(t, {
            $g: function () {
              return v;
            },
            LW: function () {
              return _;
            },
            Sv: function () {
              return y;
            },
            U9: function () {
              return O;
            },
            hX: function () {
              return b;
            },
            j: function () {
              return g;
            },
            ob: function () {
              return w;
            },
          });
          var n = r(38085),
            o = r(48198),
            a = r(10431),
            i = r(22042),
            l = r(12058),
            s = r(93251);
          function c(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function d(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? c(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : c(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const u = "dataLayer",
            m = "games-crosswords";
          ((o.win[u] = o.win[u] || []),
            window.isHybridWebView ||
            o.win[u].push({ event: "gtm.js", "gtm.start": (0, i.zO)() }));
          const p = (0, a.R2)("link[rel=canonical]"),
            f = p ? p.href : o.JU.location.href,
            g = (e, t) => {
              if (void 0 !== typeof window) {
                if (window.isHybridWebView && window.NativeBridge) {
                  const r = "moduleInteraction" === e ? "interaction" : e;
                  if ("heartbeat" === r) return;
                  window.NativeBridge.sendAnalytic(r, t);
                } else {
                  (o.win[u].push(d({ event: e }, t)),
                    ((e) => {
                      var t, r;
                      if (!i.l1) return null;
                      switch (e) {
                        case "impression":
                        case "moduleInteraction":
                          null === (t = (r = window).nyt_et) ||
                            void 0 === t ||
                            t.call(r, {
                              subject: "page_update",
                              fastly_headers: { b2b: "delta" },
                            });
                      }
                    })(e));
                }
              }
            };
          window.foundationTrack = g;
          const v = (e, t, r, n, o, a, i) => {
              const l = {
                module: d(
                  {
                    name: e,
                    context: t,
                    region: i || "",
                    element: {
                      name: r || "",
                      label: "string" == typeof n ? n : JSON.stringify(n),
                    },
                  },
                  o && { label: o },
                ),
                eventData: {
                  pageType: "game",
                  type: a ? "ob_click" : "click",
                  trigger: "module",
                  status: "",
                },
              };
              g("moduleInteraction", l);
            },
            b = (e, t, r, n) => {
              g("impression", {
                module: { name: e, context: n, region: t || "", label: r },
              });
            },
            h = (0, i.y5)(() => {
              if (window.isHybridWebView) return null;
              const e = (0, i.B2)({
                  sourceApp: m,
                  referrer: o.JU.referrer,
                  assetUrl: f,
                  caller_id: m,
                }),
                t = "".concat(i.OB.tagx, "/svc/nyt/data-layer").concat(e);
              return s.B.get(t);
            }),
            y = () => {
              h.initialize();
              const e = (e) => {
                (e && g("userDataReady", e),
                  g("pageDataReady", {
                    application: { name: m, environment: i.OB.name },
                    asset: { url: f },
                    pageview: { id: l.Z.current },
                  }),
                  (() => {
                    const e = (0, i.zO)();
                    setInterval(() => {
                      o.JU.hasFocus() &&
                        g("heartbeat", {
                          pageview: {
                            heartbeat: {
                              timeSincePageDataReady: (0, i.zO)() - e,
                              heartbeatInterval: 5e3,
                            },
                          },
                        });
                    }, 5e3);
                  })());
              };
              h.get()
                .then(e)
                .catch(() => e());
            },
            w = (e) => {
              let {
                name: t,
                label: r,
                context: n,
                element: o = null,
                useBeacon: a = !1,
                medium: i = null,
                source: l = null,
                region: s = null,
                moduleName: c = null,
                moduleLabel: d = null,
              } = e;
              "undefined" != typeof window &&
                g("moduleInteraction", {
                  eventData: {
                    pagetype: "game",
                    trigger: "module",
                    type: a ? "ob_click" : "click",
                  },
                  module: {
                    type: "click",
                    element: o || { name: t, label: r },
                    context: n,
                    label: d,
                    medium: i,
                    source: l,
                    region: s,
                    name: c,
                  },
                });
            },
            _ = (e) => {
              let {
                context: t,
                element: r,
                name: n,
                label: o,
                region: a,
                url: i,
                type: l = "click",
                useBeacon: s,
              } = e;
              "undefined" != typeof window &&
                g("moduleInteraction", {
                  eventData: {
                    pagetype: "game",
                    trigger: "module",
                    type: s ? "ob_click" : "click",
                  },
                  module: {
                    type: l,
                    element: r,
                    context: t,
                    name: n,
                    label: o,
                    region: a,
                    url: i,
                  },
                });
            },
            E = (e) => {
              let { name: t, delta: r, id: n } = e;
              const o = {
                eventAction: "Web Vitals",
                eventLabel: n,
                pageview: {
                  performance: {
                    [t.toLowerCase()]: Math.round("CLS" === t ? 1e3 * r : r),
                  },
                },
              };
              g("performance", o);
            },
            O = () => {
              ((0, n.mw)(E), (0, n.Fu)(E), (0, n.NO)(E), (0, n.Yn)(E));
            };
        },
        46098: function (e, t, r) {
          "use strict";
          r.d(t, {
            CL: function () {
              return m;
            },
            Or: function () {
              return g;
            },
            VM: function () {
              return p;
            },
            wv: function () {
              return f;
            },
          });
          var n = r(65489),
            o = r(64576),
            a = r(99891),
            i = r(34677);
          function l(e, t, r, n, o, a, i) {
            try {
              var l = e[a](i),
                s = l.value;
            } catch (e) {
              return void r(e);
            }
            l.done ? t(s) : Promise.resolve(s).then(n, o);
          }
          function s(e) {
            return function () {
              var t = this,
                r = arguments;
              return new Promise(function (n, o) {
                var a = e.apply(t, r);
                function i(e) {
                  l(a, n, o, i, s, "next", e);
                }
                function s(e) {
                  l(a, n, o, i, s, "throw", e);
                }
                i(void 0);
              });
            };
          }
          function c(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function d(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? c(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : c(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const u = (e, t, r) =>
              d(
                d({}, e),
                {},
                {
                  earned_badges: (0, o.ux)(t, r),
                  badges_trophy_shelf: (0, o.zb)(t, r),
                  checkpoint_badges: (0, o.Xp)(t, r),
                },
              ),
            m = (function () {
              var e = s(function* (e, t) {
                const r = t.join(","),
                  a = yield n.Be.get(
                    ""
                      .concat(n.env.moogle, "/svc/games/state/")
                      .concat(e, "/latests?puzzle_ids=")
                      .concat(r),
                    { withStatus: !0 },
                  );
                if (403 === a.status) throw new Error(i.F);
                if (!a.states) {
                  throw new Error(
                    "fetchMultiStates: ".concat(a.error || "Invalid response"),
                  );
                }
                const l = (0, o.qs)();
                return l && "off" !== l.mockMode ? u(a, l, e) : a;
              });
              return function (t, r) {
                return e.apply(this, arguments);
              };
            })(),
            p = (function () {
              var e = s(function* (e, t) {
                const r = yield n.Be.post(
                  "".concat(n.env.moogle, "/svc/games/state"),
                  e,
                  {
                    withStatus: !0,
                    headers: {
                      "x-games-client-time": new Date().toISOString(),
                      "x-games-aws": ((i = e.game),
                        "connections" === i
                          ? "cxn"
                          : "strands" === i
                          ? "strands"
                          : "wordleV2" === i
                          ? "wrd"
                          : "spelling_bee" === i
                          ? "sb"
                          : "trivia" === i
                          ? "trivia"
                          : ""),
                      "x-games-save-trigger": t,
                      "x-games-user-type": (0, a.e)(),
                    },
                  },
                );
                var i;
                if (null != r && r.error) {
                  throw new Error(r.error);
                }
                if (!r || !r.version) {
                  throw new Error(
                    "missing version in games-state POST response",
                  );
                }
                const l = (0, o.qs)();
                return l && "off" !== l.mockMode ? u(r, l, e.game) : r;
              });
              return function (t, r) {
                return e.apply(this, arguments);
              };
            })(),
            f = (function () {
              var e = s(function* (e) {
                const t = yield n.Be.get(
                  "".concat(n.env.moogle, "/svc/games/settings/").concat(e),
                );
                if ("forbidden" === t.error) {
                  throw new Error("not authenticated");
                }
                if (t.user_id) return t;
                throw new Error(
                  "fetchSettings: ".concat(t.error || "Invalid response"),
                );
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            g = (function () {
              var e = s(function* (e) {
                const t = yield n.Be.post(
                  "".concat(n.env.moogle, "/svc/games/settings"),
                  e,
                  { withStatus: !0 },
                );
                if (null != t && t.error) throw new Error(t.error);
                if (201 !== (null == t ? void 0 : t.status)) {
                  throw new Error(
                    "status code ".concat(t.status, " from settings POST"),
                  );
                }
                return t;
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
        },
        69537: function (e, t, r) {
          "use strict";
          r.d(t, {
            I6: function () {
              return s;
            },
            Nw: function () {
              return c;
            },
          });
          var n = r(29829);
          function o(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function a(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? o(Object(r), !0).forEach(function (t) {
                  var n, o, a, i;
                  ((n = e),
                    (o = t),
                    (a = r[t]),
                    (o = "symbol" ==
                          typeof (i = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, "string");
                              if ("object" != typeof n) return n;
                              throw new TypeError(
                                "@@toPrimitive must return a primitive value.",
                              );
                            }
                            return String(e);
                          })(o))
                        ? i
                        : i + "") in n
                      ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                      : (n[o] = a));
                })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                  e,
                  Object.getOwnPropertyDescriptors(r),
                )
                : o(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
            }
            return e;
          }
          const i = (e, t) => {
              null == t ||
                t.forEach((t) => {
                  const r = e.badges.earned.findIndex((e) => e.id === t.id);
                  r > -1 ? (e.badges.earned[r] = t) : e.badges.earned.push(t);
                });
            },
            l = (0, n.createSlice)({
              name: "moogle",
              initialState: {
                regiId: null,
                hasLoaded: !1,
                getPuzzleProgress: {
                  isLoading: !1,
                  error: !1,
                  errorMessage: null,
                  statesByPuzzleId: {},
                },
                getRemoteSettings: {
                  isLoading: !1,
                  error: !1,
                  errorMessage: null,
                  data: null,
                },
                postRequest: {},
                pendingSaves: [],
                player: null,
                badges: {
                  checkpoint: [],
                  detail: null,
                  earned: [],
                  shelf: [],
                  seen: {},
                },
                game: null,
              },
              reducers: {
                setGame: (e, t) => {
                  e.game = t.payload;
                },
                setLoaded: (e) => {
                  e.hasLoaded = !0;
                },
                loadMultiStates: (e) => {
                  e.getPuzzleProgress.isLoading = !0;
                },
                multiStatesSuccess: (e, t) => {
                  const {
                      checkpointBadges: r,
                      data: n,
                      earnedBadges: o,
                      player: l = null,
                      regiId: s = null,
                      shelf: c,
                    } = t.payload,
                    d = n.reduce((e, t) => ((e[t.puzzle_id] = t), e), {});
                  ((e.regiId = s),
                    (e.getPuzzleProgress.isLoading = !1),
                    (e.getPuzzleProgress.error = !1),
                    (e.getPuzzleProgress.statesByPuzzleId = a(
                      a({}, e.getPuzzleProgress.statesByPuzzleId),
                      d,
                    )),
                    l && (e.player = l),
                    i(e, o),
                    c && (e.badges.shelf = c),
                    (e.badges.checkpoint = r || []));
                },
                multiStatesError: (e, t) => {
                  ((e.regiId = null),
                    (e.getPuzzleProgress.isLoading = !1),
                    (e.getPuzzleProgress.error = !0),
                    (e.getPuzzleProgress.errorMessage = t.payload.message));
                },
                loadSettings: (e) => {
                  e.getRemoteSettings.isLoading = !0;
                },
                settingsSuccess: (e, t) => {
                  const { data: r, regiId: n = null } = t.payload;
                  ((e.regiId = n),
                    (e.getRemoteSettings.isLoading = !1),
                    (e.getRemoteSettings.error = !1),
                    (e.getRemoteSettings.data = r));
                },
                settingsError: (e, t) => {
                  ((e.getRemoteSettings.isLoading = !1),
                    (e.getRemoteSettings.error = !0),
                    (e.getRemoteSettings.errorMessage = t.payload.message));
                },
                loadMooglePost: (e, t) => {
                  const { puzzleId: r } = t.payload;
                  ((e.postRequest[r] = e.postRequest[r] || {
                    isLoading: !1,
                    error: !1,
                    errorMessage: null,
                    isErrorRetry: !1,
                  }),
                    (e.postRequest[r].isLoading = !0));
                },
                mooglePostSuccess: (e, t) => {
                  const {
                    checkpointBadges: r,
                    earnedBadges: n,
                    player: o = null,
                    puzzleId: a,
                    shelf: l,
                  } = t.payload;
                  ((e.postRequest[a] = e.postRequest[a] || {
                    isLoading: !1,
                    error: !1,
                    errorMessage: null,
                    isErrorRetry: !1,
                  }),
                    (e.postRequest[a].isLoading = !1),
                    (e.postRequest[a].error = !1),
                    o && (e.player = o),
                    i(e, n),
                    l && (e.badges.shelf = l),
                    (e.badges.checkpoint = r || []));
                },
                mooglePostError: (e, t) => {
                  const { puzzleId: r, message: n } = t.payload;
                  ((e.postRequest[r] = e.postRequest[r] || {
                    isLoading: !1,
                    error: !1,
                    errorMessage: null,
                    isErrorRetry: !1,
                  }),
                    (e.postRequest[r].isLoading = !1),
                    (e.postRequest[r].error = !0),
                    (e.postRequest[r].errorMessage = n));
                },
                enqueuePendingSave: (e, t) => {
                  e.pendingSaves.push(t.payload);
                },
                dequeuePendingSave: (e) => {
                  e.pendingSaves.shift();
                },
                setErrorRetry: (e, t) => {
                  const { puzzleId: r, value: n } = t.payload;
                  ((e.postRequest[r] = e.postRequest[r] || {
                    isLoading: !1,
                    error: !1,
                    errorMessage: null,
                    isErrorRetry: !1,
                  }),
                    (e.postRequest[r].isErrorRetry = n));
                },
                forceSave: (e, t) => {},
                preventedSaveAfterLoad: (e, t) => {},
                openBadgeDetail: (e, t) => {
                  e.badges.detail = {
                    badge: t.payload.detail,
                    returnMoment: t.payload.returnMoment,
                    isOpeningUnearned: t.payload.isOpeningUnearned,
                  };
                },
                notifyBadges: (e, t) => {
                  const { badgeIds: r, location: n } = t.payload;
                  r.forEach((t) => {
                    e.badges.seen[t] = n;
                  });
                },
              },
            }),
            { reducer: s, actions: c } = l;
        },
        42983: function (e, t, r) {
          "use strict";
          r.d(t, {
            P: function () {
              return a;
            },
          });
          var n = r(67294),
            o = r(26441);
          const a = () => {
            const { isStatsigReady: e } = (0, o.of)(),
              { client: t } = (0, o.g_)();
            return (0, n.useMemo)(
              () =>
                e
                  ? {
                    isMidiEnabled: t.checkGate("games_midi_web_1125"),
                    isReady: !0,
                  }
                  : { isMidiEnabled: !1, isReady: !1 },
              [e, t],
            );
          };
        },
        14237: function (e, t, r) {
          "use strict";
          (r.d(t, {
            aF: function () {
              return n.Z;
            },
          }),
            r(67294),
            r(73935),
            r(65489),
            r(43373),
            r(34797),
            r(29954),
            r(89385),
            r(46147));
          var n = r(71687);
          r(40679);
        },
        18289: function (e, t) {
          "use strict";
          t.Z = {
            flexContainer: "Banner-module_flexContainer__fxcX2",
            expandToRow:
              "Banner-module_expandToRow__gmkDm Banner-module_flexContainer__fxcX2",
            mobileColumn: "Banner-module_mobileColumn__X1bQJ",
            "visually-hidden": "Banner-module_visually-hidden__Jdirq",
            "skip-link": "Banner-module_skip-link__no36s",
            "button-primary": "Banner-module_button-primary__STfaj",
            largeBanner__button: "Banner-module_largeBanner__button__ya9kq",
            "button-transparent": "Banner-module_button-transparent__UBRAe",
            "button-dark-mode-support":
              "Banner-module_button-dark-mode-support__mcAEd",
            "button-card-secondary":
              "Banner-module_button-card-secondary__BQzSl",
            "button-card-primary": "Banner-module_button-card-primary__IK9cZ",
            "button-secondary": "Banner-module_button-secondary__oJafj",
            "no-hover-dark-button": "Banner-module_no-hover-dark-button__LL2mg",
            banner: "Banner-module_banner__8ZXZF",
            largeBanner: "Banner-module_largeBanner__Tg6Re",
            appAdIconBanner: "Banner-module_appAdIconBanner__CZlHO",
            multiIconBanner: "Banner-module_multiIconBanner__KZi3f",
            singleIconBanner: "Banner-module_singleIconBanner__LFn3K",
            banner__Information: "Banner-module_banner__Information__lRLS7",
            appAdIconBanner__Content:
              "Banner-module_appAdIconBanner__Content__YCtv3",
            multiIconBanner__Information:
              "Banner-module_multiIconBanner__Information__fIvsn",
            singleIconBanner__Information:
              "Banner-module_singleIconBanner__Information__JAPtb",
            arrow: "Banner-module_arrow__TDcAh",
            icon: "Banner-module_icon__eBv6E",
            icon_wordlebot: "Banner-module_icon_wordlebot__EXvKK",
            icon_wordleArchive: "Banner-module_icon_wordleArchive__tpNcM",
            icon_connectionsStats: "Banner-module_icon_connectionsStats__aTafh",
            icon_connectionsArchive:
              "Banner-module_icon_connectionsArchive__CmcnL",
            icon_miniArchive: "Banner-module_icon_miniArchive__qL7Tq",
            icon_miniLeaderboard: "Banner-module_icon_miniLeaderboard__J9isr",
            icon_connectionsLeaderboardFriends:
              "Banner-module_icon_connectionsLeaderboardFriends__bOxQI",
            icon_miniLeaderboardFriends:
              "Banner-module_icon_miniLeaderboardFriends__BD7i9",
            icon_sbLeaderboardFriends:
              "Banner-module_icon_sbLeaderboardFriends__B0N9r",
            icon_wordleLeaderboardFriends:
              "Banner-module_icon_wordleLeaderboardFriends__OTDnC",
            icon_crossplay: "Banner-module_icon_crossplay__vFB_1",
            icon_pips: "Banner-module_icon_pips__iycOt",
            icon_crosswordPreWeek: "Banner-module_icon_crosswordPreWeek__xo2I2",
            crosswordPreWeekBanner:
              "Banner-module_crosswordPreWeekBanner__W0lvl",
            singleIconBanner__BodyContent:
              "Banner-module_singleIconBanner__BodyContent__DBVyl",
            appAdIconBanner__Information:
              "Banner-module_appAdIconBanner__Information__OKY8_",
            title: "Banner-module_title__far_o",
            titleLeaderboardFriends:
              "Banner-module_titleLeaderboardFriends__HMgRQ",
            titleCrossplayStrands: "Banner-module_titleCrossplayStrands__sBh00",
            titlePips: "Banner-module_titlePips__jTS1J",
            titleCrosswordPreWeek: "Banner-module_titleCrosswordPreWeek__hxvWt",
            messageLeaderboardFriends:
              "Banner-module_messageLeaderboardFriends__nLNWw",
            messageCrossplay: "Banner-module_messageCrossplay__NIKJN",
            messagePips: "Banner-module_messagePips__szJ5R",
            messageCrosswordPreWeek:
              "Banner-module_messageCrosswordPreWeek__QClcW",
            crossplayBanner: "Banner-module_crossplayBanner__a483v",
            crossplayRiveContainer:
              "Banner-module_crossplayRiveContainer__wtdP9",
            titleCrossplay: "Banner-module_titleCrossplay__dNsBS",
            pipsBanner: "Banner-module_pipsBanner__rCZYX",
            newPill: "Banner-module_newPill__ECWmA",
            dropShadow: "Banner-module_dropShadow__DV456",
            iconHolder: "Banner-module_iconHolder__UIZ3u",
            multiIconBanner__BodyContent:
              "Banner-module_multiIconBanner__BodyContent__JUMyC",
            strandsBanner: "Banner-module_strandsBanner__Y0z4O",
            relative: "Banner-module_relative__wKdlH",
            strandsBanner__title: "Banner-module_strandsBanner__title__h3jHw",
            strandsBanner__subtitleContainer:
              "Banner-module_strandsBanner__subtitleContainer__yIDmd",
            strandsBanner__longIconContainer:
              "Banner-module_strandsBanner__longIconContainer__aJlyR",
            iconButton: "Banner-module_iconButton__lGXVc",
            bannerInformationTest: "Banner-module_bannerInformationTest__CgqDs",
            bannerBodyTest: "Banner-module_bannerBodyTest__pvG1w",
            strandsIcon: "Banner-module_strandsIcon__PJgzz",
            caretRightContainer: "Banner-module_caretRightContainer__XN_cW",
            adArrow: "Banner-module_adArrow__fcdYH",
            appAdIconBanner__Title:
              "Banner-module_appAdIconBanner__Title__vFKIK",
            appAdIcon: "Banner-module_appAdIcon___EGjT",
            appAdIconBannerStrands:
              "Banner-module_appAdIconBannerStrands__eTqDb",
            appAdIconBannerStrands__Content:
              "Banner-module_appAdIconBannerStrands__Content__WoXb3",
            largeBannerHidden: "Banner-module_largeBannerHidden__Ia0mu",
            largeBanner__dismiss: "Banner-module_largeBanner__dismiss__Onhae",
            largeBanner__icon: "Banner-module_largeBanner__icon__vYBoG",
            largeBanner__icon_wordleLeaderboardLarge:
              "Banner-module_largeBanner__icon_wordleLeaderboardLarge__QZNJb",
            largeBanner__title: "Banner-module_largeBanner__title__NHa1g",
            largeBanner__message: "Banner-module_largeBanner__message__dc9X2",
            sbBanner: "Banner-module_sbBanner__ZvMcF",
            slideDown: "Banner-module_slideDown__EUWPK",
            flyIn: "Banner-module_flyIn__Ifqfr",
            flyOut: "Banner-module_flyOut__kNaoB",
            fadeIn: "Banner-module_fadeIn__DpqRq",
          };
        },
        1856: function (e, t) {
          "use strict";
          t.Z = {
            flexContainer: "PillBlue-module_flexContainer__f90wk",
            expandToRow:
              "PillBlue-module_expandToRow___evsG PillBlue-module_flexContainer__f90wk",
            mobileColumn: "PillBlue-module_mobileColumn__sW3St",
            "visually-hidden": "PillBlue-module_visually-hidden__uHTGr",
            "skip-link": "PillBlue-module_skip-link__L8tXY",
            pill: "PillBlue-module_pill__Tpdm7",
            default: "PillBlue-module_default__rE5l9",
            "top-right-outside": "PillBlue-module_top-right-outside__P0JWg",
            "top-right-edge": "PillBlue-module_top-right-edge__mG3Aq",
            slideDown: "PillBlue-module_slideDown__tqdf2",
            flyIn: "PillBlue-module_flyIn__mF0gp",
            flyOut: "PillBlue-module_flyOut__FK_Gg",
            fadeIn: "PillBlue-module_fadeIn__JHPml",
          };
        },
        49674: function (e) {
          function t(e) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          ((t.keys = function () {
            return [];
          }),
            (t.resolve = t),
            (t.id = 49674),
            (e.exports = t));
        },
      },
      o = {};
    function a(e) {
      var t = o[e];
      if (void 0 !== t) return t.exports;
      var r = (o[e] = { id: e, loaded: !1, exports: {} });
      return (
        n[e].call(r.exports, r, r.exports, a), (r.loaded = !0), r.exports
      );
    }
    ((a.m = n),
      (e = []),
      (a.O = function (t, r, n, o) {
        if (!r) {
          var i = 1 / 0;
          for (d = 0; d < e.length; d++) {
            ((r = e[d][0]), (n = e[d][1]), (o = e[d][2]));
            for (var l = !0, s = 0; s < r.length; s++) {
              (!1 & o || i >= o) &&
                Object.keys(a.O).every(function (e) {
                  return a.O[e](r[s]);
                })
                ? r.splice(s--, 1)
                : ((l = !1), o < i && (i = o));
            }
            if (l) {
              e.splice(d--, 1);
              var c = n();
              void 0 !== c && (t = c);
            }
          }
          return t;
        }
        o = o || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
        e[d] = [r, n, o];
      }),
      (a.n = function (e) {
        var t = e && e.__esModule
          ? function () {
            return e.default;
          }
          : function () {
            return e;
          };
        return (a.d(t, { a: t }), t);
      }),
      (r = Object.getPrototypeOf
        ? function (e) {
          return Object.getPrototypeOf(e);
        }
        : function (e) {
          return e.__proto__;
        }),
      (a.t = function (e, n) {
        if ((1 & n && (e = this(e)), 8 & n)) return e;
        if ("object" == typeof e && e) {
          if (4 & n && e.__esModule) return e;
          if (16 & n && "function" == typeof e.then) return e;
        }
        var o = Object.create(null);
        a.r(o);
        var i = {};
        t = t || [null, r({}), r([]), r(r)];
        for (
          var l = 2 & n && e;
          "object" == typeof l && !~t.indexOf(l);
          l = r(l)
        ) {
          Object.getOwnPropertyNames(l).forEach(function (t) {
            i[t] = function () {
              return e[t];
            };
          });
        }
        return (
          (i.default = function () {
            return e;
          }),
            a.d(o, i),
            o
        );
      }),
      (a.d = function (e, t) {
        for (var r in t) {
          a.o(t, r) &&
            !a.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }
      }),
      (a.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
      (a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (a.r = function (e) {
        ("undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 }));
      }),
      (a.nmd = function (e) {
        return ((e.paths = []), e.children || (e.children = []), e);
      }),
      (function () {
        var e = { 630: 0, 655: 0, 4026: 0, 1036: 0 };
        a.O.j = function (t) {
          return 0 === e[t];
        };
        var t = function (t, r) {
            var n,
              o,
              i = r[0],
              l = r[1],
              s = r[2],
              c = 0;
            if (
              i.some(function (t) {
                return 0 !== e[t];
              })
            ) {
              for (n in l) a.o(l, n) && (a.m[n] = l[n]);
              if (s) { var d = s(a); }
            }
            for (t && t(r); c < i.length; c++) {
              ((o = i[c]), a.o(e, o) && e[o] && e[o][0](), (e[o] = 0));
            }
            return a.O(d);
          },
          r =
            (self.webpackChunk_xwords_phoenix =
              self.webpackChunk_xwords_phoenix || []);
        (r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r))));
      })(),
      a.O(
        void 0,
        [
          1946,
          9821,
          8986,
          6441,
          655,
          3739,
          1425,
          6166,
          381,
          7955,
          1741,
          9829,
          3692,
          7868,
          6337,
          9050,
          1836,
          3902,
          1447,
          4026,
          2818,
          1036,
          2318,
          7422,
          3741,
          7426,
          4784,
          2375,
        ],
        function () {
          return a(13214);
        },
      ));
    var i = a.O(
      void 0,
      [
        1946,
        9821,
        8986,
        6441,
        655,
        3739,
        1425,
        6166,
        381,
        7955,
        1741,
        9829,
        3692,
        7868,
        6337,
        9050,
        1836,
        3902,
        1447,
        4026,
        2818,
        1036,
        2318,
        7422,
        3741,
        7426,
        4784,
        2375,
      ],
      function () {
        return a(39351);
      },
    );
    i = a.O(i);
  })());
//# sourceMappingURL=crossword.6ad833d572ffda1a6155.js.map
