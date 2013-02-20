==========================
``gs.content.js.condense``
==========================
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The condense jQuery plugin packaged for Zope
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:Author: `Michael JasonSmith`_
:Contact: Michael JasonSmith <mpj17@onlinegroups.net>
:Date: 2013-02-20
:Organization: `GroupServer.org`_
:Copyright: This document is licensed under a
  `Creative Commons Attribution-Share Alike 3.0 New Zealand License`_
  by `OnlineGroups.Net`_.

Introduction
============

This module contains the Condense jQuery plugin, packaged as a Zope_
resource_.  It was originally developed for GroupServer_ (hence the ``gs.``
name-space). However, it is completely devoid of anything that is specific
to GroupServer: any Zope or Plone_ project should be able to make use of
this egg.

`The original code`_ by Joe Sillitoe is available on GitHub. The
``README.markdown`` and license files are in the ``doc/`` directory of this
product.

Resource
========

This product provides a JavaScript module as a Zope_ `browser
resource`_. Any Zope or Plone_ project should be able to use this product
as-is by placing the following line in a page template::

  <script type="text/havascript"
          src="/++resource++jquery.condense-20130107.js"
          defer="true"> </script>

A minified version is also available::

  <script type="text/havascript"
          src="/++resource++jquery.condense-min-20130107.js"
          defer="true"> </script>


JavaScript
==========

The constructor for a ``condense`` block is as follows::

     jQuery('#blockId').condense();

Options
-------

[Mostly from the comment in the JavaScript.]

``condensedLength``: 
  Target length of condensed element. (Default: 200)

``minTrail``: 
  Minimun length of the trailing text. (Default: 20)

``delim``: 
  Delimiter used for finding the break point. (Default: " " - {space})

``moreText``: 
  Text used for the more control. (Default: [more])

``lessText``: 
  Text used for the less control. (Default: [less])

``ellipsis``: 
  Text added to condensed element. Default:  ( ... )

``moreSpeed``: 
  Animation Speed for expanding. (Default: "normal")

``lessSpeed``:
  Animation Speed for condensing. (Default: "normal")

``easing``: 
  Easing algorith. (Default: "linear")

``expandedWidth``: 
  Width of the expanded text (optional)


Resources
=========

- Code repository: https://source.iopen.net/groupserver/gs.content.js.condense/
- Original code: https://github.com/jsillitoe/jquery-condense-plugin/
- Questions and comments to http://groupserver.org/groups/development/
- Report bugs at https://redmine.iopen.net/projects/groupserver/

.. _GroupServer: http://groupserver.org/
.. _GroupServer.org: http://groupserver.org/
.. _OnlineGroups.Net: https://onlinegroups.net
.. _Michael JasonSmith: http://groupserver.org/p/mpj17
.. _Creative Commons Attribution-Share Alike 3.0 New Zealand License:
   http://creativecommons.org/licenses/by-sa/3.0/nz/
.. _jQuery.UI: http://jqueryui.com/
.. _Plone: http://plone.org/
.. _Zope: http://zope.org/
.. _browser resource: http://docs.zope.org/zope.browserresource/
.. _the original code: https://github.com/jsillitoe/jquery-condense-plugin/

..  LocalWords:  jQuery UI Plone iopen js
