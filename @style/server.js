const c1 = B,
  c2 = B,
  c3 = B,
  c4 = B,
  c5 = B,
  co = B,
  B6 = B,
  ID = B,
  IG = B,
  Ih = B,
  IR = B,
  IU = B;
(function (I, X) {
  const p = B,
    G = B,
    h = B,
    R = B,
    U = B,
    A = B,
    e = B,
    i = B,
    F = B,
    V = B,
    Q = B,
    v = B,
    c0 = B,
    u = I();
  while (!![]) {
    try {
      const H =
        (-parseInt(p(0x147)) / (0x18d4 + -0x26f * 0x7 + -0x1 * 0x7ca)) *
          (parseInt(G(0xec)) / (-0x3ef * 0x2 + 0x5 * -0x757 + 0x2c93)) +
        (parseInt(p(0x155)) / (0x695 * 0x1 + -0x3f3 * -0x1 + 0x1 * -0xa85)) *
          (parseInt(h(0x136)) / (0x1 * 0x1a03 + 0x64e + -0x204d)) +
        (parseInt(U(0x139)) / (-0x13d * -0x7 + -0x2181 + 0x18db)) *
          (parseInt(h(0x135)) / (0xcd * 0x11 + 0x1 * -0x221b + 0x521 * 0x4)) +
        (parseInt(G(0x113)) / (0x27 * 0x1 + 0x3 * 0xcbb + -0x2651)) *
          (-parseInt(R(0x11c)) / (-0x2 * -0xf94 + 0x1131 + -0x3051)) +
        (-parseInt(R(0x11e)) / (0x5 * -0x8b + 0x19c5 + -0x1705)) *
          (-parseInt(R(0x151)) / (0x11c4 + 0x114e + -0x2308)) +
        parseInt(Q(0x159)) / (0x883 + 0x1f9d + -0x2815) +
        (parseInt(U(0x145)) / (-0xf * -0x95 + -0xa3f + 0x5 * 0x50)) *
          (-parseInt(c0(0xf6)) / (0x2068 + 0x613 + -0x266e * 0x1));
      if (H === X) break;
      else u["push"](u["shift"]());
    } catch (b) {
      u["push"](u["shift"]());
    }
  }
})(c, -0x1 * 0x2f0d6 + -0x1 * -0x14cb9 + 0x13 * 0x391c);
const fs = require("fs"),
  http = require(c1(0x143)),
  { exec } = require(c2(0x15b)),
  path = require(c1(0x14a)),
  port = -0x2017 + -0xc90 + -0x9 * -0x67b,
  rootDirectory = c4(0x129),
  styleJSPath = c3(0x115);
