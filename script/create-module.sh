#!/usr/bin/env bash

SCRIPT_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd -P)
DEFAULT_MODULE_FOLDER="${SCRIPT_PATH}/../src/lib/components/Modules"
DEFAULT_SIDEBAR_FOLDER="${SCRIPT_PATH}/../src/lib/models"
MODULE_NAME="$1"
MODULE_FOLDER="$2"

create_folder() {
  cd "$1" &&\
  mkdir -p "${MODULE_NAME}" &&\
  cd "${MODULE_NAME}" &&\
  touch "${MODULE_NAME}.svelte" &&\
  echo "Module created"
}


# check if command line argument is empty or not present
if [ -z "$1" ]; then
  echo "Please enter name for module"
  exit 0
else
  # Create module folder and file
  if [ -z "$2" ]; then
    # Default location
    create_folder "${DEFAULT_MODULE_FOLDER}"
  else
    # User selected location
    create_folder "${MODULE_FOLDER}"
  fi

  # REMOVE LAST ]
  sed -i '' '1h;1!H;$!d;g;s/\(.*\)]/\1/' "${DEFAULT_SIDEBAR_FOLDER}/SIDEBAR.ts"
  # INSERT , AT LAST ELEMENT
  sed -i '' '1h;1!H;$!d;x;s/\(.*\)"[^.]*/&,/' "${DEFAULT_SIDEBAR_FOLDER}/SIDEBAR.ts"
  echo " \"${MODULE_NAME}\" ] " >> "${DEFAULT_SIDEBAR_FOLDER}/SIDEBAR.ts"

  echo "Sidebar updated"
fi
