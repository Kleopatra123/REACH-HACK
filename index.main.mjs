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
      1: [ctc0, ctc1, ctc1, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1],
      9: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1],
      11: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1]
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
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v303 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v304 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v307 = stdlib.protect(ctc0, await interact.getResult(), {
    at: './index.rsh:83:53:application',
    fs: ['at ./index.rsh:80:13:application call to [unknown function] (defined at: ./index.rsh:80:17:function exp)'],
    msg: 'getResult',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v304, v303, v307],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:87:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [v304, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v309, v310, v311], secs: v313, time: v312, didSend: v33, from: v308 } = txn1;
      
      sim_r.txns.push({
        amt: v309,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v322 = stdlib.add(v312, v310);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v309, v310, v311], secs: v313, time: v312, didSend: v33, from: v308 } = txn1;
  ;
  const v322 = stdlib.add(v312, v310);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v322],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v308, v309, v310, v311, v322],
      evt_cnt: 0,
      funcNum: 2,
      lct: v312,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v515, time: v514, didSend: v269, from: v513 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v309,
          kind: 'from',
          to: v308,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v515, time: v514, didSend: v269, from: v513 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:76:29:application',
      fs: ['at ./index.rsh:75:9:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:28:function exp)', 'at ./index.rsh:95:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v328, time: v327, didSend: v42, from: v326 } = txn2;
    const v330 = stdlib.add(v309, v309);
    ;
    let v331 = stdlib.checkedBigNumberify('./index.rsh:97:35:decimal', stdlib.UInt_max, '0');
    let v332 = stdlib.checkedBigNumberify('./index.rsh:97:37:decimal', stdlib.UInt_max, '0');
    let v333 = stdlib.checkedBigNumberify('./index.rsh:97:33:decimal', stdlib.UInt_max, '3');
    let v334 = v327;
    let v341 = v330;
    
    while (await (async () => {
      const v345 = stdlib.eq(v331, v311);
      const v347 = stdlib.eq(v332, v311);
      const v348 = v347 ? false : true;
      const v349 = v345 ? false : v348;
      const v350 = stdlib.gt(v333, stdlib.checkedBigNumberify('./index.rsh:100:66:decimal', stdlib.UInt_max, '0'));
      const v351 = v349 ? v350 : false;
      
      return v351;})()) {
      const v358 = stdlib.add(v334, v310);
      const v362 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:104:42:application',
        fs: ['at ./index.rsh:103:15:application call to [unknown function] (defined at: ./index.rsh:103:19:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      const v363 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:53:31:application',
        fs: ['at ./index.rsh:106:56:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:103:15:application call to [unknown function] (defined at: ./index.rsh:103:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v364 = stdlib.digest(ctc1, [v363, v362]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v308, v309, v310, v311, v326, v333, v341, v358, v364],
        evt_cnt: 1,
        funcNum: 4,
        lct: v334,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:111:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v367], secs: v369, time: v368, didSend: v73, from: v366 } = txn3;
          
          ;
          const v370 = stdlib.addressEq(v308, v366);
          ;
          const v377 = stdlib.add(v368, v310);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v358],
        tys: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v308, v309, v310, v311, v326, v333, v341, v358],
          evt_cnt: 0,
          funcNum: 5,
          lct: v334,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v444, time: v443, didSend: v185, from: v442 } = txn4;
            
            ;
            const v445 = stdlib.addressEq(v308, v442);
            const v446 = stdlib.addressEq(v326, v442);
            const v447 = v445 ? true : v446;
            ;
            sim_r.txns.push({
              amt: v341,
              kind: 'from',
              to: v326,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v444, time: v443, didSend: v185, from: v442 } = txn4;
        ;
        const v445 = stdlib.addressEq(v308, v442);
        const v446 = stdlib.addressEq(v326, v442);
        const v447 = v445 ? true : v446;
        stdlib.assert(v447, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:112:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:76:29:application',
          fs: ['at ./index.rsh:75:9:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:28:function exp)', 'at ./index.rsh:112:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v367], secs: v369, time: v368, didSend: v73, from: v366 } = txn3;
        ;
        const v370 = stdlib.addressEq(v308, v366);
        stdlib.assert(v370, {
          at: './index.rsh:111:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v377 = stdlib.add(v368, v310);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc0],
          timeoutAt: ['time', v377],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v308, v309, v310, v311, v326, v333, v341, v367, v377],
            evt_cnt: 0,
            funcNum: 7,
            lct: v368,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v426, time: v425, didSend: v151, from: v424 } = txn5;
              
              ;
              const v427 = stdlib.addressEq(v308, v424);
              const v428 = stdlib.addressEq(v326, v424);
              const v429 = v427 ? true : v428;
              ;
              sim_r.txns.push({
                amt: v341,
                kind: 'from',
                to: v308,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v426, time: v425, didSend: v151, from: v424 } = txn5;
          ;
          const v427 = stdlib.addressEq(v308, v424);
          const v428 = stdlib.addressEq(v326, v424);
          const v429 = v427 ? true : v428;
          stdlib.assert(v429, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:121:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:76:29:application',
            fs: ['at ./index.rsh:75:9:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:28:function exp)', 'at ./index.rsh:121:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v383], secs: v385, time: v384, didSend: v83, from: v382 } = txn4;
          ;
          const v386 = stdlib.addressEq(v326, v382);
          stdlib.assert(v386, {
            at: './index.rsh:120:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v393 = stdlib.add(v384, v310);
          const txn5 = await (ctc.sendrecv({
            args: [v308, v309, v310, v311, v326, v333, v341, v367, v383, v393, v363, v362],
            evt_cnt: 2,
            funcNum: 8,
            lct: v384,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:128:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v398, v399], secs: v401, time: v400, didSend: v93, from: v397 } = txn5;
              
              ;
              const v402 = stdlib.addressEq(v308, v397);
              ;
              const v403 = stdlib.digest(ctc1, [v398, v399]);
              const v404 = stdlib.digestEq(v367, v403);
              ;
              const v405 = stdlib.sub(v333, stdlib.checkedBigNumberify('./index.rsh:133:36:decimal', stdlib.UInt_max, '1'));
              const cv331 = v399;
              const cv332 = v383;
              const cv333 = v405;
              const cv334 = v400;
              const cv341 = v341;
              
              await (async () => {
                const v331 = cv331;
                const v332 = cv332;
                const v333 = cv333;
                const v334 = cv334;
                const v341 = cv341;
                
                if (await (async () => {
                  const v345 = stdlib.eq(v331, v311);
                  const v347 = stdlib.eq(v332, v311);
                  const v348 = v347 ? false : true;
                  const v349 = v345 ? false : v348;
                  const v350 = stdlib.gt(v333, stdlib.checkedBigNumberify('./index.rsh:100:66:decimal', stdlib.UInt_max, '0'));
                  const v351 = v349 ? v350 : false;
                  
                  return v351;})()) {
                  const v358 = stdlib.add(v334, v310);
                  sim_r.isHalt = false;
                  }
                else {
                  let v460;
                  const v461 = stdlib.eq(v331, v311);
                  const v462 = stdlib.eq(v332, v311);
                  const v463 = v462 ? false : true;
                  const v464 = v461 ? v463 : false;
                  if (v464) {
                    v460 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                    }
                  else {
                    const v468 = v461 ? false : v462;
                    if (v468) {
                      v460 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                      }
                    else {
                      v460 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
                      }
                    }
                  const v472 = stdlib.eq(v460, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  if (v472) {
                    
                    sim_r.txns.push({
                      amt: v309,
                      kind: 'from',
                      to: v308,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      amt: v309,
                      kind: 'from',
                      to: v326,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    const v488 = stdlib.eq(v460, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                    if (v488) {
                      const v489 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:36:14:decimal', stdlib.UInt_max, '2'), v309);
                      sim_r.txns.push({
                        amt: v489,
                        kind: 'from',
                        to: v308,
                        tok: undefined /* Nothing */
                        });
                      
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      const v501 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:42:14:decimal', stdlib.UInt_max, '2'), v309);
                      sim_r.txns.push({
                        amt: v501,
                        kind: 'from',
                        to: v326,
                        tok: undefined /* Nothing */
                        });
                      
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}}})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v393],
            tys: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v308, v309, v310, v311, v326, v333, v341, v367, v383, v393],
              evt_cnt: 0,
              funcNum: 9,
              lct: v384,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v408, time: v407, didSend: v117, from: v406 } = txn6;
                
                ;
                const v409 = stdlib.addressEq(v308, v406);
                const v410 = stdlib.addressEq(v326, v406);
                const v411 = v409 ? true : v410;
                ;
                sim_r.txns.push({
                  amt: v341,
                  kind: 'from',
                  to: v326,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v408, time: v407, didSend: v117, from: v406 } = txn6;
            ;
            const v409 = stdlib.addressEq(v308, v406);
            const v410 = stdlib.addressEq(v326, v406);
            const v411 = v409 ? true : v410;
            stdlib.assert(v411, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:129:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:76:29:application',
              fs: ['at ./index.rsh:75:9:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:28:function exp)', 'at ./index.rsh:129:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v398, v399], secs: v401, time: v400, didSend: v93, from: v397 } = txn5;
            ;
            const v402 = stdlib.addressEq(v308, v397);
            stdlib.assert(v402, {
              at: './index.rsh:128:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v403 = stdlib.digest(ctc1, [v398, v399]);
            const v404 = stdlib.digestEq(v367, v403);
            stdlib.assert(v404, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:130:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v405 = stdlib.sub(v333, stdlib.checkedBigNumberify('./index.rsh:133:36:decimal', stdlib.UInt_max, '1'));
            const cv331 = v399;
            const cv332 = v383;
            const cv333 = v405;
            const cv334 = v400;
            const cv341 = v341;
            
            v331 = cv331;
            v332 = cv332;
            v333 = cv333;
            v334 = cv334;
            v341 = cv341;
            
            continue;}
          
          }
        
        }
      
      }
    let v460;
    const v461 = stdlib.eq(v331, v311);
    const v462 = stdlib.eq(v332, v311);
    const v463 = v462 ? false : true;
    const v464 = v461 ? v463 : false;
    if (v464) {
      v460 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      }
    else {
      const v468 = v461 ? false : v462;
      if (v468) {
        v460 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        }
      else {
        v460 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
        }
      }
    const v472 = stdlib.eq(v460, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v472) {
      stdlib.protect(ctc3, await interact.seeOutcome(v460), {
        at: './index.rsh:30:26:application',
        fs: ['at ./index.rsh:29:9:application call to [unknown function] (defined at: ./index.rsh:29:27:function exp)', 'at ./index.rsh:139:12:application call to "payWinner" (defined at: ./index.rsh:27:48:function exp)'],
        msg: 'seeOutcome',
        who: 'Alice'
        });
      
      ;
      ;
      return;
      }
    else {
      const v488 = stdlib.eq(v460, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      if (v488) {
        const v489 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:36:14:decimal', stdlib.UInt_max, '2'), v309);
        ;
        stdlib.protect(ctc3, await interact.seeOutcome(v460), {
          at: './index.rsh:38:26:application',
          fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:27:function exp)', 'at ./index.rsh:139:12:application call to "payWinner" (defined at: ./index.rsh:27:48:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        return;
        }
      else {
        const v501 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:42:14:decimal', stdlib.UInt_max, '2'), v309);
        ;
        stdlib.protect(ctc3, await interact.seeOutcome(v460), {
          at: './index.rsh:44:26:application',
          fs: ['at ./index.rsh:43:9:application call to [unknown function] (defined at: ./index.rsh:43:27:function exp)', 'at ./index.rsh:139:12:application call to "payWinner" (defined at: ./index.rsh:27:48:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        return;
        }}}
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v309, v310, v311], secs: v313, time: v312, didSend: v33, from: v308 } = txn1;
  ;
  const v322 = stdlib.add(v312, v310);
  stdlib.protect(ctc1, await interact.acceptWager(v309), {
    at: './index.rsh:92:25:application',
    fs: ['at ./index.rsh:91:11:application call to [unknown function] (defined at: ./index.rsh:91:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v308, v309, v310, v311, v322],
    evt_cnt: 0,
    funcNum: 1,
    lct: v312,
    onlyIf: true,
    out_tys: [],
    pay: [v309, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v328, time: v327, didSend: v42, from: v326 } = txn2;
      
      const v330 = stdlib.add(v309, v309);
      sim_r.txns.push({
        amt: v309,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v331 = stdlib.checkedBigNumberify('./index.rsh:97:35:decimal', stdlib.UInt_max, '0');
      const v332 = stdlib.checkedBigNumberify('./index.rsh:97:37:decimal', stdlib.UInt_max, '0');
      const v333 = stdlib.checkedBigNumberify('./index.rsh:97:33:decimal', stdlib.UInt_max, '3');
      const v334 = v327;
      const v341 = v330;
      
      if (await (async () => {
        const v345 = stdlib.eq(v331, v311);
        const v347 = stdlib.eq(v332, v311);
        const v348 = v347 ? false : true;
        const v349 = v345 ? false : v348;
        const v350 = stdlib.gt(v333, stdlib.checkedBigNumberify('./index.rsh:100:66:decimal', stdlib.UInt_max, '0'));
        const v351 = v349 ? v350 : false;
        
        return v351;})()) {
        const v358 = stdlib.add(v334, v310);
        sim_r.isHalt = false;
        }
      else {
        let v460;
        const v461 = stdlib.eq(v331, v311);
        const v462 = stdlib.eq(v332, v311);
        const v463 = v462 ? false : true;
        const v464 = v461 ? v463 : false;
        if (v464) {
          v460 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          }
        else {
          const v468 = v461 ? false : v462;
          if (v468) {
            v460 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
            }
          else {
            v460 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
            }
          }
        const v472 = stdlib.eq(v460, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v472) {
          
          sim_r.txns.push({
            amt: v309,
            kind: 'from',
            to: v308,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            amt: v309,
            kind: 'from',
            to: v326,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v488 = stdlib.eq(v460, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
          if (v488) {
            const v489 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:36:14:decimal', stdlib.UInt_max, '2'), v309);
            sim_r.txns.push({
              amt: v489,
              kind: 'from',
              to: v308,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v501 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:42:14:decimal', stdlib.UInt_max, '2'), v309);
            sim_r.txns.push({
              amt: v501,
              kind: 'from',
              to: v326,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v322],
    tys: [ctc4, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v308, v309, v310, v311, v322],
      evt_cnt: 0,
      funcNum: 2,
      lct: v312,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v515, time: v514, didSend: v269, from: v513 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v309,
          kind: 'from',
          to: v308,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v515, time: v514, didSend: v269, from: v513 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:76:29:application',
      fs: ['at ./index.rsh:75:9:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:28:function exp)', 'at ./index.rsh:95:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v328, time: v327, didSend: v42, from: v326 } = txn2;
    const v330 = stdlib.add(v309, v309);
    ;
    let v331 = stdlib.checkedBigNumberify('./index.rsh:97:35:decimal', stdlib.UInt_max, '0');
    let v332 = stdlib.checkedBigNumberify('./index.rsh:97:37:decimal', stdlib.UInt_max, '0');
    let v333 = stdlib.checkedBigNumberify('./index.rsh:97:33:decimal', stdlib.UInt_max, '3');
    let v334 = v327;
    let v341 = v330;
    
    while (await (async () => {
      const v345 = stdlib.eq(v331, v311);
      const v347 = stdlib.eq(v332, v311);
      const v348 = v347 ? false : true;
      const v349 = v345 ? false : v348;
      const v350 = stdlib.gt(v333, stdlib.checkedBigNumberify('./index.rsh:100:66:decimal', stdlib.UInt_max, '0'));
      const v351 = v349 ? v350 : false;
      
      return v351;})()) {
      const v358 = stdlib.add(v334, v310);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v358],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v308, v309, v310, v311, v326, v333, v341, v358],
          evt_cnt: 0,
          funcNum: 5,
          lct: v334,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v444, time: v443, didSend: v185, from: v442 } = txn4;
            
            ;
            const v445 = stdlib.addressEq(v308, v442);
            const v446 = stdlib.addressEq(v326, v442);
            const v447 = v445 ? true : v446;
            ;
            sim_r.txns.push({
              amt: v341,
              kind: 'from',
              to: v326,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v444, time: v443, didSend: v185, from: v442 } = txn4;
        ;
        const v445 = stdlib.addressEq(v308, v442);
        const v446 = stdlib.addressEq(v326, v442);
        const v447 = v445 ? true : v446;
        stdlib.assert(v447, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:112:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:76:29:application',
          fs: ['at ./index.rsh:75:9:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:28:function exp)', 'at ./index.rsh:112:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v367], secs: v369, time: v368, didSend: v73, from: v366 } = txn3;
        ;
        const v370 = stdlib.addressEq(v308, v366);
        stdlib.assert(v370, {
          at: './index.rsh:111:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v377 = stdlib.add(v368, v310);
        const v381 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:117:50:application',
          fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:17:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v308, v309, v310, v311, v326, v333, v341, v367, v377, v381],
          evt_cnt: 1,
          funcNum: 6,
          lct: v368,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:120:9:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v383], secs: v385, time: v384, didSend: v83, from: v382 } = txn4;
            
            ;
            const v386 = stdlib.addressEq(v326, v382);
            ;
            const v393 = stdlib.add(v384, v310);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v377],
          tys: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v308, v309, v310, v311, v326, v333, v341, v367, v377],
            evt_cnt: 0,
            funcNum: 7,
            lct: v368,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v426, time: v425, didSend: v151, from: v424 } = txn5;
              
              ;
              const v427 = stdlib.addressEq(v308, v424);
              const v428 = stdlib.addressEq(v326, v424);
              const v429 = v427 ? true : v428;
              ;
              sim_r.txns.push({
                amt: v341,
                kind: 'from',
                to: v308,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v426, time: v425, didSend: v151, from: v424 } = txn5;
          ;
          const v427 = stdlib.addressEq(v308, v424);
          const v428 = stdlib.addressEq(v326, v424);
          const v429 = v427 ? true : v428;
          stdlib.assert(v429, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:121:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:76:29:application',
            fs: ['at ./index.rsh:75:9:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:28:function exp)', 'at ./index.rsh:121:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v383], secs: v385, time: v384, didSend: v83, from: v382 } = txn4;
          ;
          const v386 = stdlib.addressEq(v326, v382);
          stdlib.assert(v386, {
            at: './index.rsh:120:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v393 = stdlib.add(v384, v310);
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 8,
            out_tys: [ctc0, ctc0],
            timeoutAt: ['time', v393],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v308, v309, v310, v311, v326, v333, v341, v367, v383, v393],
              evt_cnt: 0,
              funcNum: 9,
              lct: v384,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v408, time: v407, didSend: v117, from: v406 } = txn6;
                
                ;
                const v409 = stdlib.addressEq(v308, v406);
                const v410 = stdlib.addressEq(v326, v406);
                const v411 = v409 ? true : v410;
                ;
                sim_r.txns.push({
                  amt: v341,
                  kind: 'from',
                  to: v326,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v408, time: v407, didSend: v117, from: v406 } = txn6;
            ;
            const v409 = stdlib.addressEq(v308, v406);
            const v410 = stdlib.addressEq(v326, v406);
            const v411 = v409 ? true : v410;
            stdlib.assert(v411, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:129:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:76:29:application',
              fs: ['at ./index.rsh:75:9:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:28:function exp)', 'at ./index.rsh:129:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v398, v399], secs: v401, time: v400, didSend: v93, from: v397 } = txn5;
            ;
            const v402 = stdlib.addressEq(v308, v397);
            stdlib.assert(v402, {
              at: './index.rsh:128:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v403 = stdlib.digest(ctc3, [v398, v399]);
            const v404 = stdlib.digestEq(v367, v403);
            stdlib.assert(v404, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:130:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v405 = stdlib.sub(v333, stdlib.checkedBigNumberify('./index.rsh:133:36:decimal', stdlib.UInt_max, '1'));
            const cv331 = v399;
            const cv332 = v383;
            const cv333 = v405;
            const cv334 = v400;
            const cv341 = v341;
            
            v331 = cv331;
            v332 = cv332;
            v333 = cv333;
            v334 = cv334;
            v341 = cv341;
            
            continue;}
          
          }
        
        }
      
      }
    let v460;
    const v461 = stdlib.eq(v331, v311);
    const v462 = stdlib.eq(v332, v311);
    const v463 = v462 ? false : true;
    const v464 = v461 ? v463 : false;
    if (v464) {
      v460 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      }
    else {
      const v468 = v461 ? false : v462;
      if (v468) {
        v460 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        }
      else {
        v460 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
        }
      }
    const v472 = stdlib.eq(v460, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v472) {
      stdlib.protect(ctc1, await interact.seeOutcome(v460), {
        at: './index.rsh:30:26:application',
        fs: ['at ./index.rsh:29:9:application call to [unknown function] (defined at: ./index.rsh:29:27:function exp)', 'at ./index.rsh:139:12:application call to "payWinner" (defined at: ./index.rsh:27:48:function exp)'],
        msg: 'seeOutcome',
        who: 'Bob'
        });
      
      ;
      ;
      return;
      }
    else {
      const v488 = stdlib.eq(v460, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      if (v488) {
        const v489 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:36:14:decimal', stdlib.UInt_max, '2'), v309);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v460), {
          at: './index.rsh:38:26:application',
          fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:27:function exp)', 'at ./index.rsh:139:12:application call to "payWinner" (defined at: ./index.rsh:27:48:function exp)'],
          msg: 'seeOutcome',
          who: 'Bob'
          });
        
        return;
        }
      else {
        const v501 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:42:14:decimal', stdlib.UInt_max, '2'), v309);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v460), {
          at: './index.rsh:44:26:application',
          fs: ['at ./index.rsh:43:9:application call to [unknown function] (defined at: ./index.rsh:43:27:function exp)', 'at ./index.rsh:139:12:application call to "payWinner" (defined at: ./index.rsh:27:48:function exp)'],
          msg: 'seeOutcome',
          who: 'Bob'
          });
        
        return;
        }}}
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiARAAFgAgkgCAcoMAuIAVgFkAFoOCYDAQABAQAiNQAxGEEFVypkSSJbNQEhBls1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQ0MQAJFSSEHDEABPUkhBgxAAONJIQQMQABWIQQSRCEKNAESRDQESSISTDQCEhFEKGQpZFBJNQNXOCA1/4AEogVmjrAyBjQDIQ5bD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCBG1IIQo0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/STUFSSJbNf4hBls1/YAENRoq0DT+FlA0/RZQsDIGNAMhDlsMRDT/MQASRDQDV2ggNP4WNP0WUAESRDT/NAMhBVs0AyEIWzQDIQlbNANXOCA0/TQDIQtbNAMhDFsjCTIGNAMkW0IDAUghBDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOIbs6mwMgY0AyELWw9ENP8xABI0A1c4IDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgOUSYEGDEAAqkghBDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSlcAIDX/IQVbNf4hCFs1/SEJWzX8VzggNfshDFs1+iRbNflXaCA1+Ek1BRc194AEcO3vejT3FlCwMgY0AyELWwxENPsxABJEMgY0/Qg19jT/NP4WUDT9FlA0/BZQNPtQNPoWUDT5FlA0+FA09xZQNPYWUChLAVcAf2cpSwFXfxlnSCEKNQEyBjUCQgL/SCEHNAESRDQESSISTDQCEhFEKGRJNQNXOCA1/4AEzJmSXLAyBjQDIQ9bD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCApNJJQxAAONJgQQMQACcSCEHNAESRDQESSISTDQCEhFEKGRJNQNJSkpJVwAgNf8hBVs1/iEIWzX9IQlbNfxXOCA1+yEMWzX6JFs1+Uk1BTX4gAQ4sCMtNPhQsDIGNAMhD1sMRDT/MQASRDIGNP0INfc0/zT+FlA0/RZQNPwWUDT7UDT6FlA0+RZQNPhQNPcWUChLAVcAf2cpSwFXfxFnSCEENQEyBjUCQgIGJRJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyEQWw9EsSKyATQDIQVbsggjshA0A1cAILIHs0IBqkkjDEAAUEgjNAESRDQESSISTDQCEhFEKGRJNQMhBVs1/4AEmouRdLAyBjQDIRBbDEQ0/4gBzTQDVwAgNP80AyEIWzQDIQlbMQAiIoEDMgY0/0kIQgBuSCI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hBls1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsIGgjQaIAW80/4gBajIGNP4INfwxADT/FlA0/hZQNP0WUDT8FlAoSwFXAEBnSCM1ATIGNQJCAQI1/zX+Nf01/DX7Nfo1+TX4Nfc19jT7NPkSNfU0/DT5Ekk19BQ18zT1FDTzEDT9Ig0QQQA3NP40+Ag18jT2NPcWUDT4FlA0+RZQNPpQNP0WUDT/FlA08hZQKEsBVwBwZ0ghBzUBMgY1AkIAlzT1NPMQQQAGJTXyQgASNPUUNPQQQQAGIjXyQgADIzXyNPIjEkEAI7EisgE097III7IQNPayB7OxIrIBNPeyCCOyEDT6sgezQgAxNPIlEkEAFbEisgElNPcLsggjshA09rIHs0IAFbEisgElNPcLsggjshA0+rIHs0IAADEZIQ0SRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 152,
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
                "name": "v309",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v310",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v311",
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
                "name": "v309",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v310",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v311",
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
        "internalType": "struct T7",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
                "name": "v367",
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
    "name": "_reach_e4",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
                "name": "v383",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
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
                "name": "v398",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v399",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
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
        "internalType": "struct T7",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
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
                "name": "v367",
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
    "name": "_reach_m4",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
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
                "name": "v383",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
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
                "name": "v398",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v399",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001eb238038062001eb283398101604081905262000026916200026b565b600080805543600355604080516020808201835292815281513381528451818501528484015180518285015293840151606082015292909101516080830152907fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69060a00160405180910390a1602082015151620000a8903414600762000164565b6020808301510151620000bc904362000302565b81526040805160a08082018352600060208084018281528486018381526060808701858152608080890187815233808b528d8801805151885280518901518752518c015184528c518252600198899055439098558a51808801989098529451878b0152925191860191909152519084015251828401528451808303909301835260c0909101909352805191926200015a92600292909101906200018e565b5050505062000366565b816200018a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200019c9062000329565b90600052602060002090601f016020900481019282620001c057600085556200020b565b82601f10620001db57805160ff19168380011785556200020b565b828001600101855582156200020b579182015b828111156200020b578251825591602001919060010190620001ee565b50620002199291506200021d565b5090565b5b808211156200021957600081556001016200021e565b604051606081016001600160401b03811182821017156200026557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200027f57600080fd5b604080519081016001600160401b0381118282101715620002b057634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002ca57600080fd5b620002d462000234565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600082198211156200032457634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200033e57607f821691505b602082108114156200036057634e487b7160e01b600052602260045260246000fd5b50919050565b611b3c80620003766000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063980b6eac14610128578063a209ad4e1461013b578063ab53f2c61461014e578063bf2c5b2414610171578063de7369981461018457005b80631e93b0f1146100a35780632c10a159146100c75780637eea518c146100da57806383230757146100ed5780638328d4c41461010257005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d536600461161d565b610197565b6100a16100e836600461161d565b61034e565b3480156100f957600080fd5b506001546100b4565b6100a1610110366004611640565b6104cc565b6100a161012336600461161d565b610708565b6100a161013636600461161d565b6108a3565b6100a161014936600461161d565b610b0b565b34801561015a57600080fd5b50610163610d99565b6040516100be929190611652565b6100a161017f36600461161d565b610e36565b6100a161019236600461161d565b610fce565b6101a76001600054146009611125565b6101c1813515806101ba57506001548235145b600a611125565b6000808055600280546101d3906116af565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff906116af565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b5050505050806020019051810190610264919061176a565b905061027781608001514310600b611125565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516102a89291906117ed565b60405180910390a16102c1816020015134146008611125565b6102c96114c1565b815181516001600160a01b03909116905260208083018051835183015260408085015184518201526060808601518551820152845133608090910152838501805160009081905281519095019490945283516003920191909152915143920191909152516103379080611840565b6020820151608001526103498161114a565b505050565b61035e600160005414600d611125565b6103788135158061037157506001548235145b600e611125565b60008080556002805461038a906116af565b80601f01602080910402602001604051908101604052809291908181526020018280546103b6906116af565b80156104035780601f106103d857610100808354040283529160200191610403565b820191906000526020600020905b8154815290600101906020018083116103e657829003601f168201915b505050505080602001905181019061041b919061176a565b905061042f8160800151431015600f611125565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516104609291906117ed565b60405180910390a16104743415600c611125565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156104b1573d6000803e3d6000fd5b50600080805560018190556104c89060029061152f565b5050565b6104dc600b600054146027611125565b6104f6813515806104ef57506001548235145b6028611125565b600080805560028054610508906116af565b80601f0160208091040260200160405190810160405280929190818152602001828054610534906116af565b80156105815780601f1061055657610100808354040283529160200191610581565b820191906000526020600020905b81548152906001019060200180831161056457829003601f168201915b50505050508060200190518101906105999190611858565b90506105ad81610120015143106029611125565b604080513381528335602080830191909152840135818301529083013560608201527f71b5093cb50f6a6c807d17b0994efe213c21a3f7fc6bd14bf50facf7ea99022e9060800160405180910390a161060834156024611125565b8051610620906001600160a01b031633146025611125565b6040805161066c9161064691602080870135928701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260e00151146026611125565b6106746114c1565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855190910152608080860151855194169301929092528083018051928601359092526101008401519151015260a08201516106de906001906118ed565b6020820180516040019190915280514360609091015260c08301519051608001526103498161114a565b6107186007600054146017611125565b6107328135158061072b57506001548235145b6018611125565b600080805560028054610744906116af565b80601f0160208091040260200160405190810160405280929190818152602001828054610770906116af565b80156107bd5780601f10610792576101008083540402835291602001916107bd565b820191906000526020600020905b8154815290600101906020018083116107a057829003601f168201915b50505050508060200190518101906107d59190611904565b90506107e98160e001514310156019611125565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161081a9291906117ed565b60405180910390a161082e34156015611125565b8051610862906001600160a01b031633146108585760808201516001600160a01b0316331461085b565b60015b6016611125565b80608001516001600160a01b03166108fc8260c001519081150290604051600060405180830381858888f193505050501580156104b1573d6000803e3d6000fd5b6108b3600960005414601c611125565b6108cd813515806108c657506001548235145b601d611125565b6000808055600280546108df906116af565b80601f016020809104026020016040519081016040528092919081815260200182805461090b906116af565b80156109585780601f1061092d57610100808354040283529160200191610958565b820191906000526020600020905b81548152906001019060200180831161093b57829003601f168201915b505050505080602001905181019061097091906119b0565b90506109886040518060200160405280600081525090565b61099a8261010001514310601e611125565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c33846040516109cb929190611a39565b60405180910390a16109df3415601a611125565b60808201516109fa906001600160a01b03163314601b611125565b6040820151610a099043611840565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151908501526080808701519093169284019290925260a0808601519084015260c0808601519084015260e08086015190840152858101356101008401528351610120840152600b600055436001559051610ae091839101611a60565b60405160208183030381529060405260029080519060200190610b0492919061156c565b5050505050565b610b1b6007600054146012611125565b610b3581351580610b2e57506001548235145b6013611125565b600080805560028054610b47906116af565b80601f0160208091040260200160405190810160405280929190818152602001828054610b73906116af565b8015610bc05780601f10610b9557610100808354040283529160200191610bc0565b820191906000526020600020905b815481529060010190602001808311610ba357829003601f168201915b5050505050806020019051810190610bd89190611904565b9050610bf06040518060200160405280600081525090565b610c018260e0015143106014611125565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03384604051610c32929190611a39565b60405180910390a1610c4634156010611125565b8151610c5e906001600160a01b031633146011611125565b6040820151610c6d9043611840565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151908501526080808701519093169284019290925260a0808601519084015260c080860151908401528581013560e084015283516101008401526009600055436001559051610ae09183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151908301526080808401519091169082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b600060606000546002808054610dae906116af565b80601f0160208091040260200160405190810160405280929190818152602001828054610dda906116af565b8015610e275780601f10610dfc57610100808354040283529160200191610e27565b820191906000526020600020905b815481529060010190602001808311610e0a57829003601f168201915b50505050509050915091509091565b610e466009600054146021611125565b610e6081351580610e5957506001548235145b6022611125565b600080805560028054610e72906116af565b80601f0160208091040260200160405190810160405280929190818152602001828054610e9e906116af565b8015610eeb5780601f10610ec057610100808354040283529160200191610eeb565b820191906000526020600020905b815481529060010190602001808311610ece57829003601f168201915b5050505050806020019051810190610f0391906119b0565b9050610f188161010001514310156023611125565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610f499291906117ed565b60405180910390a1610f5d3415601f611125565b8051610f91906001600160a01b03163314610f875760808201516001600160a01b03163314610f8a565b60015b6020611125565b805160c08201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156104b1573d6000803e3d6000fd5b610fde600b60005414602c611125565b610ff881351580610ff157506001548235145b602d611125565b60008080556002805461100a906116af565b80601f0160208091040260200160405190810160405280929190818152602001828054611036906116af565b80156110835780601f1061105857610100808354040283529160200191611083565b820191906000526020600020905b81548152906001019060200180831161106657829003601f168201915b505050505080602001905181019061109b9190611858565b90506110b0816101200151431015602e611125565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd33836040516110e19291906117ed565b60405180910390a16110f53415602a611125565b8051610862906001600160a01b0316331461111f5760808201516001600160a01b03163314611122565b60015b602b5b816104c85760405163100960cb60e01b81526004810182905260240160405180910390fd5b6040805160a081018252600080825260208083018281529383018290526060808401839052608084019290925284518201518582018051519091148452855190920151915101511491829052906111a25760016111a5565b60005b1515604082015280516111bc5780604001516111bf565b60005b6111ca5760006111d7565b6000826020015160400151115b1561135c578151604001516020830151606001516111f59190611840565b81606001818152505061125860405180610100016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015181860152865160809081015190941684860152828701805183015160a0870152519093015160c08501529184015160e084015260076000554360015590516113329183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152606084015160608401528060808501511660808401525060a083015160a083015260c083015160c083015260e083015160e083015292915050565b6040516020818303038152906040526002908051906020019061135692919061156c565b50505050565b805161136957600061136f565b80604001515b1561138057600260808201526113ac565b8051611390578060200151611393565b60005b156113a457600060808201526113ac565b600160808201525b60018160800151141561143d57815180516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156113f9573d6000803e3d6000fd5b50815160808101516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156104b1573d6000803e3d6000fd5b60028160800151141561149757815180516020909101516001600160a01b03909116906108fc9061146f906002611ae7565b6040518115909202916000818181858888f193505050501580156104b1573d6000803e3d6000fd5b8160000151608001516001600160a01b03166108fc836000015160200151600261146f9190611ae7565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c0820192909252908190815260200161152a6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b905290565b50805461153b906116af565b6000825580601f1061154b575050565b601f01602090049060005260206000209081019061156991906115f0565b50565b828054611578906116af565b90600052602060002090601f01602090048101928261159a57600085556115e0565b82601f106115b357805160ff19168380011785556115e0565b828001600101855582156115e0579182015b828111156115e05782518255916020019190600101906115c5565b506115ec9291506115f0565b5090565b5b808211156115ec57600081556001016115f1565b60006040828403121561161757600080fd5b50919050565b60006040828403121561162f57600080fd5b6116398383611605565b9392505050565b60006060828403121561161757600080fd5b82815260006020604081840152835180604085015260005b818110156116865785810183015185820160600152820161166a565b81811115611698576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806116c357607f821691505b6020821081141561161757634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561171657634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff8111828210171561171657634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811461176557600080fd5b919050565b600060a0828403121561177c57600080fd5b60405160a0810181811067ffffffffffffffff821117156117ad57634e487b7160e01b600052604160045260246000fd5b6040526117b98361174e565b8152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461181b57600080fd5b80604085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156118535761185361182a565b500190565b6000610140828403121561186b57600080fd5b6118736116e4565b61187c8361174e565b81526020830151602082015260408301516040820152606083015160608201526118a86080840161174e565b608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b6000828210156118ff576118ff61182a565b500390565b600061010080838503121561191857600080fd5b6040519081019067ffffffffffffffff8211818310171561194957634e487b7160e01b600052604160045260246000fd5b816040526119568461174e565b81526020840151602082015260408401516040820152606084015160608201526119826080850161174e565b608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b600061012082840312156119c357600080fd5b6119cb61171c565b6119d48361174e565b8152602083015160208201526040830151604082015260608301516060820152611a006080840161174e565b608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b6001600160a01b038316815260608101611639602083018480358252602090810135910152565b81516001600160a01b0316815261014081016020830151602083015260408301516040830152606083015160608301526080830151611aaa60808401826001600160a01b03169052565b5060a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b6000816000190483118215151615611b0157611b0161182a565b50029056fea2646970667358221220297c3de5e61daa0465bd5b8b680d858d345417e096381ef52cd5dab3ec0daca864736f6c634300080c0033`,
  BytecodeLen: 7858,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:89:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:95:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:144:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:144:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:144:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:101:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:112:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:113:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:121:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:122:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:129:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
