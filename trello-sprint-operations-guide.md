# Trello Sprint 操作手册

## 1. 文档目的与适用范围
本手册用于说明在 Clinic Care Platform 项目中，Trello 管理者在每个 Sprint 需要执行的具体操作。

- 交付节奏：5 周 / 5 个 Sprint（每 Sprint 1 周）
- 精简看板流程：`Backlog -> In Progress -> Code Review and Testing -> Done`
- 依据文档：`week9-full-project-pack.md`

## 2. Trello 看板固定配置
### 2.1 列定义（精简版）
- `Backlog`：所有未完成事项（含待做、已承诺但未开工、下轮候选）
- `In Progress`：已开工开发中的卡
- `Code Review and Testing`：PR 评审与测试验证中的卡
- `Done`：满足 DoD、可演示的卡

### 2.2 在精简列下标记 Sprint 范围
由于不再有 `Ready` 和 `Sprint To Do` 列，Sprint 承诺范围用卡片属性管理：
- 标签：`Sprint 1` / `Sprint 2` / `Sprint 3` / `Sprint 4` / `Sprint 5`
- 自定义字段（建议）：`Sprint`、`Priority`、`Estimate`
- 截止日期：本 Sprint 最后一天

说明：Sprint 期间，已承诺但尚未开工的卡片仍在 `Backlog`，通过 `Sprint X` 标签识别。

### 2.3 卡片必填项
每张用户故事卡必须包含：
- 用户故事描述
- 验收标准（Acceptance Criteria）
- 负责人（`Tianxiang` / `Weizhao`）
- PR/Commit 链接
- DoD 检查清单
- 标签（建议）：`backend`、`frontend`、`devops`、`qa`、`security`、`docs`、`blocked`、`Sprint X`

### 2.4 标准检查清单（每卡复用）
1. `Implementation`
- API/UI 功能完成
- 关键校验和异常处理完成

2. `Quality`
- 相关测试已补充/更新
- CI 通过

3. `Security`
- 涉及权限时，JWT/RBAC 行为已验证

4. `Documentation`
- API 变更时 Swagger 已更新
- README/部署文档（如有变更）已更新

5. `Demo Evidence`
- 演示步骤、截图或日志证据已附加

## 3. Trello 管理者每周操作节奏
### 3.1 Sprint 开始前（Planning 前后）
- 清理 `Backlog`，拆分过大的卡片
- 校验候选卡的验收标准是否清晰、可测试
- 选出本 Sprint 承诺卡，统一打 `Sprint X` 标签
- 补齐负责人、估时、截止日期
- 创建本 Sprint Goal 卡（打 `Sprint X` 标签，置顶于 `Backlog`）
- 将依赖与阻塞条件写入卡片描述

### 3.2 Sprint 进行中（日常管控）
- 每日站会前进行一次看板巡检
- 严格按规则移动卡片：
  - `Backlog -> In Progress`：实际开工
  - `In Progress -> Code Review and Testing`：PR 已创建并已关联
  - `Code Review and Testing -> Done`：DoD 全部满足
- 出现阻塞立即加 `blocked` 标签并注明解阻动作
- 控制并行在制项（WIP），避免大量卡长期停留在 `In Progress`
- 持续检查 PR 链接、测试结果、证据附件是否更新

### 3.3 Sprint 收尾（Review + Retro）
- 逐张核验 `Done` 卡是否全部满足 DoD
- 收集并补齐演示证据
- 未完成的 `Sprint X` 卡保留在 `Backlog`，更新进展与剩余工作
- 对延续到下个 Sprint 的卡，移除旧 `Sprint X` 标签并打新标签
- 新建复盘改进卡，加入下个 Sprint 标签
- 评审完成后归档已完成 Sprint 的历史卡片/清单

## 4. 各 Sprint 的 Trello 具体操作（中英文）
### 4.1 中文版
#### Sprint 1：基础搭建（Foundation / Docker / CI）
开始前：
- 创建并准备 `Sprint 1` 卡片：Django/DRF 骨架、React/TS 骨架、PostgreSQL、Docker Compose、GitHub Actions + PyTest、`/health`
- 验收标准写成证据型：`docker compose up` 可运行、`/health` 返回 200、CI 绿灯

进行中：
- 每日检查“骨架开发 -> 集成 -> 验证”链路是否连通
- 基础设施卡在 `In Progress` 超过 1 天且无 PR，立即追踪

收尾：
- 确认基线能力卡全部进入 `Done` 且有日志/截图证据
- 遗留优化项保留在 `Backlog` 并改为下个 Sprint 标签

#### Sprint 2：认证与权限（JWT / RBAC）
开始前：
- 创建并准备 `Sprint 2` 卡片：注册/登录/刷新、角色定义、RBAC、认证 UI、认证与权限测试
- 验收标准明确负向场景：401/403 行为正确

进行中：
- 认证卡必须附端点测试证据
- 权限缺陷统一打 `security` 标签并提升优先级

收尾：
- 确认 JWT 签发正确
- 确认受保护路由未授权/越权返回 401/403
- 确认认证测试在 CI 通过

#### Sprint 3：预约 MVP（端到端）
开始前：
- 创建并准备 `Sprint 3` 卡片：预约 CRUD、医生日程、预约前端、表单校验、集成与回归
- 验收标准加入数据隔离：患者只能看到自己的预约数据

进行中：
- 按“API -> UI -> 测试”链路跟踪
- 集成阻塞卡当天升级处理，不跨天悬置

收尾：
- 确认预约端到端演示可跑通
- 确认预约测试和回归证据已附卡

