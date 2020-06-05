/*
 * =========================================================================
 * Copyright 2020 T-Mobile USA, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 * See the LICENSE file for additional language around the disclaimer of
 * warranties. Trademark Disclaimer: Neither the name of “T-Mobile, USA”
 * nor the names of its contributors may be used to endorse or promote
 * products derived from this software without specific prior written
 * permission.
 * =========================================================================
 */

import { exec, mkdir } from "shelljs";
import { isDir } from "./util";
import { join } from "path";

function executeCommand(command: string) {
  console.log(command);
  const output = exec(command);
  console.log(output.stdout);

  return output.code;
}

//
export async function clone(
  local: string,
  remote: string,
  branch: string = "master",
  depth: number = 1
) {
  const command = (await isDir(join(local, ".git")))
    ? `git pull --depth ${depth}`
    : `git clone --depth ${depth} ${remote} -b ${branch} "${local}"`;
  return executeCommand(command);
}
