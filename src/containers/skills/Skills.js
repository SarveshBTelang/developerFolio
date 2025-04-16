import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { illustration, skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              />
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={
                isDark ? "dark-mode skills-heading" : "skills-heading"
              }
            >
              {skillsSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => (
                <p
                  key={i}
                  className={
                    isDark
                      ? "dark-mode subTitle skills-text"
                      : "subTitle skills-text"
                  }
                >
                  {skills}
                </p>
              ))}
            </div>

            {/* 💡 Inserted GitHub README Tech Logos Below */}
            <div className="tech-icons" style={{ marginTop: "30px" }}>
              <a href="https://www.python.org/" target="_blank" rel="noreferrer" title="Python">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="40" alt="Python" />
              </a>
              <a href="https://isocpp.org/" target="_blank" rel="noreferrer" title="C++">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" height="40" alt="C++" />
              </a>
              <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noreferrer" title="C">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" height="40" alt="C" />
              </a>
              <a href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noreferrer" title="MATLAB">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" height="40" alt="MATLAB" />
              </a>
              <a href="https://www.mysql.com/" target="_blank" rel="noreferrer" title="MySQL">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="40" alt="MySQL" />
              </a>
              <a href="https://pytorch.org/" target="_blank" rel="noreferrer" title="PyTorch">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" height="40" alt="PyTorch" />
              </a>
              <a href="https://www.tensorflow.org/" target="_blank" rel="noreferrer" title="TensorFlow">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" height="40" alt="TensorFlow" />
              </a>
              <a href="https://scikit-learn.org/" target="_blank" rel="noreferrer" title="Scikit-learn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" height="40" alt="Scikit-learn" />
              </a>
              <a href="https://opencv.org/" target="_blank" rel="noreferrer" title="OpenCV">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" height="40" alt="OpenCV" />
              </a>
              <a href="https://azure.microsoft.com/" target="_blank" rel="noreferrer" title="Azure">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" height="40" alt="Azure" />
              </a>
              <a href="https://www.docker.com/" target="_blank" rel="noreferrer" title="Docker">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height="40" alt="Docker" />
              </a>
              <a href="https://kubernetes.io/" target="_blank" rel="noreferrer" title="Kubernetes">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" height="40" alt="Kubernetes" />
              </a>
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer" title="Git">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" alt="Git" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" title="GitHub">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="40" alt="GitHub" />
              </a>
              <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer" title="VS Code">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="40" alt="VS Code" />
              </a>
              <a href="https://gitlab.com/" target="_blank" rel="noreferrer" title="GitLab">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" height="40" alt="GitLab" />
              </a>
              <a href="https://www.linux.org/" target="_blank" rel="noreferrer" title="Linux">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" height="40" alt="Linux" />
              </a>
              <a href="https://www.microsoft.com/en-us/windows" target="_blank" rel="noreferrer" title="Windows">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" height="40" alt="Windows" />
              </a>
              <a href="https://flask.palletsprojects.com/" target="_blank" rel="noreferrer" title="Flask">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" height="40" alt="Flask" />
              </a>
              <a href="https://www.anaconda.com/" target="_blank" rel="noreferrer" title="Anaconda">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" height="40" alt="Anaconda" />
              </a>
              <a href="https://jupyter.org/" target="_blank" rel="noreferrer" title="Jupyter">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" height="40" alt="Jupyter" />
              </a>
              <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer" title="Arduino">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" height="40" alt="Arduino" />
              </a>
              <a href="https://pandas.pydata.org/" target="_blank" rel="noreferrer" title="Pandas">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" height="40" alt="Pandas" />
              </a>
              <a href="https://numpy.org/" target="_blank" rel="noreferrer" title="NumPy">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" height="40" alt="NumPy" />
              </a>
              <a href="https://www.atlassian.com/software/confluence" target="_blank" rel="noreferrer" title="Confluence">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" height="40" alt="Confluence" />
              </a>
              <a href="https://seaborn.pydata.org/" target="_blank" rel="noreferrer" title="Seaborn">
                <img src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" height="40" alt="Seaborn" />
              </a>
              <a href="https://bitbucket.org/" target="_blank" rel="noreferrer" title="Bitbucket">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" height="40" alt="Bitbucket" />
              </a>
              <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer" title="PostgreSQL">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="40" alt="PostgreSQL" />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" title="JavaScript">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="JavaScript" />
              </a>
              <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer" title="Bash">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" height="40" alt="Bash" />
              </a>
              <a href="https://pytest.org/" target="_blank" rel="noreferrer" title="Pytest">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg" height="40" alt="Pytest" />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer" title="HTML">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="HTML" />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer" title="CSS">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="CSS" />
              </a>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer" title="React">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="React" />
              </a>
              <a href="https://nodejs.org/" target="_blank" rel="noreferrer" title="Node.js">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="Node.js" />
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}