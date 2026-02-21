# Git 操作手册 / Git Workflow Manual

本仓库采用双主干分支模型：
- `main`：稳定/发布分支（未来 CI/CD 的发布来源）
- `dev`：日常开发集成分支

This repository uses a two-branch model:
- `main`: stable/release branch (future CI/CD release source)
- `dev`: integration branch for daily development

---

## 1) 角色 / Roles

### 项目拥有者 / Owner (Maintainer)
- 维护分支保护规则（Branch Protection）
- 审核并合并 PR 到 `dev`
- 在发布窗口将 `dev` 通过 PR 合并到 `main`
- 处理紧急修复（hotfix）并同步回 `dev`

### 协作者 / Collaborator
- 仅在个人工作分支（`feature/*`、`fix/*`、`chore/*`）上开发
- 通过 PR 将变更合并到 `dev`
- 不直接 push 到 `dev` 或 `main`

---

## 2) 分支规则 / Branch Rules

### 受保护分支 / Protected branches
- `main`、`dev` 均为受保护分支
- 禁止直接 push 到 `main`、`dev`（必须通过 PR）
- 禁止 force push
- 禁止删除受保护分支

`main` and `dev` are protected:
- No direct pushes (PR required)
- No force-push
- No deletion of protected branches

### 工作分支命名 / Working branch naming
- 新功能：`feature/<short-description>`
- 修复：`fix/<short-description>`
- 重构/工具：`chore/<short-description>`
- 紧急修复：`hotfix/<issue>`（仅在需要直接修复 `main` 时）

---

## 3) GitHub 设置 / GitHub Settings (Branch Protection)

### 规则：`main`（严格 / Strict）
建议开启：
- Require a pull request before merging
- Require approvals (>= 1)
- Dismiss stale approvals
- Require conversation resolution before merging
- Require status checks to pass before merging（接入 CI 后配置 checks）
- Do not allow force pushes
- Do not allow deletions
- (Optional) Include administrators
- (Optional) Require linear history

### 规则：`dev`（可控 / Controlled）
建议开启：
- Require a pull request before merging
- Require approvals (>= 1)
- Dismiss stale approvals
- Require conversation resolution before merging
- Require status checks to pass before merging（接入 CI 后配置 checks）
- Do not allow force pushes
- Do not allow deletions

---

## 4) 协作者工作流 / Collaborator Workflow

### Step C1: 同步 `dev` / Sync `dev`
```bash
git checkout dev
git pull origin dev
```

### Step C2: 从 `dev` 创建工作分支 / Create a working branch from `dev`

```bash
git checkout -b feature/<short-description>
# example: git checkout -b feature/login-api
```

### Step C3: 开发并提交 / Develop and commit

```bash
git add .
git commit -m "feat: <message>"
```

### Step C4: 推送工作分支 / Push working branch

```bash
git push -u origin feature/<short-description>
```

### Step C5: 创建 PR 合并到 `dev` / Open PR into `dev`

GitHub PR 设置：

* Base: `dev`
* Compare: `feature/*` / `fix/*` / `chore/*`
* 请求审核（Owner / Maintainer）
* 根据审核意见更新同一分支并继续 push

### Step C6: 分支落后时同步 / Sync when branch is behind

当 `dev` 有更新，需要同步到工作分支：

```bash
git checkout dev
git pull origin dev
git checkout feature/<short-description>
git merge dev
# resolve conflicts if any
git push
```

---

## 5) 拥有者工作流 / Owner (Maintainer) Workflow

### Step O1: 审核并合并 PR 到 `dev` / Review & merge PRs into `dev`

审核建议：

* PR 目标分支为 `dev`
* 改动范围清晰且尽量小
* 不包含密钥/隐私数据
* 基本运行/测试通过（如适用）

合并建议：

* 推荐使用 **Squash merge**（一个 PR 合并为一个提交）
* 合并后删除工作分支（可在仓库设置中自动删除）

### Step O2: 发布流程（`dev` → `main`）/ Release flow (`dev` → `main`)

当 `dev` 达到可发布状态：

1. 创建 PR：`dev` → `main`
2. 确保 CI/检查通过（接入 CI 后）
3. 合并到 `main`
4. （可选）打 tag / 创建 Release

---

## 6) 紧急修复流程 / Hotfix Flow

仅在 `main` 需要紧急修复时使用。

### Step H1: 从 `main` 创建 hotfix 分支 / Create hotfix from `main`

```bash
git checkout main
git pull origin main
git checkout -b hotfix/<issue>
```

### Step H2: 修复并提交 / Fix and commit

```bash
git add .
git commit -m "fix: <message>"
git push -u origin hotfix/<issue>
```

### Step H3: PR 合并到 `main` / PR into `main`

* 创建 PR：`hotfix/*` → `main`
* 审核通过后合并

### Step H4: 回灌到 `dev` / Backport to `dev`

`main` 合并后，确保 `dev` 同步该修复：

* 创建 PR：`main` → `dev`

  * 或在新分支中 cherry-pick 后 PR 到 `dev`

---

## 7) 规范 / Do & Don't

### Do

* PR 尽量小且聚焦
* 提交信息清晰（建议：`feat:` `fix:` `chore:`）
* PR 描述说明变更内容、影响范围、测试方式

### Don't

* 不直接 push 到 `dev` 或 `main`
* 不提交密钥（`.env`、API keys、密码、证书）
* 不在共享分支上 force push

```
::contentReference[oaicite:0]{index=0}
```
