const STORAGE_KEYS = {
  apiKey: "mimo-tts-api-key",
  endpoint: "mimo-tts-endpoint",
  format: "mimo-tts-format",
  voice: "mimo-tts-voice",
};

const STYLE_OPTIONS = [
  "变快",
  "变慢",
  "开心",
  "悲伤",
  "生气",
  "温柔",
  "激动",
  "严肃",
  "悬疑",
  "治愈",
  "热血",
  "播音腔",
  "少年感",
  "成熟感",
  "故事感",
  "科技感",
  "广告感",
  "孙悟空",
  "林黛玉",
  "悄悄话",
  "夹子音",
  "台湾腔",
  "东北话",
  "四川话",
  "河南话",
  "陕西话",
  "粤语",
  "唱歌",
];

const AUDIO_TAG_OPTIONS = [
  "（紧张，深呼吸）",
  "（语速加快，碎碎念）",
  "（小声）",
  "（沉默片刻）",
  "（苦笑）",
  "（长叹一口气）",
  "（寒冷导致的急促呼吸）",
  "（咳嗽）",
  "（提高音量喊话）",
  "（停顿两秒）",
  "（轻笑）",
  "（压低声音）",
  "（放慢语速）",
  "（声音微微发抖）",
  "（激动地）",
  "（像在讲秘密一样）",
  "（清了清嗓子）",
  "（喘口气）",
  "（带着笑意）",
  "（略带哽咽）",
  "（拖长尾音）",
  "（节奏突然加快）",
  "（停顿一秒）",
  "（停顿三秒）",
  "（低声叹气）",
];

const CAPABILITIES = [
  {
    title: "模型",
    detail: "官方文档当前仅列出 mimo-v2-tts。",
  },
  {
    title: "预置音色",
    detail: "mimo_default、default_zh、default_eh。",
  },
  {
    title: "整体风格控制",
    detail: "通过 <style>...</style> 放在正文最前面。",
  },
  {
    title: "细粒度音频标签",
    detail: "支持呼吸、停顿、音量、情绪等中文括号标签。",
  },
  {
    title: "方言与口音",
    detail: "官方示例含东北话、四川话、河南话、粤语、台湾腔，页面额外补了陕西话测试模板。",
  },
  {
    title: "角色扮演",
    detail: "官方推荐风格示例含孙悟空、林黛玉。",
  },
  {
    title: "情绪变化",
    detail: "官方推荐风格示例含开心、悲伤、生气。",
  },
  {
    title: "唱歌特殊规则",
    detail: "若测唱歌，文本最前只放 <style>唱歌</style>。",
  },
];

