import { Layout } from "antd";
import Sidebar from "./layouts/Sidebar";
import { Content } from "antd/es/layout/layout";
import NewProject from "./Views/NewProject/NewProject";
import NoData from "./Views/NoData/NoData";
import { useState } from "react";
import SelectedProject from "./Views/SelectedProject/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    setProjectsState((prev) => {
      const taskId = Math.random();
      const newTask = {
        text,
        id: taskId,
        projectId: prev.selectedProjectId,
      };

      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectsState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((t) => t.id !== id),
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  };

  const handleAddProject = () => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter((p) => p.id !== prev.selectedProjectId),
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  };

  const handleSaveProject = (projectData) => {
    setProjectsState((prev) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  };

  const selectedProject = projectsState.projects?.find(
    (d) => d.id === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      tasks={projectsState.tasks}
      handleAddTask={handleAddTask}
      handleDeleteTask={handleDeleteTask}
      handleDeleteProject={handleDeleteProject}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        handleSaveProject={handleSaveProject}
        handleCancelAddProject={handleCancelAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoData onAddProject={handleAddProject} />;
  }

  return (
    <Layout className="min-h-screen">
      <Sidebar
        onAddProject={handleAddProject}
        projects={projectsState.projects}
        handleSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      <Layout>
        <Content className="m-5 bg-white p-5 rounded-md">{content}</Content>
      </Layout>
    </Layout>
  );
}

export default App;