let isHandlingDoFileSave = ![];
function handleDoFileSave() {
  const c6 = c2,
    c7 = c2,
    c8 = c1,
    c9 = c4,
    cc = c3,
    cB = c2,
    cI = c1,
    cX = c5,
    cu = c1,
    cH = c1,
    cb = c5,
    cL = c3,
    cw = c5,
    cE = c2,
    ca = c3,
    cN = c1,
    I = {
      HxFsA: c6(0xfd),
      SWndy: function (X, u) {
        return X(u);
      },
      MRBvg: function (X, u) {
        return X !== u;
      },
      hXhdG: c6(0x104),
      mPKeH: c7(0x133),
      RZCXG: c8(0x106),
      fJMCi: function (X, u) {
        return X(u);
      },
      dQQyZ: function (X, u) {
        return X === u;
      },
      akGRS: c6(0x11d),
      FKSHY: c7(0x14b),
      RUkGU: function (X, u, H) {
        return X(u, H);
      },
      FMJJu: c9(0x137),
    };
  if (!isHandlingDoFileSave) {
    if (I[cc(0xf9)](I[cc(0x101)], I[cX(0x101)])) {
      (isHandlingDoFileSave = !![]), console[cI(0x11f)](I[cI(0xfb)]);
      const X = I[cH(0xe7)](exec, cE(0x132) + styleJSPath, (u, H, b) => {
        const cy = c9,
          cx = cB,
          cT = c7,
          ct = cX,
          cm = c7,
          cq = cX,
          cd = cI,
          cj = cw,
          cs = cw,
          cJ = c7,
          cZ = c6,
          cS = cu,
          L = {
            aHcPz: I["HxFsA"],
            WyNgq: function (w, E) {
              return I["SWndy"](w, E);
            },
          };
        u && console[cy(0x148)](cy(0x107) + u[cy(0xea)]);
        if (b) {
          if (I["MRBvg"](I[cT(0xe4)], I[cx(0xf3)]))
            console["error"](cq(0x161) + b);
          else {
            if (y) {
              const E = {};
              (E["Content-Type"] = L[cd(0x13b)]),
                s[ct(0xf0)](0x1 * -0x2294 + -0x2 * 0x125b + 0x3 * 0x184a, E),
                J[cm(0x13c)]("Not\x20Found");
            } else {
              const y = L[cm(0xe6)](Z, S),
                x = {};
              (x[cj(0x164)] = y),
                a["writeHead"](0x946 + 0x1ef + -0xa6d, x),
                N[cd(0x13c)](O);
            }
          }
        }
        isHandlingDoFileSave = ![];
      });
      X[c6(0x10d)]["on"](I["FMJJu"], (u) => {
        console["log"]("@style.js\x20Output:\x0a" + u);
      });
    } else
      y[cc(0xe8)](x, (g, n) => {
        const cO = cb,
          ck = cX,
          cK = cb,
          cD = cw,
          cr = cN,
          cM = cH,
          cl = c6;
        if (g) {
          const P = {};
          (P["Content-Type"] = I[cO(0x14f)]),
            O[ck(0xf0)](0x220d + 0x24d8 + 0x111 * -0x41, P),
            k[ck(0x13c)](I[cO(0x13e)]);
        } else {
          const z = I[ck(0x12c)](K, D),
            C = {};
          (C[ck(0x164)] = z),
            r[cM(0xf0)](-0x1ef8 + -0x2055 + 0x11 * 0x3c5, C),
            M["end"](n);
        }
      });
  }
}
fs["readFile"]("configDo.json", c4(0x126), (I, X) => {
  const cf = co,
    cW = co,
    cY = c4,
    cg = c2,
    cn = c1,
    cP = co,
    cz = c4,
    cC = co,
    cp = c2,
    cG = c5,
    ch = c2,
    cR = c4,
    cU = co,
    cA = co,
    ce = c3,
    ci = c4,
    cF = c2,
    B4 = c2,
    B5 = c1,
    u = {
      iwKsk: cf(0xfd),
      tvhcm: cW(0x117),
      Etowb: ".do",
      nKoso: function (H, b) {
        return H === b;
      },
      KNStg: function (H) {
        return H();
      },
      GMSYe: function (H, b) {
        return H !== b;
      },
      DAdwQ: cY(0x13f),
    };
  if (I) {
    if (u[cf(0x12d)](u[cY(0x103)], "KOtcR")) {
      console[cW(0x148)](cz(0x12b), I);
      return;
    } else {
      if (w) {
        const b = {};
        (b[cY(0x164)] = u[cn(0x15e)]),
          m[cp(0xf0)](-0xa * 0x15d + 0x3 * -0x5ae + 0x57 * 0x60, b),
          q[cW(0x13c)](u[cW(0x146)]);
      } else {
        const L = {};
        (L[cR(0x164)] = cW(0x156)),
          d[cn(0xf0)](0x1bd + -0x4 * -0x84e + -0x222d * 0x1, L),
          j[ce(0x13c)](s);
      }
    }
  }
  try {
    const b = JSON["parse"](X);
    b["componentsFolder"][cg(0x108)]((L) => {
      const cv = cA,
        w = {
          vjVOk: u["Etowb"],
          DrbYN: function (E, T) {
            const cV = B;
            return u[cV(0xf1)](E, T);
          },
          WcPPx: function (E) {
            const cQ = B;
            return u[cQ(0x134)](E);
          },
        };
      fs[cv(0xef)](L, (E, y) => {
        const B0 = cv,
          B1 = cv,
          B2 = cv,
          B3 = cv;
        y &&
          y[B0(0x11b)](w[B1(0x100)]) &&
          w["DrbYN"](E, B1(0xee)) &&
          w[B3(0xf7)](handleDoFileSave);
      });
    });
  } catch (L) {
    console[cW(0x148)](cR(0xf2), L);
  }
});
const server = http[co(0x112)]((I, X) => {
  const B7 = co,
    B8 = B6,
    B9 = c2,
    Bc = c4,
    BB = B6,
    BI = B6,
    BX = c4,
    Bu = c1,
    BH = B6,
    Bb = B6,
    BL = c3,
    Bw = c1,
    BE = c1,
    By = c1,
    Bx = co,
    Bg = c1,
    BP = c3,
    Bz = co,
    BC = B6,
    Bp = co,
    BV = co,
    BQ = c1,
    Bv = c1,
    I9 = co,
    Ic = c3,
    IB = c4,
    u = {
      HRYbx: B7(0x156),
      XMyHP: function (b, L) {
        return b !== L;
      },
      BlTpy: B8(0xed),
      pghxa: B9(0xf5),
      sDipJ: Bc(0xfd),
      gGFMl: "Internal\x20Server\x20Error",
      miLsd: function (b, L) {
        return b === L;
      },
      ODCwv: "Krryo",
      WglfE: Bc(0x162),
      BEacd: Bc(0x122),
      nqFnN: function (b, L) {
        return b === L;
      },
      czTUj: function (b, L) {
        return b(L);
      },
      uUxMw: "Not\x20Found",
      ZpsJk: function (b, L) {
        return b === L;
      },
      gbECN: BB(0x114),
      hqEyI: BI(0xfa),
      JbgXs: function (b, L) {
        return b === L;
      },
      xisiC: Bc(0x15c),
    },
    H = path["join"](rootDirectory, I[B9(0x10b)]);
  if (I[BI(0x10b)] === "/") {
    if (u["ZpsJk"](Bu(0x114), u[BE(0xe9)]))
      fs["readFile"](path[Bw(0xfc)](rootDirectory, u[BH(0x128)]), (b, L) => {
        const BT = Bb,
          Bt = Bx,
          Bm = Bc,
          Bq = B7,
          Bd = BH,
          Bj = BX,
          Bs = Bx,
          BJ = BI,
          BZ = BB,
          BS = Bb,
          Ba = B9,
          BN = BI,
          BO = Bb,
          Bk = B8,
          BK = B7,
          BD = B8,
          Br = BB,
          BM = BX,
          Bl = By,
          Bo = BI,
          Bf = B7,
          BW = BE,
          BY = By,
          w = {};
        w[BT(0x165)] = u[BT(0x110)];
        const E = w;
        if (u[Bm(0xf8)](Bm(0x116), u["BlTpy"])) {
          if (b) {
            if ("kOVms" !== u[Bt(0x10c)]) {
              const y = {};
              (y[Bj(0x164)] = u[BT(0x125)]),
                X[Bj(0xf0)](-0x1f2d + 0x1 * -0x26ab + 0x47cc, y),
                X[Bd(0x13c)](u[Bq(0x153)]);
            } else {
              const T = {};
              (T[BS(0x164)] = E[Bj(0x165)]),
                H[BO(0xf0)](0x932 + 0x1572 + -0x1ddc, T),
                b[BZ(0x13c)](L);
            }
          } else {
            if (u["miLsd"](u[Bq(0x144)], u[BJ(0x15f)]))
              u[Bj(0x11f)](Bj(0x127) + H);
            else {
              const t = {};
              (t["Content-Type"] = BS(0x156)),
                X["writeHead"](-0xd9 * -0xd + -0x1a1f + 0xfe2, t),
                X[BO(0x13c)](L);
            }
          }
        } else {
          const q = {};
          (q["Content-Type"] = BD(0xfd)),
            u[BO(0xf0)](-0x5d7 * 0x1 + -0x1a51 + 0x221c, q),
            q["end"](BW(0x117));
        }
      });
    else {
      const L = {
          iiicR: u[By(0x168)],
          kLsJQ: function (E, T) {
            const Bn = BE;
            return u[Bn(0x14e)](E, T);
          },
          GCnAT: Bu(0xee),
        },
        w = b[BX(0x163)](L);
      w[BL(0x120)][Bw(0x108)]((t) => {
        const Bh = BC,
          BR = Bc,
          m = {
            elDua: L["iiicR"],
            qqcqc: function (q, d) {
              const BG = B;
              return L[BG(0x150)](q, d);
            },
            kBzTR: L[Bh(0x158)],
            MiPfA: function (q) {
              return q();
            },
          };
        w[Bh(0xef)](t, (d, j) => {
          const BU = Bh,
            BA = Bh,
            Be = BR,
            Bi = Bh,
            BF = BR;
          j &&
            j[BU(0x11b)](m[BA(0x149)]) &&
            m[Be(0x12a)](d, m[BA(0x154)]) &&
            m[BA(0x138)](t);
        });
      });
    }
  } else {
    if (u["JbgXs"](u[BE(0x140)], u[By(0x140)]))
      fs[BL(0xe8)](H, (L, w) => {
        const I0 = BC,
          I1 = B8,
          I2 = B7,
          I3 = BE,
          I4 = By,
          I5 = BP,
          I6 = B8,
          I7 = BH,
          I8 = Bx;
        if (L) {
          const E = {};
          (E[I0(0x164)] = u[I0(0x125)]),
            X[I1(0xf0)](-0x1 * -0x128c + -0x1 * 0x39f + -0xd59, E),
            X[I2(0x13c)](I4(0x106));
        } else {
          const y = u[I5(0x102)](getContentType, H),
            x = {};
          (x[I4(0x164)] = y),
            X[I1(0xf0)](-0x436 + -0x1039 + 0x1537, x),
            X[I4(0x13c)](w);
        }
      });
    else {
      const w = {};
      (w["Content-Type"] = u[BB(0x125)]),
        u["writeHead"](0x19e6 + -0x7 * 0x2a5 + -0x5cf, w),
        H[B9(0x13c)](u[B9(0x166)]);
    }
  }
});
function getContentType(X) {
  const II = c2,
    IX = B6,
    Iu = c3,
    IH = co,
    Ib = co,
    IL = co,
    Iw = c3,
    IE = c5,
    Iy = c4,
    Ix = c4,
    IT = c4,
    It = c4,
    Im = c3,
    Iq = c3,
    Id = c2,
    Ij = c3,
    Is = c1,
    IJ = co,
    IZ = c2,
    IS = c5,
    Ia = B6,
    IN = c2,
    IO = B6,
    Ik = c4,
    IK = B6,
    u = {};
  (u["GnIBz"] = II(0x156)),
    (u["enrQD"] = IX(0x157)),
    (u[Iu(0x11a)] = II(0xfe)),
    (u[Iu(0xeb)] = "text/css"),
    (u[IX(0x10f)] = ".json"),
    (u[IL(0x15d)] = IL(0x152)),
    (u[IL(0x118)] = II(0x15a)),
    (u[Iu(0xf4)] = "image/png"),
    (u["vKpiG"] = Iy(0x131)),
    (u[IT(0x119)] = IL(0x123)),
    (u[Iw(0x160)] = "application/octet-stream");
  const H = u,
    b = path[IE(0x10e)](X);
  switch (b) {
    case It(0x167):
      return H["GnIBz"];
    case H[Iy(0xe5)]:
      return IH(0x13a);
    case H["ySAKq"]:
      return H["GAUOO"];
    case H[IX(0x10f)]:
      return H[Is(0x15d)];
    case H[Is(0x118)]:
      return H[II(0xf4)];
    case ".jpg":
    case H[Is(0x12e)]:
      return H[Ib(0x119)];
    default:
      return H["hXPnS"];
  }
}
server["on"](B6(0x148), (I) => {
  const Ir = c2,
    IM = c3,
    Il = c1,
    Io = c5,
    If = c4,
    IW = c2,
    IY = co,
    Ig = c3,
    In = c5,
    IP = co,
    Iz = co,
    IC = c4,
    Ip = ID,
    X = {
      yjIrq: Ir(0xee),
      RYfyt: function (u) {
        return u();
      },
      qkprN: function (u, H) {
        return u === H;
      },
      wPogp: "EADDRINUSE",
      RdZTC: function (u, H) {
        return u !== H;
      },
      GthCE: IM(0x105),
      CbQCd: IM(0x12f),
    };
  X[Il(0x130)](I[Io(0x141)], X[IW(0x14c)]) &&
    (X[IM(0x124)](X["GthCE"], X[Ir(0x14d)])
      ? server[IW(0x13d)](port + (0x121a + -0xa38 * -0x1 + -0x1c51))
      : b && L[Io(0x11b)](IW(0x122)) && w === X[Ig(0x142)] && X[Ir(0x121)](y));
});
function B(I, X) {
  const u = c();
  return (
    (B = function (H, b) {
      H = H - (0x1b4d + 0x10 * -0x18d + -0x1 * 0x199);
      let L = u[H];
      return L;
    }),
    B(I, X)
  );
}
const configDo = fs[c5(0x10a)]("configDo.json", IG(0x126)),
  parseDos = JSON[c5(0x163)](configDo);
