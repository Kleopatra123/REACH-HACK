// Automatically generated with Reach 0.1.10 (9f925e05)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (9f925e05)';
export const _backendVersion = 14;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0],
      3: [ctc0, ctc1, ctc0, ctc2],
      4: [ctc0, ctc1, ctc0, ctc2, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Player1(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player1 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player1 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const v137 = stdlib.protect(ctc0, interact.wager, 'for Player1\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v137],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:57:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v137, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v141], secs: v143, time: v142, didSend: v30, from: v140 } = txn1;
      
      sim_r.txns.push({
        amt: v141,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v141], secs: v143, time: v142, didSend: v30, from: v140 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v150, time: v149, didSend: v39, from: v148 } = txn2;
  ;
  const v155 = stdlib.protect(ctc0, await interact.getGuess(), {
    at: './index.rsh:69:43:application',
    fs: ['at ./index.rsh:68:15:application call to [unknown function] (defined at: ./index.rsh:68:19:function exp)'],
    msg: 'getGuess',
    who: 'Player1'
    });
  const v156 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:53:31:application',
    fs: ['at ./index.rsh:71:58:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:68:15:application call to [unknown function] (defined at: ./index.rsh:68:19:function exp)'],
    msg: 'random',
    who: 'Player1'
    });
  const v157 = stdlib.digest(ctc1, [v156, v155]);
  
  const txn3 = await (ctc.sendrecv({
    args: [v140, v141, v148, v157],
    evt_cnt: 1,
    funcNum: 2,
    lct: v149,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:74:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v160], secs: v162, time: v161, didSend: v53, from: v159 } = txn3;
      
      ;
      const v163 = stdlib.addressEq(v140, v159);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc3, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v160], secs: v162, time: v161, didSend: v53, from: v159 } = txn3;
  ;
  const v163 = stdlib.addressEq(v140, v159);
  stdlib.assert(v163, {
    at: './index.rsh:74:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Player1'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v168], secs: v170, time: v169, didSend: v63, from: v167 } = txn4;
  ;
  const v171 = stdlib.addressEq(v148, v167);
  stdlib.assert(v171, {
    at: './index.rsh:83:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Player1'
    });
  const txn5 = await (ctc.sendrecv({
    args: [v140, v141, v148, v160, v168, v156, v155],
    evt_cnt: 2,
    funcNum: 4,
    lct: v169,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:92:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v175, v176], secs: v178, time: v177, didSend: v73, from: v174 } = txn5;
      
      ;
      const v179 = stdlib.addressEq(v140, v174);
      ;
      const v180 = stdlib.digest(ctc1, [v175, v176]);
      const v181 = stdlib.digestEq(v160, v180);
      ;
      let v182;
      const v183 = stdlib.eq(v176, stdlib.checkedBigNumberify('./index.rsh:5:24:decimal', stdlib.UInt_max, '1'));
      const v184 = stdlib.eq(v168, stdlib.checkedBigNumberify('./index.rsh:5:44:decimal', stdlib.UInt_max, '3'));
      const v185 = v183 ? v184 : false;
      if (v185) {
        v182 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
        }
      else {
        const v186 = stdlib.eq(v176, stdlib.checkedBigNumberify('./index.rsh:7:29:decimal', stdlib.UInt_max, '3'));
        const v187 = stdlib.eq(v168, stdlib.checkedBigNumberify('./index.rsh:7:49:decimal', stdlib.UInt_max, '2'));
        const v188 = v186 ? v187 : false;
        if (v188) {
          v182 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
          }
        else {
          const v191 = v186 ? v184 : false;
          if (v191) {
            v182 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3');
            }
          else {
            v182 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          }
        }
      const v192 = stdlib.eq(v182, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      if (v192) {
        sim_r.txns.push({
          amt: v141,
          kind: 'from',
          to: v140,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          amt: v141,
          kind: 'from',
          to: v148,
          tok: undefined /* Nothing */
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      else {
        const v210 = stdlib.eq(v182, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        if (v210) {
          const v211 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:21:18:decimal', stdlib.UInt_max, '2'), v141);
          sim_r.txns.push({
            amt: v211,
            kind: 'from',
            to: v140,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v225 = stdlib.eq(v182, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v225) {
            const v226 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:24:18:decimal', stdlib.UInt_max, '2'), v141);
            sim_r.txns.push({
              amt: v226,
              kind: 'from',
              to: v148,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v240 = stdlib.eq(v182, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
            if (v240) {
              sim_r.txns.push({
                amt: v141,
                kind: 'from',
                to: v140,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: v141,
                kind: 'from',
                to: v148,
                tok: undefined /* Nothing */
                });
              
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc3, ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v175, v176], secs: v178, time: v177, didSend: v73, from: v174 } = txn5;
  ;
  const v179 = stdlib.addressEq(v140, v174);
  stdlib.assert(v179, {
    at: './index.rsh:92:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Player1'
    });
  const v180 = stdlib.digest(ctc1, [v175, v176]);
  const v181 = stdlib.digestEq(v160, v180);
  stdlib.assert(v181, {
    at: 'reach standard library:58:17:application',
    fs: ['at ./index.rsh:95:18:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
    msg: null,
    who: 'Player1'
    });
  let v182;
  const v183 = stdlib.eq(v176, stdlib.checkedBigNumberify('./index.rsh:5:24:decimal', stdlib.UInt_max, '1'));
  const v184 = stdlib.eq(v168, stdlib.checkedBigNumberify('./index.rsh:5:44:decimal', stdlib.UInt_max, '3'));
  const v185 = v183 ? v184 : false;
  if (v185) {
    v182 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
    }
  else {
    const v186 = stdlib.eq(v176, stdlib.checkedBigNumberify('./index.rsh:7:29:decimal', stdlib.UInt_max, '3'));
    const v187 = stdlib.eq(v168, stdlib.checkedBigNumberify('./index.rsh:7:49:decimal', stdlib.UInt_max, '2'));
    const v188 = v186 ? v187 : false;
    if (v188) {
      v182 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
      }
    else {
      const v191 = v186 ? v184 : false;
      if (v191) {
        v182 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3');
        }
      else {
        v182 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        }
      }
    }
  const v192 = stdlib.eq(v182, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  if (v192) {
    ;
    ;
    stdlib.protect(ctc0, await interact.getResult(), {
      at: './index.rsh:100:49:application',
      fs: ['at ./index.rsh:99:15:application call to [unknown function] (defined at: ./index.rsh:99:19:function exp)'],
      msg: 'getResult',
      who: 'Player1'
      });
    
    return;
    }
  else {
    const v210 = stdlib.eq(v182, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    if (v210) {
      const v211 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:21:18:decimal', stdlib.UInt_max, '2'), v141);
      ;
      stdlib.protect(ctc0, await interact.getResult(), {
        at: './index.rsh:100:49:application',
        fs: ['at ./index.rsh:99:15:application call to [unknown function] (defined at: ./index.rsh:99:19:function exp)'],
        msg: 'getResult',
        who: 'Player1'
        });
      
      return;
      }
    else {
      const v225 = stdlib.eq(v182, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v225) {
        const v226 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:24:18:decimal', stdlib.UInt_max, '2'), v141);
        ;
        stdlib.protect(ctc0, await interact.getResult(), {
          at: './index.rsh:100:49:application',
          fs: ['at ./index.rsh:99:15:application call to [unknown function] (defined at: ./index.rsh:99:19:function exp)'],
          msg: 'getResult',
          who: 'Player1'
          });
        
        return;
        }
      else {
        const v240 = stdlib.eq(v182, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
        if (v240) {
          ;
          ;
          stdlib.protect(ctc0, await interact.getResult(), {
            at: './index.rsh:100:49:application',
            fs: ['at ./index.rsh:99:15:application call to [unknown function] (defined at: ./index.rsh:99:19:function exp)'],
            msg: 'getResult',
            who: 'Player1'
            });
          
          return;
          }
        else {
          stdlib.protect(ctc0, await interact.getResult(), {
            at: './index.rsh:100:49:application',
            fs: ['at ./index.rsh:99:15:application call to [unknown function] (defined at: ./index.rsh:99:19:function exp)'],
            msg: 'getResult',
            who: 'Player1'
            });
          
          return;
          }}}}
  
  
  
  
  
  
  
  
  
  };
export async function Player2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player2 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v141], secs: v143, time: v142, didSend: v30, from: v140 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v141), {
    at: './index.rsh:62:25:application',
    fs: ['at ./index.rsh:61:17:application call to [unknown function] (defined at: ./index.rsh:61:21:function exp)'],
    msg: 'acceptWager',
    who: 'Player2'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v140, v141],
    evt_cnt: 0,
    funcNum: 1,
    lct: v142,
    onlyIf: true,
    out_tys: [],
    pay: [v141, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v150, time: v149, didSend: v39, from: v148 } = txn2;
      
      sim_r.txns.push({
        amt: v141,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v150, time: v149, didSend: v39, from: v148 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v160], secs: v162, time: v161, didSend: v53, from: v159 } = txn3;
  ;
  const v163 = stdlib.addressEq(v140, v159);
  stdlib.assert(v163, {
    at: './index.rsh:74:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Player2'
    });
  const v166 = stdlib.protect(ctc0, await interact.getGuess(), {
    at: './index.rsh:80:53:application',
    fs: ['at ./index.rsh:79:15:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)'],
    msg: 'getGuess',
    who: 'Player2'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v140, v141, v148, v160, v166],
    evt_cnt: 1,
    funcNum: 3,
    lct: v161,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:83:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v168], secs: v170, time: v169, didSend: v63, from: v167 } = txn4;
      
      ;
      const v171 = stdlib.addressEq(v148, v167);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc4, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v168], secs: v170, time: v169, didSend: v63, from: v167 } = txn4;
  ;
  const v171 = stdlib.addressEq(v148, v167);
  stdlib.assert(v171, {
    at: './index.rsh:83:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Player2'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 4,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v175, v176], secs: v178, time: v177, didSend: v73, from: v174 } = txn5;
  ;
  const v179 = stdlib.addressEq(v140, v174);
  stdlib.assert(v179, {
    at: './index.rsh:92:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Player2'
    });
  const v180 = stdlib.digest(ctc3, [v175, v176]);
  const v181 = stdlib.digestEq(v160, v180);
  stdlib.assert(v181, {
    at: 'reach standard library:58:17:application',
    fs: ['at ./index.rsh:95:18:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
    msg: null,
    who: 'Player2'
    });
  let v182;
  const v183 = stdlib.eq(v176, stdlib.checkedBigNumberify('./index.rsh:5:24:decimal', stdlib.UInt_max, '1'));
  const v184 = stdlib.eq(v168, stdlib.checkedBigNumberify('./index.rsh:5:44:decimal', stdlib.UInt_max, '3'));
  const v185 = v183 ? v184 : false;
  if (v185) {
    v182 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
    }
  else {
    const v186 = stdlib.eq(v176, stdlib.checkedBigNumberify('./index.rsh:7:29:decimal', stdlib.UInt_max, '3'));
    const v187 = stdlib.eq(v168, stdlib.checkedBigNumberify('./index.rsh:7:49:decimal', stdlib.UInt_max, '2'));
    const v188 = v186 ? v187 : false;
    if (v188) {
      v182 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
      }
    else {
      const v191 = v186 ? v184 : false;
      if (v191) {
        v182 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3');
        }
      else {
        v182 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        }
      }
    }
  const v192 = stdlib.eq(v182, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  if (v192) {
    ;
    ;
    stdlib.protect(ctc0, await interact.getResult(), {
      at: './index.rsh:105:49:application',
      fs: ['at ./index.rsh:104:15:application call to [unknown function] (defined at: ./index.rsh:104:19:function exp)'],
      msg: 'getResult',
      who: 'Player2'
      });
    
    return;
    }
  else {
    const v210 = stdlib.eq(v182, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    if (v210) {
      const v211 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:21:18:decimal', stdlib.UInt_max, '2'), v141);
      ;
      stdlib.protect(ctc0, await interact.getResult(), {
        at: './index.rsh:105:49:application',
        fs: ['at ./index.rsh:104:15:application call to [unknown function] (defined at: ./index.rsh:104:19:function exp)'],
        msg: 'getResult',
        who: 'Player2'
        });
      
      return;
      }
    else {
      const v225 = stdlib.eq(v182, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v225) {
        const v226 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:24:18:decimal', stdlib.UInt_max, '2'), v141);
        ;
        stdlib.protect(ctc0, await interact.getResult(), {
          at: './index.rsh:105:49:application',
          fs: ['at ./index.rsh:104:15:application call to [unknown function] (defined at: ./index.rsh:104:19:function exp)'],
          msg: 'getResult',
          who: 'Player2'
          });
        
        return;
        }
      else {
        const v240 = stdlib.eq(v182, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
        if (v240) {
          ;
          ;
          stdlib.protect(ctc0, await interact.getResult(), {
            at: './index.rsh:105:49:application',
            fs: ['at ./index.rsh:104:15:application call to [unknown function] (defined at: ./index.rsh:104:19:function exp)'],
            msg: 'getResult',
            who: 'Player2'
            });
          
          return;
          }
        else {
          stdlib.protect(ctc0, await interact.getResult(), {
            at: './index.rsh:105:49:application',
            fs: ['at ./index.rsh:104:15:application call to [unknown function] (defined at: ./index.rsh:104:19:function exp)'],
            msg: 'getResult',
            who: 'Player2'
            });
          
          return;
          }}}}
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAHAAECAwQgCCYCAQAAIjUAMRhBAwspZEkiWzUBIQZbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSQMQAH5SSUMQAGZSSEEDEABLCEEEkQhBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEFWzX+VyggNf2BaFs1/Ek1BUkiWzX7IQZbNfqABBBGrXM0+xZQNPoWULA0/zEAEkQ0A1dIIDT7FjT6FlABEkQ0/CUSNfg0+iMSNPgQQQAGJDX5QgAmNPolEkk19zT8JBIQQQAGIjX5QgARNPc0+BBBAAYlNflCAAMjNfk0+SMSQQAjsSKyATT+sggjshA0/7IHs7EisgE0/rIII7IQNP2yB7NCAbk0+SQSQQAVsSKyASQ0/guyCCOyEDT/sgezQgGdNPkiEkEAFbEisgEkNP4LsggjshA0/bIHs0IBgTT5JRJBACOxIrIBNP6yCCOyEDT/sgezsSKyATT+sggjshA0/bIHs0IBV0IBVEglNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQVbNf5XKCA1/VdIIDX8STUFFzX7gATUDGzWNPsWULA0/TEAEkQ0/zT+FlA0/VA0/FA0+xZQKEsBVwBwZ0ghBDUBMgY1AkIBCkgkNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQVbNf5XKCA1/Uk1BTX8gASZv+WaNPxQsDT/MQASRDT/NP4WUDT9UDT8UChLAVcAaGdIJTUBMgY1AkIAsEkjDEAASEgjNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hBVs1/oAEmouRdLA0/ogAujT/NP4WUDEAUChLAVcASGdIJDUBMgY1AkIAYkgiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULCBoI0GiAB2NP+IAHExADT/FlAoSwFXAChnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 112,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v141",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v141",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v160",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v168",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v175",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v176",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v160",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v168",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v175",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v176",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620011ff380380620011ff8339810160408190526200002691620001bf565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1602081015151620000899034146007620000ef565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e6926002929091019062000119565b5050506200029e565b81620001155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001279062000261565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b6000818303604080821215620001d457600080fd5b80518082016001600160401b0380821183831017156200020457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021e57600080fd5b8351945060208501915084821081831117156200024b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b610f5180620002ae6000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100c1578063ab53f2c6146100d6578063ebdbfdcc146100f9578063f4cedab01461010c57005b80631e93b0f1146100775780632c10a1591461009b57806345f70396146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610bc5565b61011f565b6100756100bc366004610bc5565b6102c0565b3480156100cd57600080fd5b50600154610088565b3480156100e257600080fd5b506100eb61046a565b604051610092929190610be8565b610075610107366004610c45565b610507565b61007561011a366004610bc5565b6108ba565b61012f6001600054146009610aae565b6101498135158061014257506001548235145b600a610aae565b60008080556002805461015b90610c57565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610c57565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610ca8565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161021f929190610d0d565b60405180910390a1610238816020015134146008610aae565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151845233835260029095554360015587519384019490945290519582019590955293511690830152906080015b604051602081830303815290604052600290805190602001906102ba929190610ad7565b50505050565b6102d0600260005414600d610aae565b6102ea813515806102e357506001548235145b600e610aae565b6000808055600280546102fc90610c57565b80601f016020809104026020016040519081016040528092919081815260200182805461032890610c57565b80156103755780601f1061034a57610100808354040283529160200191610375565b820191906000526020600020905b81548152906001019060200180831161035857829003601f168201915b505050505080602001905181019061038d9190610d4a565b90507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b833836040516103c0929190610dbd565b60405180910390a16103d43415600b610aae565b80516103ec906001600160a01b03163314600c610aae565b604080516080808201835260008083526020808401828152848601838152606080870185815289516001600160a01b03908116808a528b87015186528b8b0151821685528c8701358352600390975543600155895195860196909652925197840197909752519092169481019490945251908301529060a001610296565b60006060600054600280805461047f90610c57565b80601f01602080910402602001604051908101604052809291908181526020018280546104ab90610c57565b80156104f85780601f106104cd576101008083540402835291602001916104f8565b820191906000526020600020905b8154815290600101906020018083116104db57829003601f168201915b50505050509050915091509091565b6105176004600054146016610aae565b6105318135158061052a57506001548235145b6017610aae565b60008080556002805461054390610c57565b80601f016020809104026020016040519081016040528092919081815260200182805461056f90610c57565b80156105bc5780601f10610591576101008083540402835291602001916105bc565b820191906000526020600020905b81548152906001019060200180831161059f57829003601f168201915b50505050508060200190518101906105d49190610de4565b604080516060808201835260008083526020808401829052838501919091528351338152873581830152908701358185015292860135908301529192507fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a9060800160405180910390a161064a34156013610aae565b8151610662906001600160a01b031633146014610aae565b604080516106ae9161068891602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360600151146015610aae565b6080820151600314602082015260408301356001146106ce5760006106d4565b80602001515b156106e2576002815261073c565b6040808401356003149082018190526106fc576000610705565b60028260800151145b15610713576000815261073c565b8060400151610723576000610729565b80602001515b15610737576003815261073c565b600181525b8051600114156107e157815160208301516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610783573d6000803e3d6000fd5b5081604001516001600160a01b03166108fc83602001519081150290604051600060405180830381858888f193505050501580156107c5573d6000803e3d6000fd5b50600080805560018190556107dc90600290610b5b565b505050565b8051600214156108355781600001516001600160a01b03166108fc8360200151600261080d9190610e6e565b6040518115909202916000818181858888f193505050501580156107c5573d6000803e3d6000fd5b805161085d5781604001516001600160a01b03166108fc8360200151600261080d9190610e6e565b8051600314156108a457815160208301516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610783573d6000803e3d6000fd5b600080805560018190556107dc90600290610b5b565b6108ca6003600054146011610aae565b6108e4813515806108dd57506001548235145b6012610aae565b6000808055600280546108f690610c57565b80601f016020809104026020016040519081016040528092919081815260200182805461092290610c57565b801561096f5780601f106109445761010080835404028352916020019161096f565b820191906000526020600020905b81548152906001019060200180831161095257829003601f168201915b50505050508060200190518101906109879190610e9b565b90507f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc133836040516109ba929190610dbd565b60405180910390a16109ce3415600f610aae565b60408101516109e9906001600160a01b031633146010610aae565b610a2d6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015185168187019081526060808901518189019081528a8601356080808b01918252600460005543600155855197880198909852945193860193909352905190951694830194909452925191810191909152905160a082015260c001610296565b81610ad35760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054610ae390610c57565b90600052602060002090601f016020900481019282610b055760008555610b4b565b82601f10610b1e57805160ff1916838001178555610b4b565b82800160010185558215610b4b579182015b82811115610b4b578251825591602001919060010190610b30565b50610b57929150610b98565b5090565b508054610b6790610c57565b6000825580601f10610b77575050565b601f016020900490600052602060002090810190610b959190610b98565b50565b5b80821115610b575760008155600101610b99565b600060408284031215610bbf57600080fd5b50919050565b600060408284031215610bd757600080fd5b610be18383610bad565b9392505050565b82815260006020604081840152835180604085015260005b81811015610c1c57858101830151858201606001528201610c00565b81811115610c2e576000606083870101525b50601f01601f191692909201606001949350505050565b600060608284031215610bbf57600080fd5b600181811c90821680610c6b57607f821691505b60208210811415610bbf57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610ca357600080fd5b919050565b600060408284031215610cba57600080fd5b6040516040810181811067ffffffffffffffff82111715610ceb57634e487b7160e01b600052604160045260246000fd5b604052610cf783610c8c565b8152602083015160208201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610d3b57600080fd5b80604085015250509392505050565b600060608284031215610d5c57600080fd5b6040516060810181811067ffffffffffffffff82111715610d8d57634e487b7160e01b600052604160045260246000fd5b604052610d9983610c8c565b815260208301516020820152610db160408401610c8c565b60408201529392505050565b6001600160a01b038316815260608101610be1602083018480358252602090810135910152565b600060a08284031215610df657600080fd5b60405160a0810181811067ffffffffffffffff82111715610e2757634e487b7160e01b600052604160045260246000fd5b604052610e3383610c8c565b815260208301516020820152610e4b60408401610c8c565b604082015260608301516060820152608083015160808201528091505092915050565b6000816000190483118215151615610e9657634e487b7160e01b600052601160045260246000fd5b500290565b600060808284031215610ead57600080fd5b6040516080810181811067ffffffffffffffff82111715610ede57634e487b7160e01b600052604160045260246000fd5b604052610eea83610c8c565b815260208301516020820152610f0260408401610c8c565b604082015260608301516060820152809150509291505056fea2646970667358221220c57ed2a990eeb02785cc2d879744c7c2dfc79a6ef28dfede5148cc4e00f232da64736f6c634300080c0033`,
  BytecodeLen: 4607,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:59:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:67:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:76:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:86:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:114:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:114:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:114:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:114:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:114:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Player1": Player1,
  "Player2": Player2
  };
export const _APIs = {
  };
