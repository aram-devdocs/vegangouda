#!/bin/bash

# Function to partition drives
partition_drive() {
  local drive=$1
  echo "Partitioning $drive..."
  sudo fdisk $drive << EOF
n
p
1


w
EOF
  echo "$drive partitioned."
}

# Function to create RAID
create_raid() {
  echo "Creating RAID 1 array..."
  sudo mdadm --create --verbose /dev/md0 --level=1 --raid-devices=2 /dev/sda1 /dev/sdb1
  echo "RAID 1 array created."
}

# Function to format and mount RAID
format_and_mount() {
  echo "Formatting RAID array..."
  sudo mkfs.ext4 /dev/md0
  echo "Creating mount point..."
  sudo mkdir -p /mnt/nfs/raid
  echo "Mounting RAID array..."
  sudo mount /dev/md0 /mnt/nfs/raid
}

# Function to configure RAID auto-mount
configure_raid_automount() {
  echo "Config​⬤