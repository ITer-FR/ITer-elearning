#!/bin/bash

yarn set version berry
cd backend && yarn && cd functions && npm i
cd ../../frontend && yarn