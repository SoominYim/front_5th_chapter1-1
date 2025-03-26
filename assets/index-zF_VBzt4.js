(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function l(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=l(o);fetch(o.href,s)}})();const g=[{name:"홍길동",time:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{name:"김철수",time:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{name:"이영희",time:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{name:"박민수",time:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{name:"정수연",time:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],b=()=>`
      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">
          ${g.map(e=>`
            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">${e.name}</p>
                  <p class="text-sm text-gray-500">${e.time}</p>
                </div>
              </div>
              <p>${e.content}</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>
          `).join("")}
        </div>
      </main>
`,p=()=>{const e=JSON.parse(localStorage.getItem("user"))||{username:"",email:"",bio:""};return`
        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            <form id="profile-form">
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >사용자 이름</label
                >
                <input
                  type="text"
                  id="username"
                  name="username"
                  value="${e.username}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-4">
                <label
                  for="email"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >이메일</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="${e.email}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-6">
                <label
                  for="bio"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >자기소개</label
                >
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  class="w-full p-2 border rounded"
                >${e.bio}</textarea
                >
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white p-2 rounded font-bold"
              >
                프로필 업데이트
              </button>
            </form>
          </div>
        </main>
  `};document.body.addEventListener("submit",function(e){if(e.target&&e.target.id==="profile-form"){e.preventDefault();const t=document.getElementById("username").value,l=document.getElementById("email").value,i=document.getElementById("bio").value;localStorage.setItem("user",JSON.stringify({username:t,email:l,bio:i}))}});const r={state:{loggedIn:!!localStorage.getItem("user")},setLoggedIn(e){this.state.loggedIn=e}},h=location.hostname.includes("github.io"),n=h?"/front_5th_chapter1-1":"",f=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input type="text" id="username" placeholder="사용자 이름" class="w-full p-2 border rounded" required>
        </div>
        <div class="mb-6">
          <input type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`;document.body.addEventListener("submit",function(e){if(e.target&&e.target.id==="login-form"){e.preventDefault();const t=document.getElementById("username").value;t&&(localStorage.setItem("user",JSON.stringify({username:t,email:"",bio:""})),r.setLoggedIn(!0),window.history.pushState({},"",n+"/"),a())}});const x=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,c=e=>(location.pathname.replace(n,"")||"/")===e,y=()=>{localStorage.removeItem("user"),r.setLoggedIn(!1),window.history.pushState({},"",n+"/login"),a()};document.body.addEventListener("click",function(e){e.target&&e.target.id==="logout"&&(e.preventDefault(),y())});const v=e=>`
  <header class="bg-blue-600 text-white p-4 sticky top-0">
    <h1 class="text-2xl font-bold">항해플러스</h1>
  </header>

  <nav class="bg-white shadow-md p-2 sticky top-14">
    <ul class="flex justify-around">
      <li><a href="/" class="${c("/")?"text-blue-600":"text-gray-600"}">홈</a></li>
      ${e?`
            <li><a href="/profile" class="${c("/profile")?"text-blue-600":"text-gray-600"}">프로필</a></li>
            <li><a href="" id="logout" class="text-gray-600">로그아웃</a></li>
          `:`
            <li><a href="/login" class="${c("/login")?"text-blue-600":"text-gray-600"}">로그인</a></li>
          `}
    </ul>
  </nav>
`,w=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,u=e=>`
<div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
    ${v(r.state.loggedIn)}
        ${e}
    ${w()}
    </div>
</div>
`,m={"/":()=>u(b()),"/profile":()=>u(p()),"/login":f,404:x},a=()=>{const e=window.location.pathname.replace(n,"")||"/",t=document.querySelector("#root");if(e==="/login"&&r.state.loggedIn){window.history.pushState({},"",n+"/"),t.innerHTML=u(b());return}if(e==="/profile"&&!r.state.loggedIn){window.history.pushState({},"",n+"/login"),t.innerHTML=f();return}const l=m[e]||m[404];t.innerHTML=l()};window.addEventListener("popstate",a);document.addEventListener("DOMContentLoaded",()=>{a(),document.body.addEventListener("click",e=>{if(e.target.matches('a[href^="/"]')){e.preventDefault();const t=e.target.getAttribute("href");window.history.pushState({},"",n+t),a()}})});