const TEMPLATE_LIBRARY = [
  {
    id: "brand-host",
    name: "01 品牌发布会主持",
    voice: "mimo_default",
    format: "wav",
    styles: ["开心", "变快"],
    tags: ["（停顿两秒）"],
    userPrompt:
      "你正在为一场新品发布会生成舞台主持人口播，请让语气自信、轻快、具有现场带动感。",
    assistantText:
      "各位来宾，晚上好，欢迎来到这场属于创造力与想象力的发布会。（停顿两秒）今晚，我们不只是带来一款产品，而是希望把更自然、更贴近生活的智能体验，真正交到每一个人的手里。接下来的二十分钟里，你会看到它如何理解你的指令，如何在复杂任务里保持稳定，也会听到它如何用更有温度的声音陪伴日常。请把掌声送给台上的每一次亮相，因为从这一刻开始，技术不再只是冰冷的参数，而会成为你每一天都愿意依赖的伙伴。",
    summary: "覆盖开心、语速变化、正式舞台感。",
  },
  {
    id: "story-grandma",
    name: "02 林黛玉风长篇叙述",
    voice: "default_zh",
    format: "wav",
    styles: ["林黛玉", "悲伤"],
    tags: ["（沉默片刻）", "（苦笑）"],
    userPrompt:
      "请生成一段偏文学化、略带伤感的长篇旁白，适合测试角色扮演与情绪持续稳定性。",
    assistantText:
      "（沉默片刻）窗外那阵风又起来了，轻轻掀动廊下的竹帘，也把旧日里那些说不清、道不明的心事一并吹了回来。人总以为时间长了，许多情绪就会自行散去，可真正落在心上的东西，往往只会悄悄沉得更深。你看那盏灯，明明还亮着，却已经有了将熄未熄的疲倦；你听那檐角的雨，明明不急，却偏偏一滴一滴敲得人难安。（苦笑）若问我是否后悔，我倒也说不上后悔，只是偶尔会想，如果当时的我能再勇敢一点，再坦率一点，是不是就不必把那么多话，留到今天，只能对着风、对着夜、对着空荡荡的院子轻声讲给自己听。",
    summary: "覆盖角色扮演、悲伤情绪、文学叙事。",
  },
  {
    id: "dongbei-market",
    name: "03 东北菜市场吆喝",
    voice: "mimo_default",
    format: "wav",
    styles: ["东北话", "生气"],
    tags: ["（提高音量喊话）"],
    userPrompt:
      "请生成一段极具生活气息的菜市场叫卖文案，带一点急促和强烈的现场互动感。",
    assistantText:
      "（提高音量喊话）大姐，你瞅瞅这鱼，今儿一早刚从水里捞上来的，尾巴还甩呢！这茄子、这豆角、这小白菜，哪个不是新鲜得能掐出水来？你别光站那儿看，挑两样回去，炖菜炒菜都顶呱呱！哎，那边小伙儿，别光翻来翻去不拿啊，你那手劲儿再大点，把我这西红柿都给按瘪喽！说真的，咱这摊儿靠的就是实在，价格不虚，分量不差，今天买回去，全家吃着舒坦，你明儿保准还想来找我！",
    summary: "覆盖东北话、生气、高音量叫卖。",
  },
  {
    id: "sichuan-food",
    name: "04 四川话探店推荐",
    voice: "default_zh",
    format: "wav",
    styles: ["四川话", "开心"],
    tags: ["（小声）"],
    userPrompt:
      "请输出一段适合短视频探店的四川话口播，既要热情，也要有生活化节奏。",
    assistantText:
      "你们晓不晓得，这家馆子真的是我最近吃到最安逸的一家哦。刚一坐下，那个红油香味就慢慢飘过来，巴适得很。锅底一滚，牛肉、毛肚、鸭肠下进去，捞起来一蘸，麻辣味一下子就冲到脑壳顶上，但又不是那种凶巴巴的辣，是越吃越想继续吃的那种香。（小声）尤其是他们家的冰粉，最后来一碗，整个人都舒服了。你要是最近不晓得跟朋友去哪儿聚，我真的建议你们来试一盘，味道稳当，环境也不闹，拍视频也好看。",
    summary: "覆盖四川话、开心、短视频口播感。",
  },
  {
    id: "henan-station",
    name: "05 河南话车站广播改编",
    voice: "mimo_default",
    format: "wav",
    styles: ["河南话", "变慢"],
    tags: ["（长叹一口气）"],
    userPrompt:
      "请做一段河南话风格的温和车站提醒广播，测试慢语速和长句稳定性。",
    assistantText:
      "各位准备上车的旅客，您先别着急，票和证件都再检查一遍，东西也看好，尤其是手机、背包和小孩儿，别一转身就落下了。前头这趟车一会儿就开始检票，咱排队的时候慢慢来，一个一个过，别挤，也别慌，越急反倒越容易忘事儿。（长叹一口气）出门在外，图的就是个顺顺当当，路上照顾好自己，到站了记得给家里报个平安，叫人放心，这趟行程也就安稳了。",
    summary: "覆盖河南话、慢语速、广播感。",
  },
  {
    id: "cantonese-life",
    name: "06 粤语生活分享",
    voice: "mimo_default",
    format: "wav",
    styles: ["粤语", "台湾腔"],
    tags: ["（停顿两秒）"],
    userPrompt:
      "请做一段适合生活方式博主的视频旁白，混合粤语表达和轻柔口吻，用于测试风格组合。",
    assistantText:
      "今日想同大家分享一个我最近几钟意的周末节奏。朝早唔使太赶，煮一杯咖啡，畀阳光慢慢照入屋，成个人已经放松咗一半。（停顿两秒）之后去街角嗰间细细间的花店睇下新到的白玫瑰，再顺路买返一份热辣辣的菠萝包，边行边食，真系会觉得生活原来可以好简单、好舒服。夜晚返到屋企，开盏暖灯，播返首旧歌，整理下今日影到的片同相，嗰种从容感，唔系特别热闹，但会令人好想珍惜。",
    summary: "覆盖粤语、风格组合、舒缓叙述。",
  },
  {
    id: "wukong-battle",
    name: "07 孙悟空战前独白",
    voice: "mimo_default",
    format: "wav",
    styles: ["孙悟空", "生气", "变快"],
    tags: ["（紧张，深呼吸）", "（提高音量喊话）"],
    userPrompt:
      "请生成一段高张力战前独白，测试角色扮演、爆发力和快语速能力。",
    assistantText:
      "（紧张，深呼吸）俺老孙一路从花果山打到这天上地下，见过的妖魔鬼怪、魑魅魍魉多了去了，还真没几个敢在俺面前摆出这副狂样。你们今日仗着人多势众，堵在这山门之前，以为就能把路给断了？笑话！（提高音量喊话）听好了，若是识趣，现在就把人放了，把路让开，俺也去得痛快，打得也痛快；若还是执迷不悟，非要逼俺老孙动手，那这一棒下去，可就不是你们喊两句饶命就能收场的！",
    summary: "覆盖孙悟空、生气、快语速、喊话。",
  },
  {
    id: "whisper-meditation",
    name: "08 悄悄话冥想引导",
    voice: "default_zh",
    format: "wav",
    styles: ["悄悄话", "变慢"],
    tags: ["（小声）", "（停顿两秒）"],
    userPrompt:
      "请生成一段适合睡前冥想的耳语引导词，尽量让节奏柔和，测试悄悄话与停顿。",
    assistantText:
      "（小声）现在，把注意力慢慢收回来，先不用急着思考今天发生过什么，只要让肩膀稍微放松，让呼吸一点一点变深。（停顿两秒）吸气的时候，想象窗外的风正轻轻穿过树叶；呼气的时候，把白天积攒下来的疲惫、紧绷和杂念，慢慢送出去。你不需要立刻变得平静，也不必要求自己马上入睡，只要允许身体先安静下来，允许脑海里的声音慢慢远一点，再远一点。今晚就先这样，给自己留一点温柔，剩下的事情，等天亮再说。",
    summary: "覆盖悄悄话、慢语速、停顿和助眠引导。",
  },
  {
    id: "song-demo",
    name: "09 唱歌副歌测试",
    voice: "default_zh",
    format: "wav",
    styles: ["唱歌"],
    tags: [],
    userPrompt:
      "请生成一段旋律感明显、适合测试唱歌模式的副歌歌词，不要混入其他整体风格。",
    assistantText:
      "把风装进口袋，把夜点成海，沿着城市微亮的边缘慢慢唱出来。那些没说出口的期待，会在回声里面重新盛开；你看灯火像星海，我把勇气轻轻摊开，这一次就让心跳带着我们穿过人群与阴霾。哪怕前路还有雾，也请你别离开，因为最亮的那束光，也许就藏在下一句告白。",
    summary: "覆盖唱歌特殊规则。",
  },
  {
    id: "shaanxi-daily",
    name: "10 陕西话日常闲谝",
    voice: "mimo_default",
    format: "wav",
    styles: ["陕西话", "开心", "故事感"],
    tags: ["（带着笑意）", "（停顿一秒）"],
    userPrompt:
      "请生成一段地道、生活化的陕西话日常表达，用来测试方言自然度和口语节奏。",
    assistantText:
      "（带着笑意）你今儿咋来得这么早咧？我还想着你肯定又堵到路上了。早上那会儿我从巷子口买了个热乎乎的肉夹馍，又整了一碗豆腐脑，站在路边吃得那叫一个美。咱这地方的人说话就是图个实在，有啥说啥，不拐弯抹角，你要是有空，咱等会儿一块儿去城墙根底下转转，吹吹风，谝谝闲传。（停顿一秒）最近天儿暖和了，街面上也热闹得很，卖水果的、卖小吃的、遛弯的，全都出来了，看着就让人心里舒坦。",
    summary: "覆盖陕西话、日常口语、轻松叙述。",
  },
  {
    id: "shaanxi-food",
    name: "11 陕西话介绍陕西美食",
    voice: "default_zh",
    format: "wav",
    styles: ["陕西话", "广告感", "开心"],
    tags: ["（提高音量喊话）", "（轻笑）"],
    userPrompt:
      "请用陕西话做一段有食欲、有烟火气的美食推荐，测试方言与美食口播的结合效果。",
    assistantText:
      "你要是来陕西还不晓得吃啥，那我可得给你好好说道说道。（轻笑）先说这个肉夹馍，馍烤得外头焦香，里头软和，再把炖得烂乎的腊汁肉一剁，往里头一夹，咬一口，满嘴都是香味。还有油泼面，面条宽得很，辣子、蒜末、葱花往上一泼，热油滋啦一下，那香气一下子就窜上来了。（提高音量喊话）再来一碗羊肉泡馍，馍掰得越细越入味，汤头厚实，暖胃得很。要是你还嫌不过瘾，凉皮、甑糕、镜糕也都得挨个尝一遍，陕西这口吃的，吃一回就能叫人记好久。",
    summary: "覆盖陕西话、美食推荐、烟火气表达。",
  },
  {
    id: "mixed-ability",
    name: "12 全能力混合压测",
    voice: "mimo_default",
    format: "wav",
    styles: ["开心", "夹子音", "台湾腔"],
    tags: ["（紧张，深呼吸）", "（语速加快，碎碎念）", "（沉默片刻）", "（苦笑）"],
    userPrompt:
      "请生成一段适合直播连麦场景的长文本，前半段轻快可爱，后半段加入情绪变化和细粒度标签。",
    assistantText:
      "（紧张，深呼吸）哈喽哈喽，今天终于把这个计划准备好要跟大家见面了，其实我从下午开始就在来回确认设备、文案、流程，生怕哪一个小细节没有处理到位。因为我真的很希望，大家点进来之后，不只是听到一段普通的介绍，而是能感觉到这次分享是有温度、有设计感，也有一点点小惊喜的。（语速加快，碎碎念）刚刚我还在后台反复试了好多次，担心声音太平、担心节奏不够、还担心自己一紧张就讲太快，好在现在终于顺下来了。等一下我会带大家从功能体验、风格切换，到不同方言和情绪表达一路试过去，让你们很直观地感受到声音是怎么被塑造出来的。（沉默片刻）如果最后你也觉得这个声音已经不像冷冰冰的播报，而更像一个有个性的表达者，那我们今晚这场测试就算真的值了。（苦笑）毕竟为了这一场，我可是连晚饭都差点忘了吃。",
    summary: "覆盖多风格组合、夹子音、台湾腔、细粒度标签、长文本。",
  },
];

