const CODE_STATE = {
  SAFE: "안전",
  DANGER: "위험",
  FRIENDLY: "친근",
  HOSTILITY: "적대",
  INCAPACITY: "전투 불능",
};
var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function timeout(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function sleep(fn, ms, ...args) {
  await timeout(ms);
  return fn(...args);
}

function printString(times, string) {
  for (var i = 0; i < times; ++i) {
    console.log(string);
  }
}
const monsterList = [];
const partyMember = [];
const npcList = [];
const areaList = [];

const pHero = {
  name: "용사",
};

const npcShopOwner = {
  npcCode: 1,
  name: "상점 주인",
  state: CODE_STATE.FRIENDLY,
};

const npcTown1 = {
  npcCode: 11,
  name: "동네 주민 1",
  state: CODE_STATE.FRIENDLY,
};

const npcTown2 = {
  npcCode: 12,
  name: "동네 주민 2",
  state: CODE_STATE.FRIENDLY,
};

const npcEastMagician = {
  npcCode: 21,
  name: "동쪽 마법사",
  state: CODE_STATE.HOSTILITY,
};

const mSpider = {
  monsterCode: 1,
  name: "거미",
  state: CODE_STATE.HOSTILITY,
  maxHp: 100,
  curHp: 100,
  skill: "몸통 박치기",
  atk: 2,
};
const mSkeleton = {
  monsterCode: 2,
  name: "스켈레톤",
  state: CODE_STATE.HOSTILITY,
  maxHp: 150,
  curHp: 150,
  skill: "뼈때리기",
  atk: 4,
};
const mSkeletonKing = {
  monsterCode: 3,
  name: "스켈레톤 킹",
  state: CODE_STATE.HOSTILITY,
  maxHp: 250,
  curHp: 250,
  skill: "뼈 아프게 때리기",
  atk: 8,
};

const areaTown = {
  areaCode: 1,
  name: "마을",
  state: CODE_STATE.SAFE,
  access: [2, 3],
  npc: [11, 12],
};
const areaEastField = {
  areaCode: 11,
  name: "동쪽 필드",
  state: CODE_STATE.DANGER,
  access: [1],
  npc: [21],
};
const areaShop = {
  areaCode: 2,
  name: "상점",
  state: CODE_STATE.SAFE,
  access: [1],
  npc: [1],
};

areaList.push(areaTown, areaShop, areaEastField);
npcList.push(npcShopOwner, npcEastMagician);
monsterList.push(mSpider, mSkeleton, mSkeletonKing);

function printPartyMember() {
  console.log("[현재 파티원 상태]");
  partyMember.forEach((mem) => {
    console.log(" ", mem.name, " : ", mem.curHp, "/", mem.maxHp);
  });
  console.log(" -------------- ");
}
function printArea(area) {
  console.log("[현재 지역 정보 : ", area.name, " ]");
  console.log("  상태");
  console.log("   ", area.state);
  console.log("  NPC");
  area.npcList.forEach((npc) => {
    console.log("   ", npc.name);
  });
  console.log("무엇을 할까?");
}

function getAttack(origin, target) {
  if (origin.curHp <= 0) {
    console.log(origin.name, "은 전투불능 상태이다!");
    return;
  }

  target.curHp -= origin.atk;
  console.log(
    target.name,
    "은 ",
    origin.name,
    "으로 부터 ",
    origin.atk,
    "만큼의 대미지를 입었다!"
  );

  if (target.curHp < 0) {
    target.curHp = 0;
    target.state = CODE_STATE.INCAPACITY;
    console.log(origin.name, "이 ", target.name, "을 쓰러뜨렸습니다.");
  }
}

rl.on("line", function (line) {
  sleep(printString, 1000, 0, line);
  if (line === "close") {
    rl.close();
  }
}).on("close", function () {
  console.log("input event closed");
});
