language: node_js
sudo: required
addons:
    chrome: stable
before_script:
    - npm install -g karma-cli
node_js:
    - "10"