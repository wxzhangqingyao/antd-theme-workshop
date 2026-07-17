import { useState, useEffect, useRef } from 'react';
import {
  ConfigProvider,
  Button,
  Input,
  Select,
  Radio,
  Checkbox,
  Switch,
  Slider,
  Rate,
  Progress,
  Card,
  Badge,
  Tag,
  Table,
  Tabs,
  Modal,
  Alert,
  message,
  Space,
  Row,
  Col,
  Typography,
  Divider,
  Steps,
  Breadcrumb,
  Avatar,
  Empty,
  Spin,
  Popover,
  Tooltip,
  Popconfirm,
  DatePicker,
  TimePicker,
  Upload,
  Form,
  Layout,
  Menu,
  Dropdown,
  Statistic,
  Timeline,
  Carousel,
  Collapse,
  Descriptions,
  Segmented,
  Image,
  Anchor,
  Affix,
  AutoComplete,
  Calendar,
  Cascader,
  ColorPicker,
  Drawer,
  FloatButton,
  Flex,
  InputNumber,
  List,
  Mentions,
  Pagination,
  QRCode,
  Result,
  Skeleton,
  Tree,
  TreeSelect,
  Transfer,
  Tour,
  Watermark,
  theme
} from 'antd';
import {
  UserOutlined,
  BellOutlined,
  SettingOutlined,
  SearchOutlined,
  PlusOutlined,
  DownloadOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  CheckOutlined,
  CloseOutlined,
  InfoCircleOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  UploadOutlined,
  FileTextOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  FolderOutlined,
  MessageOutlined,
  TeamOutlined,
  DashboardOutlined,
  LeftOutlined,
  RightOutlined,
  UpOutlined,
  DownOutlined,
  AppstoreOutlined,
  LayoutOutlined,
  MenuUnfoldOutlined,
  FormOutlined,
  BarChartOutlined,
  AlertOutlined,
  MoreOutlined,
  SunOutlined,
  MoonOutlined,
  ReloadOutlined
} from '@ant-design/icons';

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fff', width: '20px', height: '20px' }}>
    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/>
    <path d="M20 2v4"/>
    <path d="M22 4h-4"/>
    <circle cx="4" cy="20" r="2"/>
  </svg>
);

const { Title, Text, Link, Paragraph } = Typography;
const { Header, Content, Sider } = Layout;

const themeColors = [
  { name: '默认', value: '#1677ff', icon: '/logo-antd.svg' },
  { name: '移动', value: '#0085D0', icon: '/logo-china-mobile.svg' },
  { name: '联通', value: '#E60027', icon: '/logo-china-unicom.svg' },
  { name: '电信', value: '#3473F4', icon: '/logo-china-telecom.svg' },
];

const componentCategories = [
  {
    key: 'general',
    name: 'General',
    nameZh: '通用',
    icon: <AppstoreOutlined />,
    components: [
      { name: 'Button', nameZh: '按钮' },
      { name: 'Icon', nameZh: '图标' },
      { name: 'Typography', nameZh: '排版' },
      { name: 'FloatButton', nameZh: '悬浮按钮' },
    ]
  },
  {
    key: 'layout',
    name: 'Layout',
    nameZh: '布局',
    icon: <LayoutOutlined />,
    components: [
      { name: 'Layout', nameZh: '布局' },
      { name: 'Grid', nameZh: '栅格' },
      { name: 'Space', nameZh: '间距' },
      { name: 'Divider', nameZh: '分割线' },
      { name: 'Flex', nameZh: '弹性布局' },
    ]
  },
  {
    key: 'navigation',
    name: 'Navigation',
    nameZh: '导航',
    icon: <MenuUnfoldOutlined />,
    components: [
      { name: 'Menu', nameZh: '导航菜单' },
      { name: 'Dropdown', nameZh: '下拉菜单' },
      { name: 'Breadcrumb', nameZh: '面包屑' },
      { name: 'Pagination', nameZh: '分页' },
      { name: 'Steps', nameZh: '步骤条' },
      { name: 'Anchor', nameZh: '锚点' },
      { name: 'Affix', nameZh: '固钉' },
    ]
  },
  {
    key: 'data-entry',
    name: 'Data Entry',
    nameZh: '数据录入',
    icon: <FormOutlined />,
    components: [
      { name: 'Form', nameZh: '表单' },
      { name: 'Input', nameZh: '输入框' },
      { name: 'InputNumber', nameZh: '数字输入框' },
      { name: 'Select', nameZh: '选择器' },
      { name: 'TreeSelect', nameZh: '树选择' },
      { name: 'Cascader', nameZh: '级联选择' },
      { name: 'Checkbox', nameZh: '多选框' },
      { name: 'Radio', nameZh: '单选框' },
      { name: 'Switch', nameZh: '开关' },
      { name: 'Slider', nameZh: '滑动输入条' },
      { name: 'Rate', nameZh: '评分' },
      { name: 'DatePicker', nameZh: '日期选择框' },
      { name: 'TimePicker', nameZh: '时间选择框' },
      { name: 'Mentions', nameZh: '提及' },
      { name: 'Upload', nameZh: '上传' },
      { name: 'ColorPicker', nameZh: '颜色选择器' },
      { name: 'Transfer', nameZh: '穿梭框' },
      { name: 'AutoComplete', nameZh: '自动完成' },
    ]
  },
  {
    key: 'data-display',
    name: 'Data Display',
    nameZh: '数据展示',
    icon: <BarChartOutlined />,
    components: [
      { name: 'Table', nameZh: '表格' },
      { name: 'List', nameZh: '列表' },
      { name: 'Card', nameZh: '卡片' },
      { name: 'Descriptions', nameZh: '描述列表' },
      { name: 'Statistic', nameZh: '统计数值' },
      { name: 'Tag', nameZh: '标签' },
      { name: 'Badge', nameZh: '徽标数' },
      { name: 'Avatar', nameZh: '头像' },
      { name: 'Progress', nameZh: '进度条' },
      { name: 'Timeline', nameZh: '时间轴' },
      { name: 'Calendar', nameZh: '日历' },
      { name: 'Empty', nameZh: '空状态' },
      { name: 'Image', nameZh: '图片' },
      { name: 'Popover', nameZh: '气泡卡片' },
      { name: 'Tooltip', nameZh: '文字提示' },
      { name: 'Tabs', nameZh: '标签页' },
      { name: 'Collapse', nameZh: '折叠面板' },
      { name: 'Carousel', nameZh: '走马灯' },
      { name: 'Segmented', nameZh: '分段控制器' },
      { name: 'QRCode', nameZh: '二维码' },
      { name: 'Tree', nameZh: '树形控件' },
      { name: 'Tour', nameZh: '漫游式引导' },
    ]
  },
  {
    key: 'feedback',
    name: 'Feedback',
    nameZh: '反馈',
    icon: <AlertOutlined />,
    components: [
      { name: 'Alert', nameZh: '警告提示' },
      { name: 'Modal', nameZh: '对话框' },
      { name: 'Drawer', nameZh: '抽屉' },
      { name: 'Message', nameZh: '全局提示' },
      { name: 'Notification', nameZh: '通知提醒框' },
      { name: 'Spin', nameZh: '加载中' },
      { name: 'Skeleton', nameZh: '骨架屏' },
      { name: 'Result', nameZh: '结果' },
      { name: 'Popconfirm', nameZh: '气泡确认框' },
      { name: 'Watermark', nameZh: '水印' },
    ]
  },
];