const state = {
  selectedStyles: new Set(),
  selectedAudioTags: new Set(),
  objectUrl: "",
};

const els = {
  apiKey: document.getElementById("apiKey"),
  endpoint: document.getElementById("endpoint"),
  model: document.getElementById("model"),
  audioFormat: document.getElementById("audioFormat"),
  voice: document.getElementById("voice"),
  templateSelect: document.getElementById("templateSelect"),
  styleChips: document.getElementById("styleChips"),
  audioTagChips: document.getElementById("audioTagChips"),
  clearStylesBtn: document.getElementById("clearStylesBtn"),
  insertTagsBtn: document.getElementById("insertTagsBtn"),
  customStyles: document.getElementById("customStyles"),
  userPrompt: document.getElementById("userPrompt"),
  assistantText: document.getElementById("assistantText"),
  applyTemplateBtn: document.getElementById("applyTemplateBtn"),
  buildPromptBtn: document.getElementById("buildPromptBtn"),
  synthesizeBtn: document.getElementById("synthesizeBtn"),
  capabilityGrid: document.getElementById("capabilityGrid"),
  finalPromptPreview: document.getElementById("finalPromptPreview"),
  requestPreview: document.getElementById("requestPreview"),
  copyPromptBtn: document.getElementById("copyPromptBtn"),
  copyJsonBtn: document.getElementById("copyJsonBtn"),
  audioPlayer: document.getElementById("audioPlayer"),
  downloadAudioBtn: document.getElementById("downloadAudioBtn"),
  responseMeta: document.getElementById("responseMeta"),
  statusBadge: document.getElementById("statusBadge"),
};

