import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Link, Redirect, Switch, useLocation } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import { loadEvents } from "../ducks";
import { DataViewPage } from "./DataViewPage";
import { DataEditorPage } from "./DataEditorPage";
import { editorDataPage, viewDataPage } from "./routes";

const { Content, Sider } = Layout;
const ROUTES = [viewDataPage, editorDataPage];

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const selectedMenuKeys = useMemo(
    () => [ROUTES.find(route => route === pathname)],
    [pathname]
  );

  useEffect(() => {
    dispatch(loadEvents());
  }, [dispatch]);

  return (
    <Layout style={{ minHeight: "100vh" }} hasSider>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <Menu theme="dark" mode="inline" selectedKeys={selectedMenuKeys}>
          <Menu.Item key={viewDataPage}>
            <Link to={viewDataPage}>
              <Icon type="pie-chart" />
              <span>Data View</span>
            </Link>
          </Menu.Item>
          <Menu.Item key={editorDataPage}>
            <Link to={editorDataPage}>
              <Icon type="edit" />
              <span>Data Editor</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content>
          <Switch>
            <Route path={viewDataPage} component={DataViewPage} />
            <Route path={editorDataPage} component={DataEditorPage} />
            <Redirect to={viewDataPage} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
