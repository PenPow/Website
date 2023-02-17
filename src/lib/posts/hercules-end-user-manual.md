---
title: "Hercules End User Manual"
description: ""
cover: "hercules.webp"
major: false
hidden: true
---

Welcome to the Hercules System! If you have been sent this, then your nation has been registered with Hercules.

Please review this entire document before using Hercules, as certain features create **permanent** records that cannot be removed at a later date.

If you are serving as a Nation Owner (see [Permissions](#permissions) for more details), then you are recommended to read through this entire document. Otherwise, we recommend reading through the [Functionalities](#functionalities) of Hercules.

If you ever have any questions, queries or concerns, please raise it with the Hercules administration.

# Initial Nation Setup

If you are a nation owner, then you will need to perform some initial setup to get Hercules to work perfectly.

## Permissions

Hercules operates a permissions system to allow staggered access to Hercules.

There are 3 key levels of access to Hercules:

- Owner
- Administrator
- Member

This graph outlines the differences in access that members recieve to Hercules.

| Member                           | Administrator                         | Owner                                            |
|----------------------------------|---------------------------------------|--------------------------------------------------|
| Can perform background checks    | Can perform background checks         | Can perform background checks                    |
| Has read-only access to Hercules | Can modify watchlists and threatlists | Can modify watchlists, threatlists and diplomats |
|                                  | Can view members in nation            | Can view members in nation                       |
|                                  |                                       | Can modify access levels                         |

## User Management

As a nation owner, you have *sole access* to add and remove members from Hercules. Therefore, it is your responsibility to maintain the list of people with access to Hercules, and ensure that people who no longer require access are promptly removed from the system. You can view all members through the `/nation` command.

To create a user, use the `/modify` command. This command creates, modifies and removes users from our system. Pass in their discord account, and their permission level to update the user.

## Changes to Your Nation

If any of the details about your nation, such as

- Group URL
- Name
- Flag
  
become outdated, contact Hercules Administration.

We can also support custom flags now! If you wish to use a modified emoji, send it to a developer to get it added.

# Functionalities

Hercules aims to promote international communication and co-operation about users.

## Watchlists & Threatlists

These two lists provide a way of easily viewing users who could pose a threat to your nation. These records are not removeable (rather they are marked as inactive), therefore you should use these lists sparingly.

While everyone with access to Hercules can view these lists, only administrators and above have write access to the system.

These records show up during background checks, and we recommend that member states utilise this functionality to help aid both their own departments, and other nations.

We separate entries into groups and users, so that you can designate an entire group if their sole purpose is raiding.

Member states can have **1** open entry against each user or group (hereafter referred to as an `entity`, but this entry can be modified or deleted)

> **🚮 Warning About Deletions**: Deleted entries are never actually "deleted". Rather, they remain in our system, but marked as `inactive`

### The Distinction Between a Watchlist and a Threatlist

To further aid member states, we split users into 2 separate lists:

- Watchlists
  - Users who may pose a threat, or who have committed less serious violations
- Threatlists
  - Users who pose a major threat or who are of major concern

## Diplomats

Hercules also provides a way for member states to share information about diplomats and high ranking state officials to help identify diplomats on state visits, and so that member states are aware of who is authorised to act on behalf of your nation.

While everybody with access to Hercules can view these lists, only Nation Owners can modify these lists.

These entries are recoreded as observations during a background check.

## Background Checking

Our main functionality is background checking users. We make it really simple to perform a multitude of checks against users to aid your nation security.

Our system checks the following details within 5 seconds:

1. Whether they are a diplomat with a member state
2. If they have a watchlist or threatlist entry
3. If they have a friend with a watchlist or threatlist entry
4. If they are in a group with a watchlist or threatlist entry
5. If they are in a group where the owner has a watchlist or threatlist entry

![Demonstration of Background Checking](/img/bg-check.gif)