function renderCapabilities() {
  els.capabilityGrid.innerHTML = CAPABILITIES.map(
    (item) => `
      <article class="capability-item">
        <strong>${item.title}</strong>
        <span>${item.detail}</span>
      </article>
    `
  ).join("");
}

function renderChips() {
  els.styleChips.innerHTML = STYLE_OPTIONS.map(
    (style) => `
      <button class="chip ${state.selectedStyles.has(style) ? "active" : ""}" type="button" data-style="${style}">
        ${style}
      </button>
    `
  ).join("");

  els.audioTagChips.innerHTML = AUDIO_TAG_OPTIONS.map(
    (tag) => `
      <button class="chip ${state.selectedAudioTags.has(tag) ? "active" : ""}" type="button" data-tag="${tag}">
        ${tag}
      </button>
    `
  ).join("");
}

function renderTemplates() {
  els.templateSelect.innerHTML = TEMPLATE_LIBRARY.map(
    (template) => `<option value="${template.id}">${template.name} · ${template.summary}</option>`
  ).join("");
}

function loadPersistedConfig() {
  els.apiKey.value = localStorage.getItem(STORAGE_KEYS.apiKey) || "";
  els.endpoint.value = localStorage.getItem(STORAGE_KEYS.endpoint) || els.endpoint.value;
  els.audioFormat.value = localStorage.getItem(STORAGE_KEYS.format) || els.audioFormat.value;
  els.voice.value = localStorage.getItem(STORAGE_KEYS.voice) || els.voice.value;
}