const ComponentPreview = ({ componentName }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [rateValue, setRateValue] = useState(4);
  const [switchValue, setSwitchValue] = useState(true);
  const [form] = Form.useForm();

  const tableColumns = [
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '年龄', dataIndex: 'age', key: 'age' },
    { title: '状态', dataIndex: 'status', key: 'status' },
  ];
  const tableData = [
    { key: '1', name: '张三', age: 28, status: '在线' },
    { key: '2', name: '李四', age: 32, status: '离线' },
  ];

  const menuItems = [
    { key: '1', label: '选项一' },
    { key: '2', label: '选项二' },
    { key: '3', label: '选项三' },
  ];

  const renderComponent = () => {
    switch (componentName) {
      case 'Button':
        return (
          <div>
            <Paragraph>按钮用于开始一个即时操作。</Paragraph>
            <Space wrap>
              <Button type="primary">主要按钮</Button>
              <Button>默认按钮</Button>
              <Button type="dashed">虚线按钮</Button>
              <Button type="text">文本按钮</Button>
              <Button type="primary" danger>危险按钮</Button>
              <Button type="primary" ghost>幽灵按钮</Button>
              <Button type="primary" disabled>禁用按钮</Button>
              <Button type="primary" loading>加载中</Button>
              <Button type="primary" size="large">大号</Button>
              <Button type="primary" size="small">小号</Button>
              <Button type="primary" icon={<PlusOutlined />}>图标按钮</Button>
            </Space>
          </div>
        );
      case 'Icon':
        return (
          <div>
            <Paragraph>语义化的矢量图形。</Paragraph>
            <Space wrap size="large">
              <UserOutlined style={{ fontSize: 24 }} />
              <BellOutlined style={{ fontSize: 24 }} />
              <SettingOutlined style={{ fontSize: 24 }} />
              <SearchOutlined style={{ fontSize: 24 }} />
              <PlusOutlined style={{ fontSize: 24 }} />
              <EditOutlined style={{ fontSize: 24 }} />
              <DeleteOutlined style={{ fontSize: 24 }} />
              <CheckOutlined style={{ fontSize: 24 }} />
              <CloseOutlined style={{ fontSize: 24 }} />
              <InfoCircleOutlined style={{ fontSize: 24 }} />
            </Space>
          </div>
        );
      case 'Typography':
        return (
          <div>
            <Paragraph>文本的基本格式。</Paragraph>
            <Title level={1}>一级标题</Title>
            <Title level={2}>二级标题</Title>
            <Title level={3}>三级标题</Title>
            <Title level={4}>四级标题</Title>
            <Paragraph>这是一段普通的段落文本，用于展示 Typography 组件的基本样式。</Paragraph>
            <Text strong>粗体文本</Text>
            <Text type="primary">主色文本</Text>
            <Text type="success">成功文本</Text>
            <Text type="warning">警告文本</Text>
            <Text type="danger">危险文本</Text>
            <Text disabled>禁用文本</Text>
            <Link href="#">链接文本</Link>
          </div>
        );
      case 'FloatButton':
        return (
          <div style={{ height: '200px', position: 'relative' }}>
            <Paragraph>悬浮于页面上方的按钮。</Paragraph>
            <FloatButton icon={<PlusOutlined />} />
            <FloatButton.Group
              trigger="click"
              type="primary"
              style={{ right: 24 }}
              icon={<PlusOutlined />}
              items={[
                { icon: <FileTextOutlined />, label: '新建文件' },
                { icon: <FolderOutlined />, label: '新建文件夹' },
                { icon: <UserOutlined />, label: '新建用户' },
              ]}
            />
          </div>
        );
      case 'Layout':
        return (
          <div>
            <Paragraph>协助进行页面级整体布局。</Paragraph>
            <Layout style={{ height: '200px' }}>
              <Sider width={100} theme="light">Sider</Sider>
              <Layout>
                <Header style={{ background: '#fff', padding: 16 }}>Header</Header>
                <Content style={{ padding: 16, background: '#f5f5f5' }}>Content</Content>
              </Layout>
            </Layout>
          </div>
        );
      case 'Grid':
        return (
          <div>
            <Paragraph>24 栅格系统。</Paragraph>
            <Row gutter={16}>
              <Col span={6}><div style={{ background: '#f5f5f5', padding: '16px', textAlign: 'center' }}>col-6</div></Col>
              <Col span={6}><div style={{ background: '#e8e8e8', padding: '16px', textAlign: 'center' }}>col-6</div></Col>
              <Col span={6}><div style={{ background: '#f5f5f5', padding: '16px', textAlign: 'center' }}>col-6</div></Col>
              <Col span={6}><div style={{ background: '#e8e8e8', padding: '16px', textAlign: 'center' }}>col-6</div></Col>
            </Row>
            <Row gutter={16} style={{ marginTop: 16 }}>
              <Col span={8}><div style={{ background: '#f5f5f5', padding: '16px', textAlign: 'center' }}>col-8</div></Col>
              <Col span={8}><div style={{ background: '#e8e8e8', padding: '16px', textAlign: 'center' }}>col-8</div></Col>
              <Col span={8}><div style={{ background: '#f5f5f5', padding: '16px', textAlign: 'center' }}>col-8</div></Col>
            </Row>
          </div>
        );
      case 'Space':
        return (
          <div>
            <Paragraph>设置组件之间的间距。</Paragraph>
            <Space>
              <Button>按钮1</Button>
              <Button>按钮2</Button>
              <Button>按钮3</Button>
            </Space>
            <Space direction="vertical" style={{ marginTop: 16 }}>
              <Button>垂直按钮1</Button>
              <Button>垂直按钮2</Button>
              <Button>垂直按钮3</Button>
            </Space>
          </div>
        );
      case 'Divider':
        return (
          <div>
            <Paragraph>区隔内容的分割线。</Paragraph>
            <Text>内容一</Text>
            <Divider />
            <Text>内容二</Text>
            <Divider orientation="left">左侧标题</Divider>
            <Text>内容三</Text>
            <Divider orientation="right">右侧标题</Divider>
            <Text>内容四</Text>
            <Divider dashed>虚线分割线</Divider>
            <Text>内容五</Text>
          </div>
        );
      case 'Flex':
        return (
          <div>
            <Paragraph>用于对齐的弹性布局容器。</Paragraph>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Flex gap="small" justify="center">
                <Button>按钮1</Button>
                <Button>按钮2</Button>
                <Button>按钮3</Button>
              </Flex>
              <Flex gap="middle" justify="space-between">
                <Button>左对齐</Button>
                <Button>右对齐</Button>
              </Flex>
              <Flex gap="large" align="center" style={{ height: '80px', background: '#f5f5f5' }}>
                <Button>垂直居中</Button>
              </Flex>
            </Space>
          </div>
        );
      case 'Menu':
        return (
          <div>
            <Paragraph>为页面和功能提供导航的菜单列表。</Paragraph>
            <Menu defaultSelectedKeys={['1']} mode="horizontal" items={menuItems} />
          </div>
        );
      case 'Dropdown':
        return (
          <div>
            <Paragraph>向下弹出的列表。</Paragraph>
            <Dropdown menu={{ items: menuItems }}>
              <Button>点击展开下拉菜单</Button>
            </Dropdown>
          </div>
        );
      case 'Breadcrumb':
        return (
          <div>
            <Paragraph>显示当前页面在系统层级结构中的位置。</Paragraph>
            <Breadcrumb items={[
              { title: '首页' },
              { title: '产品中心' },
              { title: '数码产品' },
              { title: '手机' },
            ]} />
          </div>
        );
      case 'Pagination':
        return (
          <div>
            <Paragraph>分页器用于分隔长列表。</Paragraph>
            <Space wrap>
              <Pagination defaultCurrent={1} total={50} />
              <Pagination defaultCurrent={2} total={50} showSizeChanger />
              <Pagination defaultCurrent={1} total={50} showQuickJumper />
            </Space>
          </div>
        );
      case 'Steps':
        return (
          <div>
            <Paragraph>引导用户按照流程完成任务的导航条。</Paragraph>
            <Steps current={1} items={[
              { title: '第一步' },
              { title: '第二步' },
              { title: '第三步' },
              { title: '第四步' },
            ]} />
          </div>
        );
      case 'Anchor':
        return (
          <div>
            <Paragraph>用于跳转到页面指定位置。</Paragraph>
            <Anchor affix={false} items={[
              { key: 'a', href: '#general', title: '通用' },
              { key: 'b', href: '#layout', title: '布局' },
              { key: 'c', href: '#navigation', title: '导航' },
            ]} />
          </div>
        );
      case 'Affix':
        return (
          <div>
            <Paragraph>将页面元素钉在可视范围。</Paragraph>
            <Affix offsetTop={10}>
              <Button type="primary">固定在顶部</Button>
            </Affix>
          </div>
        );
      case 'Form':
        return (
          <div>
            <Paragraph>高性能表单控件，自带数据域管理。</Paragraph>
            <Form form={form} layout="vertical" style={{ maxWidth: 400 }}>
              <Form.Item name="username" label="用户名" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="password" label="密码" rules={[{ required: true }]}>
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">提交</Button>
              </Form.Item>
            </Form>
          </div>
        );
      case 'Input':
        return (
          <div>
            <Paragraph>通过鼠标或键盘输入内容。</Paragraph>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Row gutter={16}>
                <Col span={8}><Input placeholder="普通输入框" /></Col>
                <Col span={8}><Input prefix={<SearchOutlined />} placeholder="带前缀" /></Col>
                <Col span={8}><Input suffix={<EyeOutlined />} placeholder="带后缀" /></Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}><Input disabled placeholder="禁用" /></Col>
                <Col span={8}><Input size="large" placeholder="大号" /></Col>
                <Col span={8}><Input size="small" placeholder="小号" /></Col>
              </Row>
              <Input.TextArea placeholder="多行文本域" rows={4} />
            </Space>
          </div>
        );
      case 'InputNumber':
        return (
          <div>
            <Paragraph>通过鼠标或键盘，输入范围内的数值。</Paragraph>
            <Space>
              <InputNumber min={1} max={10} defaultValue={5} />
              <InputNumber min={0} max={100} step={10} defaultValue={50} />
              <InputNumber disabled />
            </Space>
          </div>
        );
      case 'Select':
        return (
          <div>
            <Paragraph>下拉选择器。</Paragraph>
            <Space>
              <Select defaultValue="lucy" options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'tom', label: 'Tom' },
              ]} />
              <Select mode="multiple" placeholder="多选模式" options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'tom', label: 'Tom' },
              ]} />
              <Select allowClear placeholder="可清除" options={[{ value: 'jack', label: 'Jack' }]} />
            </Space>
          </div>
        );
      case 'TreeSelect':
        return (
          <div>
            <Paragraph>树型选择控件。</Paragraph>
            <TreeSelect
              treeData={[
                {
                  title: '父节点1',
                  value: 'parent1',
                  children: [
                    { title: '子节点1', value: 'child1' },
                    { title: '子节点2', value: 'child2' },
                  ],
                },
              ]}
              placeholder="请选择"
              style={{ width: 200 }}
            />
          </div>
        );
      case 'Cascader':
        return (
          <div>
            <Paragraph>级联选择框。</Paragraph>
            <Cascader
              options={[
                {
                  value: 'zhejiang',
                  label: '浙江',
                  children: [
                    { value: 'hangzhou', label: '杭州' },
                    { value: 'ningbo', label: '宁波' },
                  ],
                },
                {
                  value: 'jiangsu',
                  label: '江苏',
                  children: [
                    { value: 'nanjing', label: '南京' },
                    { value: 'suzhou', label: '苏州' },
                  ],
                },
              ]}
              placeholder="请选择"
            />
          </div>
        );
      case 'Checkbox':
        return (
          <div>
            <Paragraph>收集用户的多项选择。</Paragraph>
            <Space direction="vertical">
              <Checkbox.Group options={['Apple', 'Pear', 'Orange']} defaultValue={['Apple']} />
              <Space>
                <Checkbox indeterminate>全选</Checkbox>
                <Checkbox defaultChecked>选项1</Checkbox>
                <Checkbox>选项2</Checkbox>
                <Checkbox disabled>禁用</Checkbox>
              </Space>
            </Space>
          </div>
        );
      case 'Radio':
        return (
          <div>
            <Paragraph>用于在多个备选项中选中单个状态。</Paragraph>
            <Space direction="vertical">
              <Radio.Group defaultValue="a" options={[
                { label: '选项A', value: 'a' },
                { label: '选项B', value: 'b' },
                { label: '选项C', value: 'c' },
              ]} />
              <Radio.Group defaultValue="a" options={[
                { label: '选项A', value: 'a' },
                { label: '选项B', value: 'b' },
              ]} buttonStyle="solid" />
            </Space>
          </div>
        );
      case 'Switch':
        return (
          <div>
            <Paragraph>使用开关切换两种状态之间。</Paragraph>
            <Space>
              <Switch checked={switchValue} onChange={setSwitchValue} />
              <Switch checkedChildren="开" unCheckedChildren="关" />
              <Switch disabled />
            </Space>
          </div>
        );
      case 'Slider':
        return (
          <div>
            <Paragraph>滑动型输入器，展示当前值和可选范围。</Paragraph>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Slider value={sliderValue} onChange={setSliderValue} />
              <Slider range defaultValue={[20, 80]} />
              <Slider disabled />
            </Space>
          </div>
        );
      case 'Rate':
        return (
          <div>
            <Paragraph>用于对事物进行评分操作。</Paragraph>
            <Space>
              <Rate value={rateValue} onChange={setRateValue} />
              <Rate allowHalf defaultValue={2.5} />
              <Rate disabled defaultValue={3} />
            </Space>
          </div>
        );
      case 'DatePicker':
        return (
          <div>
            <Paragraph>输入或选择日期的控件。</Paragraph>
            <Space>
              <DatePicker placeholder="选择日期" />
              <DatePicker.RangePicker placeholder={['开始', '结束']} />
            </Space>
          </div>
        );
      case 'TimePicker':
        return (
          <div>
            <Paragraph>输入或选择时间的控件。</Paragraph>
            <Space>
              <TimePicker placeholder="选择时间" />
              <TimePicker.RangePicker placeholder={['开始', '结束']} />
            </Space>
          </div>
        );
      case 'Mentions':
        return (
          <div>
            <Paragraph>用于在输入中提及某人或某事。</Paragraph>
            <Mentions
              style={{ width: '100%' }}
              placeholder="输入 @ 触发提及"
              options={[
                { value: 'Jack', label: 'Jack' },
                { value: 'Lucy', label: 'Lucy' },
                { value: 'Tom', label: 'Tom' },
              ]}
            />
          </div>
        );
      case 'Upload':
        return (
          <div>
            <Paragraph>文件选择上传和拖拽上传控件。</Paragraph>
            <Upload.Dragger style={{ border: '2px dashed #d9d9d9', borderRadius: 8 }}>
              <p className="ant-upload-drag-icon"><UploadOutlined /></p>
              <p className="ant-upload-text">点击或拖拽文件上传</p>
            </Upload.Dragger>
          </div>
        );
      case 'ColorPicker':
        return (
          <div>
            <Paragraph>用于选择颜色。</Paragraph>
            <Space>
              <ColorPicker />
              <ColorPicker showText />
            </Space>
          </div>
        );
      case 'Transfer':
        return (
          <div>
            <Paragraph>双栏穿梭选择框。</Paragraph>
            <Transfer
              dataSource={[
                { key: '1', title: '选项1' },
                { key: '2', title: '选项2' },
                { key: '3', title: '选项3' },
              ]}
              targetKeys={['1']}
            />
          </div>
        );
      case 'AutoComplete':
        return (
          <div>
            <Paragraph>输入框自动完成功能。</Paragraph>
            <AutoComplete
              options={[
                { value: 'Apple', label: 'Apple' },
                { value: 'Banana', label: 'Banana' },
                { value: 'Cherry', label: 'Cherry' },
                { value: 'Date', label: 'Date' },
              ]}
              placeholder="输入水果名称"
              style={{ width: 200 }}
            />
          </div>
        );
      case 'Table':
        return (
          <div>
            <Paragraph>展示行列数据。</Paragraph>
            <Table columns={tableColumns} dataSource={tableData} pagination={false} />
          </div>
        );
      case 'List':
        return (
          <div>
            <Paragraph>最基础的列表展示。</Paragraph>
            <List
              dataSource={['Item 1', 'Item 2', 'Item 3', 'Item 4']}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </div>
        );
      case 'Card':
        return (
          <div>
            <Paragraph>通用卡片容器。</Paragraph>
            <Row gutter={16}>
              <Col span={8}><Card title="标准卡片">卡片内容</Card></Col>
              <Col span={8}><Card title="带边框" bordered>卡片内容</Card></Col>
              <Col span={8}><Card hoverable>悬停卡片</Card></Col>
            </Row>
          </div>
        );
      case 'Descriptions':
        return (
          <div>
            <Paragraph>展示多个只读字段的组合。</Paragraph>
            <Descriptions title="用户信息" bordered column={3}>
              <Descriptions.Item label="姓名">张三</Descriptions.Item>
              <Descriptions.Item label="年龄">28</Descriptions.Item>
              <Descriptions.Item label="性别">男</Descriptions.Item>
              <Descriptions.Item label="邮箱">zhangsan@example.com</Descriptions.Item>
            </Descriptions>
          </div>
        );
      case 'Statistic':
        return (
          <div>
            <Paragraph>展示统计数值。</Paragraph>
            <Row gutter={16}>
              <Col span={6}><Statistic title="总用户" value={12860} /></Col>
              <Col span={6}><Statistic title="今日新增" value={328} /></Col>
              <Col span={6}><Statistic title="转化率" value={68.5} suffix="%" /></Col>
              <Col span={6}><Statistic title="收入" value={125800} prefix="¥" /></Col>
            </Row>
          </div>
        );
      case 'Tag':
        return (
          <div>
            <Paragraph>进行标记和分类的小标签。</Paragraph>
            <Space wrap>
              <Tag>默认标签</Tag>
              <Tag color="primary">主色标签</Tag>
              <Tag color="success">成功标签</Tag>
              <Tag color="warning">警告标签</Tag>
              <Tag color="error">错误标签</Tag>
              <Tag closable>可关闭标签</Tag>
              <Tag icon={<CheckOutlined />}>带图标标签</Tag>
            </Space>
          </div>
        );
      case 'Badge':
        return (
          <div>
            <Paragraph>图标右上角的圆形徽标数字。</Paragraph>
            <Space>
              <Badge count={5}><Avatar size={32} icon={<UserOutlined />} /></Badge>
              <Badge dot><Button icon={<BellOutlined />} /></Badge>
              <Badge count={99} overflowCount={99}><Avatar size={32} icon={<UserOutlined />} /></Badge>
              <Badge status="success" />
              <Badge status="error" text="错误" />
            </Space>
          </div>
        );
      case 'Avatar':
        return (
          <div>
            <Paragraph>用来代表用户或事物。</Paragraph>
            <Space>
              <Avatar icon={<UserOutlined />} />
              <Avatar size={64} icon={<UserOutlined />} />
              <Avatar size={32} icon={<UserOutlined />} />
              <Avatar size={24} icon={<UserOutlined />} />
              <Avatar>张</Avatar>
            </Space>
          </div>
        );
      case 'Progress':
        return (
          <div>
            <Paragraph>展示操作的当前进度。</Paragraph>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Row gutter={16}>
                <Col span={6}><Progress percent={60} /></Col>
                <Col span={6}><Progress percent={80} status="active" /></Col>
                <Col span={6}><Progress percent={100} status="success" /></Col>
                <Col span={6}><Progress percent={50} status="exception" /></Col>
              </Row>
              <Row gutter={16}>
                <Col span={6}><Progress type="circle" percent={75} /></Col>
                <Col span={6}><Progress type="dashboard" percent={75} /></Col>
              </Row>
            </Space>
          </div>
        );
      case 'Timeline':
        return (
          <div>
            <Paragraph>垂直展示的时间流信息。</Paragraph>
            <Timeline items={[
              { children: '完成项目立项', color: 'green' },
              { children: '完成需求评审', color: 'blue' },
              { children: '开发中', color: 'purple' },
              { children: '待测试' },
            ]} />
          </div>
        );
      case 'Calendar':
        return (
          <div>
            <Paragraph>按照日历形式展示数据的容器。</Paragraph>
            <Calendar />
          </div>
        );
      case 'Empty':
        return (
          <div>
            <Paragraph>空状态时的展示占位图。</Paragraph>
            <Empty description="暂无数据" />
          </div>
        );
      case 'Image':
        return (
          <div>
            <Paragraph>可预览的图片。</Paragraph>
            <Image
              width={200}
              src="https://neeko-copilot.bytedance.net/api/text2image?prompt=beautiful%20nature%20landscape&image_size=square"
            />
          </div>
        );
      case 'Popover':
        return (
          <div>
            <Paragraph>点击/鼠标移入元素，弹出气泡式的卡片浮层。</Paragraph>
            <Popover content="气泡卡片内容" title="标题">
              <Button>点击查看</Button>
            </Popover>
          </div>
        );
      case 'Tooltip':
        return (
          <div>
            <Paragraph>简单的文字提示气泡框。</Paragraph>
            <Tooltip title="这是提示内容">
              <Button>悬停查看</Button>
            </Tooltip>
          </div>
        );
      case 'Tabs':
        return (
          <div>
            <Paragraph>选项卡切换组件。</Paragraph>
            <Tabs items={[
              { key: '1', label: 'Tab 1', children: '内容1' },
              { key: '2', label: 'Tab 2', children: '内容2' },
              { key: '3', label: 'Tab 3', children: '内容3' },
            ]} />
          </div>
        );
      case 'Collapse':
        return (
          <div>
            <Paragraph>可以折叠/展开的内容区域。</Paragraph>
            <Collapse items={[
              { key: '1', label: '折叠面板1', children: '内容1' },
              { key: '2', label: '折叠面板2', children: '内容2' },
              { key: '3', label: '折叠面板3', children: '内容3' },
            ]} />
          </div>
        );
      case 'Carousel':
        return (
          <div>
            <Paragraph>一组轮播的区域。</Paragraph>
            <Carousel autoplay arrows>
              <div style={{ height: '150px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>轮播1</div>
              <div style={{ height: '150px', background: '#e8e8e8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>轮播2</div>
              <div style={{ height: '150px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>轮播3</div>
            </Carousel>
          </div>
        );
      case 'Segmented':
        return (
          <div>
            <Paragraph>用于展示多个选项并允许用户选择其中单个选项。</Paragraph>
            <Segmented options={['Daily', 'Weekly', 'Monthly', 'Yearly']} />
          </div>
        );
      case 'QRCode':
        return (
          <div>
            <Paragraph>能够将文本转换生成二维码的组件。</Paragraph>
            <QRCode value="https://ant.design" />
          </div>
        );
      case 'Tree':
        return (
          <div>
            <Paragraph>多层次的结构列表。</Paragraph>
            <Tree
              defaultExpandAll
              treeData={[
                {
                  title: '父节点1',
                  key: '0-0',
                  children: [
                    { title: '子节点1', key: '0-0-0' },
                    { title: '子节点2', key: '0-0-1' },
                  ],
                },
                {
                  title: '父节点2',
                  key: '0-1',
                  children: [
                    { title: '子节点3', key: '0-1-0' },
                  ],
                },
              ]}
            />
          </div>
        );
      case 'Tour':
        return (
          <div>
            <Paragraph>用于分步引导用户了解产品功能的气泡组件。</Paragraph>
            <Tour
              open={false}
              steps={[
                { title: '步骤1', description: '欢迎使用', target: () => document.getElementById('tour-target') },
              ]}
            />
            <div id="tour-target" style={{ padding: '16px', background: '#f5f5f5' }}>Tour 目标区域</div>
          </div>
        );
      case 'Alert':
        return (
          <div>
            <Paragraph>警告提示，展现需要关注的信息。</Paragraph>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Alert message="成功提示" type="success" showIcon />
              <Alert message="信息提示" type="info" showIcon />
              <Alert message="警告提示" type="warning" showIcon />
              <Alert message="错误提示" type="error" showIcon />
            </Space>
          </div>
        );
      case 'Modal':
        return (
          <div>
            <Paragraph>展示一个对话框。</Paragraph>
            <Button type="primary" onClick={() => setModalVisible(true)}>打开对话框</Button>
            <Modal
              title="对话框标题"
              open={modalVisible}
              onOk={() => setModalVisible(false)}
              onCancel={() => setModalVisible(false)}
            >
              对话框内容
            </Modal>
          </div>
        );
      case 'Drawer':
        return (
          <div>
            <Paragraph>屏幕边缘滑出的浮层面板。</Paragraph>
            <Button type="primary" onClick={() => setDrawerVisible(true)}>打开抽屉</Button>
            <Drawer
              title="抽屉标题"
              open={drawerVisible}
              onClose={() => setDrawerVisible(false)}
            >
              抽屉内容
            </Drawer>
          </div>
        );
      case 'Message':
        return (
          <div>
            <Paragraph>全局展示操作反馈信息。</Paragraph>
            <Space>
              <Button onClick={() => message.info('信息提示')}>信息</Button>
              <Button onClick={() => message.success('成功提示')}>成功</Button>
              <Button onClick={() => message.warning('警告提示')}>警告</Button>
              <Button onClick={() => message.error('错误提示')}>错误</Button>
            </Space>
          </div>
        );
      case 'Notification':
        return (
          <div>
            <Paragraph>全局展示通知提醒信息。</Paragraph>
            <Space>
              <Button onClick={() => message.info('这是一条通知')}>打开通知</Button>
            </Space>
          </div>
        );
      case 'Spin':
        return (
          <div>
            <Paragraph>用于页面和区块的加载中状态。</Paragraph>
            <Space>
              <Spin />
              <Spin tip="加载中..." />
              <Spin size="large" />
            </Space>
          </div>
        );
      case 'Skeleton':
        return (
          <div>
            <Paragraph>在需要等待加载内容的位置提供一个占位图形组合。</Paragraph>
            <Skeleton active />
          </div>
        );
      case 'Result':
        return (
          <div>
            <Paragraph>用于反馈一系列操作任务的处理结果。</Paragraph>
            <Row gutter={16}>
              <Col span={8}><Result status="success" title="操作成功" /></Col>
              <Col span={8}><Result status="error" title="操作失败" /></Col>
              <Col span={8}><Result status="warning" title="警告提示" /></Col>
            </Row>
          </div>
        );
      case 'Popconfirm':
        return (
          <div>
            <Paragraph>点击元素，弹出气泡式的确认框。</Paragraph>
            <Popconfirm title="确定要删除吗？" okText="确定" cancelText="取消">
              <Button danger>删除</Button>
            </Popconfirm>
          </div>
        );
      case 'Watermark':
        return (
          <div>
            <Paragraph>给页面的某个区域加上水印。</Paragraph>
            <Watermark content="Ant Design" style={{ width: 200, height: 200 }}>
              <div style={{ height: '200px', background: '#f5f5f5' }}>水印区域</div>
            </Watermark>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div id={`component-${componentName}`}>
      <Title level={3}>{componentName}</Title>
      <Card>{renderComponent()}</Card>
    </div>
  );
};

const AntdComponentPreview = () => {
  const [primaryColor, setPrimaryColor] = useState('#1677ff');
  const [isDark, setIsDark] = useState(false);
  const [borderColor, setBorderColor] = useState('#d9d9d9');
  const [borderRadius, setBorderRadius] = useState(8);
  const [expandedCategories, setExpandedCategories] = useState(['general', 'layout', 'navigation', 'data-entry', 'data-display', 'feedback']);
  const [activeComponent, setActiveComponent] = useState('Button');
  const [modalVisible, setModalVisible] = useState(false);
  const [aiModalVisible, setAiModalVisible] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState(null);
  const [aiDescription, setAiDescription] = useState('');
  const contentRef = useRef(null);

  useEffect(() => {
    setBorderColor(isDark ? '#1f1f1f' : '#d9d9d9');
  }, [isDark]);

  const customTheme = {
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorPrimary: primaryColor,
      colorBorder: borderColor,
      borderRadius,
    },
  };

  const toggleCategory = (key) => {
    setExpandedCategories((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const scrollToComponent = (componentName) => {
    setActiveComponent(componentName);
    const element = document.getElementById(`component-${componentName}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const sections = contentRef.current.querySelectorAll('[id^="component-"]');
      let current = '';
      sections.forEach((section) => {
        const offsetTop = section.offsetTop - 100;
        if (window.scrollY >= offsetTop) {
          current = section.id.replace('component-', '');
        }
      });
      if (current && current !== activeComponent) {
        setActiveComponent(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeComponent]);

  return (
    <ConfigProvider theme={customTheme}>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100, background: isDark ? '#141414' : '#fff', borderBottom: `1px solid ${isDark ? '#1f1f1f' : '#f0f0f0'}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M139.917 61.2997C140.799 60.4209 141.498 59.3768 141.976 58.227C142.453 57.0773 142.699 55.8446 142.699 54.5997C142.699 53.3547 142.453 52.1221 141.976 50.9723C141.498 49.8226 140.799 48.7784 139.917 47.8997L126.25 34.2413L126.275 34.2663C122.667 30.6497 116.45 24.433 107.667 15.6747C105.66 13.7299 102.971 12.6501 100.177 12.6672C97.383 12.6843 94.7072 13.7971 92.725 15.7663L15.8083 92.6247C14.8252 93.602 14.0449 94.7641 13.5125 96.0441C12.9801 97.3241 12.7061 98.6967 12.7061 100.083C12.7061 101.469 12.9801 102.842 13.5125 104.122C14.0449 105.402 14.8252 106.564 15.8083 107.541L92.7 184.375C94.6826 186.354 97.3695 187.465 100.171 187.465C102.972 187.465 105.659 186.354 107.642 184.375L139.892 152.158C141.223 150.835 142.13 149.146 142.498 147.306C142.867 145.466 142.679 143.558 141.96 141.825C141.241 140.091 140.022 138.611 138.459 137.572C136.896 136.534 135.06 135.983 133.183 135.991C130.667 135.991 128.25 136.983 126.475 138.758L102.058 163.208C101.823 163.449 101.542 163.641 101.231 163.772C100.921 163.903 100.587 163.971 100.25 163.971C99.9129 163.971 99.5792 163.903 99.2687 163.772C98.9581 163.641 98.6769 163.449 98.4416 163.208L37.025 101.841C36.7848 101.606 36.5941 101.326 36.4638 101.016C36.3336 100.706 36.2665 100.373 36.2665 100.037C36.2665 99.7011 36.3336 99.3684 36.4638 99.0586C36.5941 98.7488 36.7848 98.4681 37.025 98.233L98.425 36.858C98.5083 36.783 98.6 36.7247 98.675 36.6497C99.1609 36.2578 99.7757 36.0619 100.399 36.1005C101.022 36.139 101.608 36.4093 102.042 36.858L126.492 61.2997C127.372 62.1821 128.417 62.8821 129.568 63.3598C130.72 63.8375 131.954 64.0833 133.2 64.0833C134.446 64.0833 135.68 63.8375 136.831 63.3598C137.983 62.8821 139.028 62.1821 139.908 61.2997H139.917ZM79.8083 100.475C79.8061 103.202 80.3419 105.902 81.3849 108.422C82.428 110.941 83.9578 113.23 85.8868 115.158C87.8159 117.085 90.1062 118.613 92.6266 119.654C95.147 120.695 97.848 121.229 100.575 121.225C106.078 121.222 111.356 119.036 115.248 115.145C119.14 111.255 121.329 105.978 121.333 100.475C121.334 97.7491 120.798 95.0501 119.755 92.532C118.712 90.014 117.183 87.7262 115.255 85.7998C113.327 83.8733 111.038 82.3458 108.519 81.3048C106 80.2638 103.301 79.7297 100.575 79.733C95.0723 79.7352 89.7953 81.9204 85.902 85.809C82.0087 89.6976 79.8171 94.972 79.8083 100.475ZM184.542 92.933L160.542 69.0497C158.736 67.4022 156.366 66.5138 153.922 66.5693C151.479 66.6247 149.151 67.6196 147.422 69.3472C145.694 71.0748 144.697 73.4022 144.64 75.8455C144.583 78.2888 145.47 80.6601 147.117 82.4663L163.325 98.658C163.566 98.8933 163.758 99.1745 163.889 99.485C164.02 99.7956 164.088 100.129 164.088 100.466C164.088 100.803 164.02 101.137 163.889 101.448C163.758 101.758 163.566 102.039 163.325 102.275L147.35 118.233C146.015 119.554 145.104 121.244 144.733 123.085C144.362 124.927 144.549 126.837 145.269 128.572C145.989 130.307 147.209 131.788 148.775 132.826C150.341 133.864 152.18 134.412 154.058 134.4C156.575 134.4 158.983 133.4 160.767 131.625L184.558 107.858C185.538 106.878 186.316 105.715 186.845 104.435C187.375 103.154 187.647 101.782 187.645 100.396C187.644 99.0105 187.369 97.6388 186.836 96.3595C186.304 95.0803 185.524 93.9187 184.542 92.9413V92.933Z" fill="white"/>
              </svg>
            </div>
            <Title level={4} style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              AntD主题工坊
              <Tooltip title="基于 Ant Design v6.5.1" placement="bottom">
                <InfoCircleOutlined style={{ color: '#DADADA', fontSize: '14px' }} />
              </Tooltip>
            </Title>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Text style={{ fontSize: '14px' }}>主题颜色：</Text>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', height: '36px' }}>
              {themeColors.map((color) => (
                <Tooltip key={color.value} title={`${color.name}主题`} placement="bottom">
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      border: `2px solid ${primaryColor === color.value ? 'rgba(255,255,255,0.5)' : 'transparent'}`,
                      background: color.value,
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: primaryColor === color.value ? '0 0 0 2px rgba(0,0,0,0.1)' : 'none',
                    }}
                    onClick={() => setPrimaryColor(color.value)}
                  >
                    <img src={color.icon} alt={color.name} style={{ width: '18px', height: '18px' }} />
                  </div>
                </Tooltip>
              ))}
            </div>
            <ColorPicker
              value={primaryColor}
              onChange={(color) => setPrimaryColor(color.toHexString())}
              showText
              style={{ width: '110px', height: '32px' }}
            />
            <Button
              icon={<ReloadOutlined />}
              onClick={() => {
                setPrimaryColor('#1677ff');
                setBorderColor('#d9d9d9');
                setBorderRadius(8);
                setIsDark(false);
              }}
              style={{ height: '32px' }}
              title="重置主题"
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '160px' }}>
              <Text style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>圆角：</Text>
              <Slider
                min={0}
                max={24}
                value={borderRadius}
                onChange={setBorderRadius}
                style={{ flex: 1 }}
                tooltip={{ formatter: (val) => `${val}px` }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Text style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>边框色：</Text>
              <ColorPicker
                value={borderColor}
                onChange={(color) => setBorderColor(color.toHexString())}
                showText
                style={{ width: '110px', height: '32px' }}
              />
            </div>
            <Button
              type={isDark ? 'primary' : 'default'}
              onClick={() => setIsDark(!isDark)}
              icon={isDark ? <SunOutlined /> : <MoonOutlined />}
            />
            <Button
              type="default"
              onClick={() => setModalVisible(true)}
            >
              导出配置
            </Button>
            <Button
              onClick={() => setAiModalVisible(true)}
              className="ai-button-shimmer"
              icon={<SparklesIcon />}
              style={{
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.60)',
                background: 'linear-gradient(90deg, #FF86F3 0%, #549BFF 100%)',
                color: '#fff',
                fontWeight: 'bold',
              }}
            >
              AI 生成主题
            </Button>
          </div>
        </Header>
        <Layout>
          <Sider
            width={220}
            style={{
              position: 'sticky',
              top: 64,
              height: 'calc(100vh - 64px)',
              overflowY: 'auto',
              background: isDark ? '#141414' : '#fff',
              borderRight: `1px solid ${isDark ? '#1f1f1f' : '#f0f0f0'}`,
            }}
          >

            <Menu
              mode="inline"
              style={{ border: 'none' }}
              defaultOpenKeys={expandedCategories}
              openKeys={expandedCategories}
              onOpenChange={(keys) => setExpandedCategories(keys)}
              selectedKeys={[activeComponent]}
            >
              {componentCategories.map((category) => (
                <Menu.SubMenu
                  key={category.key}
                  icon={category.icon}
                  title={category.nameZh}
                >
                  {category.components.map((component) => (
                    <Menu.Item
                      key={component.name}
                      onClick={() => scrollToComponent(component.name)}
                    >
                      {component.nameZh}
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              ))}
            </Menu>
          </Sider>
          <Content ref={contentRef} style={{ padding: '24px', background: isDark ? '#0a0a0a' : '#fafafa' }}>
            <div id="general">
              <Title level={2}>通用组件</Title>
              {componentCategories.find((c) => c.key === 'general').components.map((c) => (
                <ComponentPreview key={c.name} componentName={c.name} />
              ))}
            </div>
            <Divider />
            <div id="layout">
              <Title level={2}>布局组件</Title>
              {componentCategories.find((c) => c.key === 'layout').components.map((c) => (
                <ComponentPreview key={c.name} componentName={c.name} />
              ))}
            </div>
            <Divider />
            <div id="navigation">
              <Title level={2}>导航组件</Title>
              {componentCategories.find((c) => c.key === 'navigation').components.map((c) => (
                <ComponentPreview key={c.name} componentName={c.name} />
              ))}
            </div>
            <Divider />
            <div id="data-entry">
              <Title level={2}>数据录入</Title>
              {componentCategories.find((c) => c.key === 'data-entry').components.map((c) => (
                <ComponentPreview key={c.name} componentName={c.name} />
              ))}
            </div>
            <Divider />
            <div id="data-display">
              <Title level={2}>数据展示</Title>
              {componentCategories.find((c) => c.key === 'data-display').components.map((c) => (
                <ComponentPreview key={c.name} componentName={c.name} />
              ))}
            </div>
            <Divider />
            <div id="feedback">
              <Title level={2}>反馈组件</Title>
              {componentCategories.find((c) => c.key === 'feedback').components.map((c) => (
                <ComponentPreview key={c.name} componentName={c.name} />
              ))}
            </div>
          </Content>
        </Layout>
        <Modal
          title="导出主题配置"
          open={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={[
            <Button key="copy" type="primary" onClick={() => {
              navigator.clipboard.writeText(JSON.stringify(customTheme, null, 2));
              message.success('配置已复制到剪贴板');
              setModalVisible(false);
            }}>
              复制配置
            </Button>,
            <Button key="close" onClick={() => setModalVisible(false)}>
              关闭
            </Button>,
          ]}
        >
          <Paragraph style={{ marginBottom: '16px' }}>以下配置可直接用于 ConfigProvider 的 theme 属性：</Paragraph>
          <pre style={{ background: isDark ? '#1f1f1f' : '#f5f5f5', padding: '16px', borderRadius: '8px', overflow: 'auto', maxHeight: '400px' }}>
            <code style={{ color: isDark ? '#e6e6e6' : '#333' }}>
              {JSON.stringify(customTheme, null, 2)}
            </code>
          </pre>
          <Paragraph style={{ marginTop: '16px', fontSize: '12px', color: '#999' }}>
            使用方式：{'\n'}
            <code style={{ background: isDark ? '#1f1f1f' : '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>
              {'<ConfigProvider theme={上述配置}>...</ConfigProvider>'}
            </code>
          </Paragraph>
        </Modal>
        <Modal
          title="AI 生成主题"
          open={aiModalVisible}
          onCancel={() => {
            setAiModalVisible(false);
            setAiResult(null);
            setAiDescription('');
          }}
          footer={null}
        >
          {!aiResult ? (
            <div>
              <Paragraph style={{ marginBottom: '16px' }}>描述你想要的主题风格，AI 将为你生成主题配置：</Paragraph>
              <Input.TextArea
                value={aiDescription}
                onChange={(e) => setAiDescription(e.target.value)}
                placeholder="例如：科技感十足的深蓝色主题，适合企业后台管理系统"
                rows={4}
                style={{ marginBottom: '16px' }}
              />
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                <Button
                  type="primary"
                  loading={aiLoading}
                  onClick={async () => {
                    if (!aiDescription.trim()) {
                      message.warning('请输入主题描述');
                      return;
                    }
                    setAiLoading(true);
                    try {
                      const response = await fetch('/api/coze/v3/chat', {
                        method: 'POST',
                        headers: {
                          'Authorization': 'Bearer pat_3d2loXyzre2PZToxN8LmGri3XE220aDKUE3AjQ3yOGc8ZfLXt8YCpBCBIpp25qKZ',
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          bot_id: '7662754179295133739',
                          user_id: 'antd_preview_user',
                          stream: false,
                          auto_save_history: true,
                          additional_messages: [
                            {
                              role: 'user',
                              content: aiDescription,
                              content_type: 'text',
                            },
                          ],
                        }),
                      });
                      const data = await response.json();
                      if (data.code === 0 && data.data) {
                        const { conversation_id, id: chat_id } = data.data;
                        let retries = 0;
                        const maxRetries = 30;
                        let completed = false;
                        while (retries < maxRetries && !completed) {
                          await new Promise(resolve => setTimeout(resolve, 1000));
                          const retrieveResponse = await fetch(`/api/coze/v3/chat/retrieve?conversation_id=${conversation_id}&chat_id=${chat_id}`, {
                            headers: {
                              'Authorization': 'Bearer pat_3d2loXyzre2PZToxN8LmGri3XE220aDKUE3AjQ3yOGc8ZfLXt8YCpBCBIpp25qKZ',
                            },
                          });
                          const retrieveData = await retrieveResponse.json();
                          if (retrieveData.code === 0 && retrieveData.data) {
                            if (retrieveData.data.status === 'completed') {
                              completed = true;
                            } else if (retrieveData.data.status === 'failed') {
                              message.error('AI 生成失败: ' + (retrieveData.data.last_error?.msg || '未知错误'));
                              break;
                            }
                          }
                          retries++;
                        }
                        if (completed) {
                          const messageResponse = await fetch(`/api/coze/v3/chat/message/list?conversation_id=${conversation_id}&chat_id=${chat_id}`, {
                            headers: {
                              'Authorization': 'Bearer pat_3d2loXyzre2PZToxN8LmGri3XE220aDKUE3AjQ3yOGc8ZfLXt8YCpBCBIpp25qKZ',
                            },
                          });
                          const messageData = await messageResponse.json();
                          if (messageData.code === 0 && messageData.data) {
                            const items = messageData.data.items || messageData.data;
                            if (items && items.length > 0) {
                              const answerMsg = items.find(m => m.type === 'answer');
                              const content = answerMsg?.content;
                              if (content) {
                                try {
                                  const jsonMatch = content.match(/\{[\s\S]*\}/);
                                  const result = jsonMatch ? JSON.parse(jsonMatch[0]) : JSON.parse(content);
                                  setAiResult(result);
                                  setPrimaryColor(result.colorPrimary);
                                  setBorderRadius(result.borderRadius);
                                  setBorderColor(result.colorBorder);
                                  message.success('主题已应用！');
                                } catch (e) {
                                  message.error('解析主题配置失败');
                                }
                              } else {
                                message.error('消息内容为空');
                              }
                            } else {
                              message.error('消息列表为空');
                            }
                          } else {
                            message.error('获取消息失败: ' + (messageData.msg || '未知错误'));
                          }
                        } else if (!completed) {
                          message.error('AI 生成超时，请重试');
                        }
                      } else {
                        message.error('AI 生成失败: ' + (data.msg || '未知错误'));
                      }
                    } catch (e) {
                      message.error('网络请求失败: ' + e.message);
                    } finally {
                      setAiLoading(false);
                    }
                  }}
                >
                  生成主题
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `linear-gradient(135deg, ${aiResult.colorPrimary} 0%, ${aiResult.colorPrimary}dd 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>AI</span>
                </div>
                <div>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '18px' }}>{aiResult.themeName}</h3>
                  <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>{aiResult.reason}</p>
                </div>
              </div>
              <div style={{ background: isDark ? '#1f1f1f' : '#f5f5f5', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                  <div>
                    <span style={{ fontSize: '12px', color: '#999' }}>主题色</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: aiResult.colorPrimary }}></div>
                      <span style={{ fontSize: '14px' }}>{aiResult.colorPrimary}</span>
                    </div>
                  </div>
                  <div>
                    <span style={{ fontSize: '12px', color: '#999' }}>圆角</span>
                    <div style={{ marginTop: '4px' }}>
                      <span style={{ fontSize: '14px' }}>{aiResult.borderRadius}px</span>
                    </div>
                  </div>
                  <div>
                    <span style={{ fontSize: '12px', color: '#999' }}>边框色</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: aiResult.colorBorder, border: '1px solid #ccc' }}></div>
                      <span style={{ fontSize: '14px' }}>{aiResult.colorBorder}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                <Button onClick={() => {
                  setAiModalVisible(false);
                  setAiResult(null);
                  setAiDescription('');
                }}>
                  关闭
                </Button>
                <Button type="primary" onClick={() => {
                  setAiResult(null);
                  setAiDescription('');
                }}>
                  继续生成
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </Layout>
    </ConfigProvider>
  );
};

export default AntdComponentPreview;