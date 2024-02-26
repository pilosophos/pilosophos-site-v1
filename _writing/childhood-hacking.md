---
title: Childhood hacking
description: No sysadmin can contain a sufficiently bored child
layout: writing
list: unlisted
tags: nonfiction
---
# Childhood hacking

When I was a little kid, I didn't have my own computer. My parents didn't like watching me spend hours on the family computer, so I spent a great deal of time at the library. I admit, I *did* like reading, but I loved the internet more. Here's a small collection of little "hacks" I used to get unlimited internet access at the library, and later run arbitrary programs at the school computer labs.

## OOMing at the library

I'd like to dedicate this section to this older kid at the library who showed me how to do this first one. I ended up showing a couple other kids how to do it, he got mad, and I never saw him again. Now I'm telling the whole internet, but I doubt he cares anymore.

The library computers with internet access required you to log in with your library card number and PIN, then started a timer in the corner that automatically logs you out when it hits zero. The same program provides an app launcher with a restricted set of runnable programs, including Internet Explorer, and replaces the disabled start menu.

### Instructions

1. Log in with your library card number as normal
2. Once the app launcher appears, launch an ungodly number of Internet Explorer windows until the computer starts to slow down
3. Rapidly click on the app launcher or timer in the corner until Windows detects it's crashed and shows the "This program needs to close" dialog
4. Unplug the ethernet cable
5. Click "Don't send" <span class="text-muted">([they do get looked at!](https://devblogs.microsoft.com/oldnewthing/20050412-47/?p=35923))</span>. This will close the app launcher and timer
5. Plug the ethernet cable back in
6. Enjoy untimed access to the internet!

### Why it works

My best guess is that launching tons of IE windows takes up a ton of RAM, and when you're out of memory, a program that fails to respond to user input after a certain time frame <span class="text-muted">(like the computer timer)</span> will be detected as a crash by Windows, allowing you to force kill it.

As for why the ethernet cable needs to be unplugged, it's probably because the computer is being remotely managed and this breaks the remote connection, preventing the server from automatically starting the timer program again. I remember after I did this procedure, a librarian appeared couple hours later saying the computer I was using "wasn't on their network" even though I was still using the internet and told me to reboot the computer. I'd wager the remote connection is only re-established on a reboot, which is why you can plug the ethernet back in afterwards.

This stopped working for me when the library upgraded the computers.

## Breaking out of the library catalog with WordPad

Aside from the timed internet-connected computers, there was also Library Catalog computers that are untimed but had an access filter keeping access from anything but the library system's site. This was accomplished by using a special web browser that for some reason also let you start WordPad, which is the vector for the rest of the exploit chain allowing you to browse whatever websites you want. Important to note is that Microsoft Word was also installed on all these computers.

### Instructions

1. Click the "Wordpad" button on the locked-down browser
2. Click "Insert object" to embed an external program's file into the document
3. Embed a Microsoft Word document and open the new object, which will start Microsoft Word
4. Type a word in Word, select it, and right click
5. Click "Search with Bing," which opens Internet Explorer
6. Enjoy unrestricted access to the internet!

### Why it works
Since you can embed objects from supported programs into Wordpad documents, then open them in said programs from Wordpad, as long as you embedded something from a program that starts a web browser you were golden.

This also stopped working after filtering was added at the network level. But if you ever need to type an essay at the library or something, you could probably stick a USB drive into the computer and save it on there.

## 