function persistConfig() {
  localStorage.setItem(STORAGE_KEYS.apiKey, els.apiKey.value.trim());
  localStorage.setItem(STORAGE_KEYS.endpoint, els.endpoint.value.trim());
  localStorage.setItem(STORAGE_KEYS.format, els.audioFormat.value.trim());
  localStorage.setItem(STORAGE_KEYS.voice, els.voice.value);
}

function getSelectedTemplate() {
  return TEMPLATE_LIBRARY.find((item) => item.id === els.templateSelect.value) || TEMPLATE_LIBRARY[0];
}

function setTemplate(template) {
  state.selectedStyles = new Set(template.styles);
  state.selectedAudioTags = new Set(template.tags);
  els.voice.value = template.voice;
  els.audioFormat.value = template.format;
  els.userPrompt.value = template.userPrompt;
  els.assistantText.value = template.assistantText;
  els.customStyles.value = "";
  renderChips();
  updatePreview();
}

function buildStylePrefix() {
  const selectedStyles = [...state.selectedStyles];
  const customStyles = els.customStyles.value
    .split(/[、,\s]+/)
    .map((item) => item.trim())
    .filter(Boolean);

  const allStyles = [...selectedStyles, ...customStyles];
  if (!allStyles.length) {
    return "";
  }

  if (allStyles.includes("唱歌")) {
    return "<style>唱歌</style>";
  }

  return `<style>${allStyles.join(" ")}</style>`;
}

function buildAssistantContent() {
  const body = els.assistantText.value.trim();
  const prefix = buildStylePrefix();
  return `${prefix}${body}`.trim();
}

function insertSelectedTags() {
  const tags = [...state.selectedAudioTags];
  if (!tags.length) {
    return;
  }

  const currentValue = els.assistantText.value.trim();
  const prefix = tags.join("");
  els.assistantText.value = currentValue ? `${prefix}${currentValue}` : prefix;
  updatePreview();
}

function buildRequestPayload() {
  const payload = {
    model: els.model.value.trim(),
    messages: [],
    audio: {
      format: els.audioFormat.value.trim(),
      voice: els.voice.value,
    },
  };

  const userPrompt = els.userPrompt.value.trim();
  const assistantContent = buildAssistantContent();

  if (userPrompt) {
    payload.messages.push({
      role: "user",
      content: userPrompt,
    });
  }

  payload.messages.push({
    role: "assistant",
    content: assistantContent,
  });

  return payload;
}

function updatePreview() {
  const assistantContent = buildAssistantContent();
  els.finalPromptPreview.textContent = assistantContent || "等待输入待合成文本...";
  els.requestPreview.textContent = JSON.stringify(buildRequestPayload(), null, 2);
}

function setStatus(type, text) {
  els.statusBadge.className = `status ${type}`;
  els.statusBadge.textContent = text;
}

function cleanupAudioUrl() {
  if (state.objectUrl) {
    URL.revokeObjectURL(state.objectUrl);
    state.objectUrl = "";
  }
}

function base64ToBlob(base64Data, contentType) {
  const binary = atob(base64Data);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new Blob([bytes], { type: contentType });
}

function inferMimeType(format) {
  const normalized = format.toLowerCase();
  if (normalized === "mp3") {
    return "audio/mpeg";
  }
  if (normalized === "pcm") {
    return "audio/L16";
  }
  return "audio/wav";
}