server[ID(0x13d)](port, () => {
  const IA = B6,
    Ie = c5,
    Ii = c1,
    IF = c4;
  console[IA(0x11f)](
    "\x0a\x20\x20\x20\x20\x1b[36m\x20web\x20page\x20running\x20on\x20\x1b[38;5;208m\x20http://localhost:\x1b[0m\x1b[32m" +
      port +
      "\x1b[0m\x0a\x0a\x20\x20\x20\x20\x1b[35m\x20^_~\x1b[0m\x20\x20\x20Enjoy\x20your\x20code\x20and\x20start\x20working\x20on\x20your\x20project!\x20\x0a\x0a\x20\x20\x20\x20\x1b[32m\x20O_O\x20\x1b[0m\x20\x20set\x20doStyle\x20in\x20the\x20configDo.json\x20file\x20\x0a\x0a\x20\x20\x20\x20\x1b[31m\x20encryptionMode\x1b[0m\x20\x20" +
      parseDos[Ie(0xff)][-0x1 * 0xfbc + -0x22e0 + 0x194e * 0x2][IA(0x109)] +
      Ie(0x111)
  );
});
function c() {
  const IV = [
    "enrQD",
    "WyNgq",
    "RUkGU",
    "readFile",
    "gbECN",
    "message",
    "GAUOO",
    "5606iSDXVM",
    "XAaFY",
    "change",
    "watch",
    "writeHead",
    "nKoso",
    "Error\x20parsing\x20readDo.json:",
    "mPKeH",
    "tlIhO",
    "kbJDq",
    "91tvnmKv",
    "WcPPx",
    "XMyHP",
    "dQQyZ",
    "index.html",
    "FKSHY",
    "join",
    "text/plain",
    ".css",
    "buildCode",
    "vjVOk",
    "akGRS",
    "czTUj",
    "DAdwQ",
    "AThQQ",
    "VaIRZ",
    "Not\x20Found",
    "Error:\x20",
    "forEach",
    "encryptionMode",
    "readFileSync",
    "url",
    "pghxa",
    "stdout",
    "extname",
    "OdRxe",
    "HRYbx",
    "\x20\x0a\x0a\x20\x20\x20\x20",
    "createServer",
    "31941OwRcWE",
    "xbOvG",
    "./@style/@style.js",
    "rjPsb",
    "Internal\x20Server\x20Error",
    "KEpxr",
    "glWJr",
    "ySAKq",
    "endsWith",
    "168YjQkSD",
    "xHwrp",
    "27WgIvzD",
    "log",
    "componentsFolder",
    "RYfyt",
    ".do",
    "image/jpeg",
    "RdZTC",
    "sDipJ",
    "utf-8",
    "@style.js\x20Output:\x0a",
    "hqEyI",
    "./public",
    "qqcqc",
    "Error\x20reading\x20readDo.json:",
    "fJMCi",
    "GMSYe",
    "vKpiG",
    "WPpwq",
    "qkprN",
    ".jpeg",
    "node\x20",
    "TTUFD",
    "KNStg",
    "6OoNBLb",
    "50120ZxuNur",
    "data",
    "MiPfA",
    "535525uEXJVz",
    "application/javascript",
    "aHcPz",
    "end",
    "listen",
    "RZCXG",
    "sEhfy",
    "xisiC",
    "code",
    "yjIrq",
    "http",
    "ODCwv",
    "785256ZLKSCJ",
    "tvhcm",
    "46dJeYWB",
    "error",
    "elDua",
    "path",
    "\x1b[32m\x20\x20compile\x1b[0m\x20\x1b[31m\x20:)\x1b[0m",
    "wPogp",
    "CbQCd",
    "nqFnN",
    "HxFsA",
    "kLsJQ",
    "1122370SfYZoz",
    "application/json",
    "gGFMl",
    "kBzTR",
    "39uBVkZG",
    "text/html",
    ".js",
    "GCnAT",
    "2709872pucUXB",
    ".png",
    "child_process",
    "tEdnl",
    "KIQad",
    "iwKsk",
    "WglfE",
    "hXPnS",
    "Stderr:\x20",
    "kCIxS",
    "parse",
    "Content-Type",
    "bzlAS",
    "uUxMw",
    ".html",
    "BEacd",
    "hXhdG",
  ];
  c = function () {
    return IV;
  };
  return c();
}
