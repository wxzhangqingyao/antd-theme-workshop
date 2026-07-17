---
name: "enterprise-frontend-guide"
description: "Enterprise-grade frontend development standards and best practices for React + Ant Design projects. Invoke when creating or developing enterprise B-end applications with React and Ant Design."
---

# 企业级前端开发规范

## 技术栈

- React 19
- TypeScript (Strict Mode)
- Vite 6
- pnpm
- React Router
- Ant Design v6
- Ant Design Icons
- CSS-in-JS

---

## Design System 规范

### 优先原则
- 优先使用 Ant Design v6 官方能力
- 优先复用已有组件，不重复造轮子
- 优先组合组件，而非重新封装
- 统一使用 Design Token
- 所有组件支持主题扩展

### 颜色规范
- 不得写死颜色，优先使用 Token
- 主色：`colorPrimary`
- 边框色：`colorBorder`
- 背景色：`colorBgBase`

### 尺寸规范（8px Grid）
- 间距：8, 16, 24, 32, 40, 48
- 圆角：8px
- 阴影：使用 Ant Design 默认 Shadow

---

## UI 设计规范

### 企业级 B 端设计原则
- 信息层级清晰
- 留白舒适
- 布局规整
- 视觉统一
- 科技感、专业感
- 高易读性
- 符合 Ant Design Design Language

### 优先组件
- Card、Flex、Space、Grid
- Tabs、Segmented、Table、Descriptions
- Statistic、Tag、Badge

---

## 代码风格规范

### 架构原则
- 单一职责
- 高内聚低耦合
- 易维护、易扩展
- 命名清晰
- 不写冗余代码
- 不过度封装
- 不新增无意义 Hooks 和 Utils

### 目录结构
```
src/
├── components/        # 通用组件
├── pages/            # 页面组件
├── layouts/          # 布局组件
├── hooks/            # 自定义 Hooks
├── utils/            # 工具函数
├── routes/           # 路由配置
└── styles/           # 全局样式
```

---

## 交互规范

### 状态处理
- Hover：悬停效果
- Active：点击状态
- Disabled：禁用状态
- Loading：加载状态
- Empty：空状态
- Error：错误状态

### 增强体验
- 必要时增加 Skeleton 骨架屏
- 必要时增加 Empty 空状态组件
- 保证交互自然流畅

---

## 响应式规范

### 支持分辨率
- 1920px
- 1680px
- 1440px
- 1366px
- 1280px

### 实现原则
- 使用 Flex 和 Grid 布局
- 避免固定宽度
- 保证页面不会布局错乱

---

## 主题规范

### 默认主题配置
```ts
{
  token: {
    colorPrimary: "#0085D0",
    borderRadius: 8,
    colorBorder: "#d9d9d9"
  }
}
```

### 主题使用
- 优先使用项目已有 Theme Provider
- 不得写死颜色，使用 Token
- 支持未来主题扩展

---

## 输出规范

### 实现步骤
1. **理解需求**：概括需求，分析页面组成，说明实现思路
2. **页面规划**：页面结构、组件拆分、布局方案、交互方案
3. **实现代码**：输出可运行代码，保证 TypeScript 无报错
4. **修改说明**：新增文件、修改文件、目录结构、组件关系
5. **优化建议**：主动说明更好的实现方式

### 自检清单
- [ ] TypeScript 是否通过
- [ ] ESLint 是否通过
- [ ] 是否存在重复代码
- [ ] 是否存在 Magic Number
- [ ] 是否符合 React Best Practice
- [ ] 是否符合 Ant Design v6 Best Practice
- [ ] 是否符合 Design System
- [ ] 是否符合企业级后台设计规范
- [ ] 是否正确使用 Design Token
- [ ] 是否支持主题扩展
- [ ] 是否支持响应式
- [ ] 是否存在性能问题
- [ ] 是否存在可维护性问题

---

## 使用建议

此 Skill 建议与 `antd` Skill 配合使用，实现：
1. `antd` Skill 提供 Ant Design 组件的专业知识
2. 本 Skill 提供企业级开发规范和最佳实践

两者结合可确保：
- 组件使用正确
- 代码质量高
- 设计规范统一
- 项目可维护性强