function buildDownloadFilename(format) {
  const normalized = (format || "wav").trim().toLowerCase();
  return normalized.endsWith(".wav") ? `mimo-tts-output${normalized}` : `mimo-tts-output.${normalized}`;
}

async function copyText(text) {
  await navigator.clipboard.writeText(text);
}

async function synthesize() {
  persistConfig();

  const apiKey = els.apiKey.value.trim();
  if (!apiKey) {
    setStatus("error", "缺少 API Key");
    els.responseMeta.textContent = "请先填写 API Key。";
    return;
  }

  const payload = buildRequestPayload();
  const endpoint = els.endpoint.value.trim();
  const format = els.audioFormat.value.trim();

  setStatus("loading", "合成中");
  els.responseMeta.textContent = "正在请求 Xiaomi MiMo API...";
  els.synthesizeBtn.disabled = true;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(payload),
    });

    const responseJson = await response.json();
    if (!response.ok) {
      throw new Error(responseJson?.error?.message || `HTTP ${response.status}`);
    }

    const message = responseJson?.choices?.[0]?.message;
    const audioData = message?.audio?.data;
    if (!audioData) {
      throw new Error("返回中未找到 choices[0].message.audio.data");
    }

    cleanupAudioUrl();
    const blob = base64ToBlob(audioData, inferMimeType(format));
    state.objectUrl = URL.createObjectURL(blob);
    els.audioPlayer.src = state.objectUrl;
    els.downloadAudioBtn.href = state.objectUrl;
    els.downloadAudioBtn.download = buildDownloadFilename(format);
    els.downloadAudioBtn.classList.remove("disabled");

    els.responseMeta.textContent = JSON.stringify(
      {
        id: responseJson.id,
        created: responseJson.created,
        voice: payload.audio.voice,
        format: payload.audio.format,
        contentPreview: buildAssistantContent().slice(0, 120),
      },
      null,
      2
    );
    setStatus("success", "合成成功");
  } catch (error) {
    setStatus("error", "请求失败");
    els.responseMeta.textContent = String(error.message || error);
  } finally {
    els.synthesizeBtn.disabled = false;
  }
}

function bindEvents() {
  els.styleChips.addEventListener("click", (event) => {
    const target = event.target.closest("[data-style]");
    if (!target) {
      return;
    }

    const style = target.dataset.style;
    if (state.selectedStyles.has(style)) {
      state.selectedStyles.delete(style);
    } else {
      state.selectedStyles.add(style);
    }
    renderChips();
    updatePreview();
  });

  els.audioTagChips.addEventListener("click", (event) => {
    const target = event.target.closest("[data-tag]");
    if (!target) {
      return;
    }

    const tag = target.dataset.tag;
    if (state.selectedAudioTags.has(tag)) {
      state.selectedAudioTags.delete(tag);
    } else {
      state.selectedAudioTags.add(tag);
    }
    renderChips();
  });

  [
    els.apiKey,
    els.endpoint,
    els.audioFormat,
    els.voice,
    els.userPrompt,
    els.assistantText,
    els.customStyles,
  ].forEach((element) => {
    element.addEventListener("input", () => {
      persistConfig();
      updatePreview();
    });
  });

  els.templateSelect.addEventListener("change", () => {
    setTemplate(getSelectedTemplate());
  });

  els.applyTemplateBtn.addEventListener("click", () => {
    setTemplate(getSelectedTemplate());
  });

  els.buildPromptBtn.addEventListener("click", updatePreview);
  els.clearStylesBtn.addEventListener("click", () => {
    state.selectedStyles.clear();
    els.customStyles.value = "";
    renderChips();
    updatePreview();
  });
  els.insertTagsBtn.addEventListener("click", insertSelectedTags);
  els.synthesizeBtn.addEventListener("click", synthesize);
  els.copyPromptBtn.addEventListener("click", () => copyText(buildAssistantContent()));
  els.copyJsonBtn.addEventListener("click", () =>
    copyText(JSON.stringify(buildRequestPayload(), null, 2))
  );
}

function init() {
  renderCapabilities();
  renderTemplates();
  loadPersistedConfig();
  renderChips();
  bindEvents();
  setTemplate(TEMPLATE_LIBRARY[0]);
}

init();
