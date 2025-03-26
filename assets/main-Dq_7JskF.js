import"./modulepreload-polyfill-B5Qt9EMX.js";const m=[{name:"홍길동",time:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{name:"김철수",time:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{name:"이영희",time:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{name:"박민수",time:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{name:"정수연",time:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],d=()=>`
      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">
          ${m.map(t=>`
            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">${t.name}</p>
                  <p class="text-sm text-gray-500">${t.time}</p>
                </div>
              </div>
              <p>${t.content}</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>
          `).join("")}
        </div>
      </main>
`,b=()=>{const t=JSON.parse(localStorage.getItem("user"))||{username:"",email:"",bio:""};return`
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
                  value="${t.username}"
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
                  value="${t.email}"
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
                >${t.bio}</textarea
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
  `};document.body.addEventListener("submit",function(t){if(t.target&&t.target.id==="profile-form"){t.preventDefault();const e=document.getElementById("username").value,l=document.getElementById("email").value,u=document.getElementById("bio").value;localStorage.setItem("user",JSON.stringify({username:e,email:l,bio:u}))}});const a={state:{loggedIn:!!localStorage.getItem("user")},setLoggedIn(t){this.state.loggedIn=t}},g=location.hostname.includes("github.io"),o=g?"/front_5th_chapter1-1":"",c=()=>`
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
`;document.body.addEventListener("submit",function(t){if(t.target&&t.target.id==="login-form"){t.preventDefault();const e=document.getElementById("username").value;e&&(localStorage.setItem("user",JSON.stringify({username:e,email:"",bio:""})),a.setLoggedIn(!0),window.history.pushState({},"",o+"/"),s())}});const p=()=>`
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
`,n=t=>(location.pathname.replace(o,"")||"/")===t,f=()=>{localStorage.removeItem("user"),a.setLoggedIn(!1),window.history.pushState({},"",o+"/login"),s()};document.body.addEventListener("click",function(t){t.target&&t.target.id==="logout"&&(t.preventDefault(),f())});const h=t=>`
  <header class="bg-blue-600 text-white p-4 sticky top-0">
    <h1 class="text-2xl font-bold">항해플러스</h1>
  </header>

  <nav class="bg-white shadow-md p-2 sticky top-14">
    <ul class="flex justify-around">
      <li><a href="/" class="${n("/")?"text-blue-600":"text-gray-600"}">홈</a></li>
      ${t?`
            <li><a href="/profile" class="${n("/profile")?"text-blue-600":"text-gray-600"}">프로필</a></li>
            <li><a href="" id="logout" class="text-gray-600">로그아웃</a></li>
          `:`
            <li><a href="/login" class="${n("/login")?"text-blue-600":"text-gray-600"}">로그인</a></li>
          `}
    </ul>
  </nav>
`,x=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,r=t=>`
<div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
    ${h(a.state.loggedIn)}
        ${t}
    ${x()}
    </div>
</div>
`,i={"/":()=>r(d()),"/profile":()=>r(b()),"/login":c,"*":p},s=()=>{const t=window.location.pathname.replace(o,"")||"/",e=document.querySelector("#root");if(t==="/login"&&a.state.loggedIn){window.history.pushState({},"",o+"/"),e.innerHTML=r(d());return}if(t==="/profile"&&!a.state.loggedIn){window.history.pushState({},"",o+"/login"),e.innerHTML=c();return}const l=i[t]||i["*"];e.innerHTML=l()};window.addEventListener("popstate",s);document.addEventListener("DOMContentLoaded",()=>{s(),document.body.addEventListener("click",t=>{if(t.target.matches('a[href^="/"]')){t.preventDefault();const e=t.target.getAttribute("href");window.history.pushState({},"",o+e),s()}})});