#### Sprint 4：处方与病历
开始前：
- 创建并准备 `Sprint 4` 卡片：患者档案/病史、医生开处方、患者只读历史、医生/患者页面、负向 RBAC 测试、Swagger 更新

进行中：
- 未关联 PR 的卡片不得进入 `Code Review and Testing`
- 权限缺陷标记 `security` 并持续高优先级跟踪

收尾：
- 确认医生可创建处方
- 确认患者可读取本人处方历史
- 确认非法访问被 403 拦截
- 确认 Swagger 已同步更新

#### Sprint 5：语音记录 MVP + Te Reo + AWS 加固
开始前：
- 创建并准备 `Sprint 5` 卡片：语音转文本、Te Reo Maori 切换、缺陷修复、部署文档/环境变量、AWS EC2 + Compose、最终回归

进行中：
- 设立部署就绪控制卡并每日更新
- 语音与多语言卡必须附演示证据

收尾：
- 确认语音“录制/保存/查看”可用
- 确认关键页面可切换 Te Reo Maori
- 确认 AWS 部署证据完整
- 确认 CI 保持绿灯

### 4.2 Sprint-by-Sprint Trello Playbook (English)
#### Sprint 1 - Foundation (Scaffolding, Docker, CI Baseline)
Kickoff:
- Create and tag `Sprint 1` cards for backend scaffold, frontend scaffold, PostgreSQL setup, Docker Compose, CI bootstrap, and `/health`
- Set evidence-based acceptance criteria: stack boots via `docker compose up`, health check returns 200, CI pipeline is green

In-flight:
- Run a daily flow check across scaffold -> integration -> verification
- Escalate infra cards that sit in `In Progress` for more than one day without a linked PR

Closeout:
- Move only verifiable baseline cards to `Done` with logs/screenshots attached
- Carry unfinished hardening work back to `Backlog` with the next sprint label

#### Sprint 2 - Authentication and Authorization (JWT, RBAC)
Kickoff:
- Prepare `Sprint 2` cards for register/login/refresh, role model, RBAC enforcement, auth UI, and auth test coverage
- Include explicit negative-path criteria for 401 and 403 responses

In-flight:
- Require endpoint-level test evidence on every auth card
- Mark permission defects with `security` and treat them as high-priority blockers

Closeout:
- Validate token issuance on login
- Validate authorization boundaries on protected routes (401/403)
- Confirm auth tests are passing in CI

#### Sprint 3 - Appointment MVP (End-to-End Booking Flow)
Kickoff:
- Prepare `Sprint 3` cards for appointment create/list/cancel/reschedule APIs, doctor schedule view, booking UI, validation rules, and integration/regression checks
- Add data-isolation criteria so patients can access only their own records

In-flight:
- Track work as an API -> UI -> test pipeline
- Escalate integration blockers the same day; no overnight carry within active blockers

Closeout:
- Verify the full booking flow is demo-ready
- Attach regression and functional test evidence to completed cards

#### Sprint 4 - Prescriptions and Patient Records
Kickoff:
- Prepare `Sprint 4` cards for patient profile/history, prescription authoring flow, patient read-only history view, role-based UI pages, negative RBAC tests, and Swagger updates

In-flight:
- Do not move cards into `Code Review and Testing` without linked PRs
- Track authorization bugs under `security` until closure

Closeout:
- Verify doctors can issue prescriptions
- Verify patients can read their own prescription history
- Verify unauthorized access is blocked with 403
- Verify API documentation is updated

#### Sprint 5 - Voice Notes MVP, Te Reo Toggle, and AWS Hardening
Kickoff:
- Prepare `Sprint 5` cards for speech-to-text capture/storage, Te Reo toggle on key views, bug-fix and error-handling hardening, deployment docs/env setup, AWS EC2 + Compose path, and final regression sweep

In-flight:
- Maintain a deployment-readiness tracker card and update it daily
- Require demo artifacts for voice-note and language-toggle cards

Closeout:
- Verify the record/save/view voice-note flow
- Verify Te Reo toggle on target screens
- Verify deployment evidence for AWS path
- Keep CI green through sprint closure

## 5. 与 Scrum 仪式的 Trello 对应动作
- `Sprint Planning`
  - 确认本 Sprint 卡片并打 `Sprint X` 标签
  - 校验卡片完整性（AC/Owner/Estimate/Due Date）

- `Daily Stand-up`
  - 更新卡片状态与阻塞说明
  - 会前/会后立即同步看板位置

- `Backlog Refinement`
  - 拆分大卡
  - 细化验收标准
  - 调整优先级，准备下个 Sprint 候选卡

- `Sprint Review`
  - 只基于 `Done` 卡演示
  - 反馈转为新卡进入 `Backlog`

- `Retrospective`
  - 新建流程改进卡
  - 打上下一 Sprint 标签

## 6. `Done` 列准入规则（DoD Gate）
卡片只有在以下条件全部满足时才能移动到 `Done`：
- PR 已合并
- CI 通过且相关测试通过
- 涉及安全时，权限校验通过
- 涉及 API 变更时，Swagger 已更新
- 验收标准满足并可演示

## 7. 每个 Sprint 可复用的管理员检查单
1. 本 Sprint 承诺卡已筛选并打 `Sprint X` 标签
2. 每张卡 AC、负责人、估时、截止日期完整
3. DoD 清单已挂载到每张卡
4. 每日看板巡检节奏已执行
5. Review 证据收集方案已落实
6. 未完成卡已更新状态并改标到下个 Sprint
7. Retro 改进行动卡已创建并打下 Sprint 标签
